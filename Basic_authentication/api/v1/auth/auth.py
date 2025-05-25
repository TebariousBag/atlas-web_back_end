#!/usr/bin/env python3
"""
class is the template for all authentication system
"""

from flask import request
from typing import List, Type, TypeVar


class Auth:
    """
    api authentications
    """

    def require_auth(self, path: str, excluded_paths: List[str]) -> bool:
        """
        does it require authentication
        """
        return False

    def authorization_header(self, request=None) -> str:
        """
        returns header request
        """
        return None

    def current_user(self, request=None) -> TypeVar('User'):
        """
        returns current user
        """
        return None
