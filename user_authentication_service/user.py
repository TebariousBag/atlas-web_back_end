#!/usr/bin/env python3
"""
model named User for a database table named users
"""

from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
# base class for our catalog of classes
Base = declarative_base()


class User(Base):
	"""
	class for user table
	"""
	__tablename__ = 'users'

	# defining table, mainly names and types
	# i didn't use string lengths
	id = Column(Integer, primary_key=True)
	email = Column(String, nullable=False)
	hashed_password = Column(String, nullable=False)
	session_id = Column(String, nullable=True)
	reset_token = Column(String, nullable=True)
