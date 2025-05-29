#!/usr/bin/env python3
"""
setup for basic flask app
"""
from auth import Auth
from flask import Flask, jsonify, request
from auth import Auth

app = Flask(__name__)


AUTH = Auth()


@app.route("/", methods=["GET"])
def welcome():
    """
    welcome message
    """
    return jsonify({"message": "Bienvenue"})


@app.route('/users', methods=['POST'], strict_slashes=False)
def users():
    """
    end-point to register a user
    """
    # request for email and password
    email = request.form['email']
    password = request.form['password']
    try:
        # try registering it and return jsonified message
        AUTH.register_user(email, password)
        return jsonify({"email": email, "message": "user created"}), 200
    except ValueError:
        return jsonify({"message": "email already registered"}), 400


if __name__ == "__main__":
    # i dont like port 5000 while using mac
    app.run(host="0.0.0.0", port=5000)
