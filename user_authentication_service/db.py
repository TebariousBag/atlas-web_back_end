#!/usr/bin/env python3
"""DB module
"""
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm.session import Session
from sqlalchemy.orm.exc import NoResultFound
from sqlalchemy.exc import InvalidRequestError

from user import Base
from user import User


class DB:
    """DB class
    """

    def __init__(self) -> None:
        """Initialize a new DB instance
        """
        self._engine = create_engine("sqlite:///a.db", echo=False)
        Base.metadata.drop_all(self._engine)
        Base.metadata.create_all(self._engine)
        self.__session = None

    @property
    def _session(self) -> Session:
        """Memoized session object
        """
        if self.__session is None:
            DBSession = sessionmaker(bind=self._engine)
            self.__session = DBSession()
        return self.__session

    # make sure to include self
    def add_user(self, email: str, hashed_password: str) -> User:
        """
        add user to db
        """
        new_user = User(email=email, hashed_password=hashed_password)
        # add user
        self._session.add(new_user)
        # then save to db with commit
        self._session.commit()
        # refresh new user, that way its up to date
        # just good habit
        self._session.refresh(new_user)

        return new_user

    def find_user_by(self, **kwargs) -> User:
        """
        takes in kwargs and filters by first matching user
        """
        try:
            user = self._session.query(User).filter_by(**kwargs).first()
            if user is None:
                raise NoResultFound()
            return user
        except InvalidRequestError:
            raise

    def update_user(self, user_id: int = None, **kwargs) -> None:
        """
        update user
        """
        attr = kwargs
        if user_id is None or attr is None:
            raise ValueError
        # find_user_by user_id
        user = self.find_user_by(id=user_id)
        # return nothing
