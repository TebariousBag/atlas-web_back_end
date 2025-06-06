#!/usr/bin/env python3
"""
method that takes in a password string
arguments and returns bytes
"""

import bcrypt
from db import DB
from user import User
from sqlalchemy.exc import NoResultFound


class Auth:
    """Auth class to interact with the authentication database.
    """

    def __init__(self):
        self._db = DB()

    def register_user(self, email: str, password: str) -> User:
        """
        register user to db
        """
        try:
            user = self._db.find_user_by(email=email)
            raise ValueError(f"User {email} already exists")
        except NoResultFound:
            # hash pw with our hash pw function
            hashed_pass = _hash_password(password)
            # new user and add tto db
            user = self._db.add_user(email, hashed_pass)
            return user

    def valid_login(self, email: str, password: str) -> bool:
        """
        authorize credentials
        """
        try:
            # find user by email
            user = self._db.find_user_by(email=email)
            # encode before we compare it
            bytes_pass = password.encode('utf-8')
            hashed_pass = user.hashed_password
            # i think bcrypt.checkpw already returns true, but just in case
            if bcrypt.checkpw(bytes_pass, hashed_pass):
                return True
            return False
        # i have to have an except
        except NoResultFound:
            return False


def _hash_password(password: str) -> bytes:
    """
    takes in a password string arguments and returns bytes
    """
    # encode to bytes
    encoded_pw = password.encode('utf-8')
    # var to salt
    salt = bcrypt.gensalt()
    # then hash it with salt
    hashed = bcrypt.hashpw(encoded_pw, salt)
    return hashed
