#!/usr/bin/env python3
"""
setup for basic flask app
"""
from flask import Flask, jsonify

app = Flask(__name__)


@app.route("/", methods=["GET"])
def welcome():
    """
    welcome message
    """
    return jsonify({"message": "Bienvenue"})


if __name__ == "__main__":
    # i dont like port 5000 while using mac
    app.run(host="0.0.0.0", port=5000)
