# PII Logging and Authentication Project

## Learning Objectives

At the end of this project, you should be able to explain the following concepts clearly and independently:

### Personally Identifiable Information (PII)

- Common examples of PII
- Why and how PII should be protected in logs and databases

### Security and Authentication

- How to implement a log filter that obfuscates PII fields
- How to securely encrypt a password
- How to validate an input password against a stored encrypted one
- How to authenticate to a database using environment variables

## Project Overview

This project focuses on implementing basic but critical security measures in backend systems. It includes protecting sensitive data in logs, handling user authentication securely, and managing credentials through environment variables to prevent hardcoding secrets.

## Technologies Used

- Python 3.9
- `bcrypt` for password hashing
- `logging` for implementing log filters
- `os` module for environment variable management
- SQL database (e.g., MySQL or PostgreSQL)