#!/usr/bin/env python3
"""
class BasicAuth that inherits from Auth
"""

from api.v1.auth.auth import Auth


class BasicAuth(Auth):
    """
    class BasicAuth that inherits from Auth
    """

    def extract_base64_authorization_header(
            self, authorization_header: str) -> str:
        """
        returns the Base64 part of the Authorization
        """
        if authorization_header is None:
            return None

        if not isinstance(authorization_header, str):
            return None

        if not authorization_header.startswith("Basic "):
            return None

        # split after the first 6 characters
        return authorization_header[6:]
