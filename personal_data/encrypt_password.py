#!/usr/bin/env python3
"""
encrypt passwords with bcrypt
"""
# this is not a natural library
import bcrypt


def hash_password(password: str) -> bytes:
    """ return a hashed password """
    # random data added to your password before hashing
    salt = bcrypt.gensalt()
    # bcrypt needs bytes, so we need to encod first
    encoded_pw = password.encode()
    # encrypt the hashed password with the salt
    hashed = bcrypt.hashpw(encoded_pw, salt)
    return hashed
