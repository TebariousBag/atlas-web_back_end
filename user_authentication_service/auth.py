#!/usr/bin/env python3
"""
method that takes in a password string
arguments and returns bytes
"""

import bcrypt


# class auth?
class Auth:
    """
    auth class for db
    """
    def _hash_password(self, password: str) -> bytes:
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
