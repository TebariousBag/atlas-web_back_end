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
	# need string lengths string lengths
	id = Column(Integer, primary_key=True)
	email = Column(String(250), nullable=False)
	hashed_password = Column(String(250), nullable=False)
	session_id = Column(String(250), nullable=True)
	reset_token = Column(String(250), nullable=True)
