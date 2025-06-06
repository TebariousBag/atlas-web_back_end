#!/usr/bin/env python3
""" Module of Index views
"""
from flask import jsonify, abort
from api.v1.views import app_views


@app_views.route('/status', methods=['GET'], strict_slashes=False)
def status() -> str:
    """ GET /api/v1/status
    Return:
      - the status of the API
    """
    return jsonify({"status": "OK"})


@app_views.route('/stats/', strict_slashes=False)
def stats() -> str:
    """ GET /api/v1/stats
    Return:
      - the number of each objects
    """
    from models.user import User
    stats = {}
    stats['users'] = User.count()
    return jsonify(stats)


# 401 testing
@app_views.route('/unauthorized/', methods=['GET'])
def unauthorized():
    """
    testing for error 401
    """
    # handler for 401 will be executed
    abort(401)


# 403 testing
@app_views.route('/forbidden/', methods=['GET'])
def forbidden():
    """
    testing for error 401
    """
    # handler for 403 will be executed
    abort(403)
