#!/usr/bin/env python3
"""
class BasicAuth that inherits from Auth
"""

import base64
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

    def decode_base64_authorization_header(
            self, base64_authorization_header: str) -> str:
        """
        returns the decoded value of a Base64 string
        """
        if base64_authorization_header is None:
            return None

        if not isinstance(base64_authorization_header, str):
            return None

        try:
            # variable to hold the decoded bytes
            decoded = base64.b64decode(base64_authorization_header)
            # now decode to utf-8 so we can return as a string
            return decoded.decode('utf-8')
        except Exception:
            return None

    def extract_user_credentials(
            self, decoded_base64_authorization_header: str) -> (str, str):
        """
        returns the user email and password from the Base64 decoded value
        """
        if decoded_base64_authorization_header is None:
            return None, None

        if not isinstance(decoded_base64_authorization_header, str):
            return None, None

        if ':' not in decoded_base64_authorization_header:
            return None, None

		# split email, password at the colon
        # says assume only one colon is used
        email, password = decoded_base64_authorization_header.split(':')
        
        return email, password
