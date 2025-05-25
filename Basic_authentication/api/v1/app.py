#!/usr/bin/env python3
"""
Route module for the API
"""
from os import getenv
from api.v1.views import app_views
from flask import Flask, jsonify, abort, request
from flask_cors import (CORS, cross_origin)
import os
from api.v1.auth.auth import Auth

app = Flask(__name__)
app.register_blueprint(app_views)
CORS(app, resources={r"/api/v1/*": {"origins": "*"}})

# variable auth is None
auth = None
# check env variable, if it matches
# then local variable auth = Auth()
if getenv("AUTH_TYPE") == "auth":
    auth = Auth()

# before request performs actions each time a request is made
@app.before_request
def before_request_func():
    """
    run before every request
    """
    if auth is None:
        return

    # 
    path_list = [
        '/api/v1/status/',
        '/api/v1/unauthorized/',
        '/api/v1/forbidden/'
    ]

    if not auth.require_auth(request.path, path_list):
        return

    if auth.authorization_header(request) is None:
        abort(401)

    if auth.current_user(request) is None:
        abort(403)

@app.errorhandler(404)
def not_found(error) -> str:
    """ Not found handler
    """
    return jsonify({"error": "Not found"}), 404


# 401 error
@app.errorhandler(401)
def error_unauthorized(error):
    """
    handler for 401 error
    """
    # jasonify the error messsage
    return jsonify({"error": "Unauthorized"}), 401


# 403 error
@app.errorhandler(403)
def error_forbidden(error):
    """
    handler for 403 error
    """
    # jasonify the error messsage
    return jsonify({"error": "Forbidden"}), 403


if __name__ == "__main__":
    host = getenv("API_HOST", "0.0.0.0")
    port = getenv("API_PORT", "5005")
    app.run(host=host, port=port)
