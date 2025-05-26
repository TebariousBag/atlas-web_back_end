#!/usr/bin/env python3
"""
Flask view that handles all routes for the Session authentication
"""
from api.v1.views import app_views
from flask import request, jsonify, abort
from models.user import User
import os


@app_views.route('/auth_session/login', methods=['POST'], strict_slashes=False)
def login() -> str:
    """
    handles the user login
    """
    # use request form get to retrieve
    email = request.form.get('email')
    if not email:
        return jsonify({"error": "email missing"}), 400
    # use request form get to retrieve
    password = request.form.get('password')
    if not password:
        return jsonify({"error": "password missing"}), 400
    # get user info based off email
    user = User.search({"email": email})
    if not user:
        return jsonify({"error": "no user found for this email"}), 404
