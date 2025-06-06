#!/usr/bin/env python3
"""
module redacts sensitive information
"""

import re
import logging
from typing import List
import os
import mysql.connector
from mysql.connector import connection
# global variablle for fields that are PII
PII_FIELDS = ('name', 'email', 'phone', 'ssn', 'password')


def filter_datum(fields: List[str], redaction: str,
                 message: str, separator: str) -> str:
    """
    hides the value of specific fields
    """
    # join into one group
    joined_fields = "|".join(fields)
    # all characters except the semicolon, this will be the value
    value = f"[^{separator}]*"
    # now we can target just the value
    pattern = fr"({joined_fields})={value}"
    # substitute pattern, with redacted message
    return (re.sub(pattern, rf"\1={redaction}", message))


class RedactingFormatter(logging.Formatter):
    """ Redacting Formatter class
        """

    REDACTION = "***"
    FORMAT = "[HOLBERTON] %(name)s %(levelname)s %(asctime)-15s: %(message)s"
    SEPARATOR = ";"

    # takes fields as arg
    def __init__(self, fields: List[str]):
        """
        fields to redact
        """
        super(RedactingFormatter, self).__init__(self.FORMAT)
        # defines fields
        self.fields = fields

    def format(self, record: logging.LogRecord) -> str:
        """
        redact sensitive info from message
        """
        # take our record message, which is part of logging
        # then run our filter on the message
        record.msg = filter_datum(self.fields, self.REDACTION,
                                  record.msg, self.SEPARATOR)
        # return the logging record in original format
        # it's just filtered now
        return (super().format(record))


def get_logger() -> logging.Logger:
    """
    logger named user_data with RedactingFormatter
    """
    # get logger
    logger = logging.getLogger("user_data")
    # level is warning by default, info is basic
    logger.setLevel(logging.INFO)
    # without this it sends to root and can duplicate messages
    logger.propagate = False
    # task asks for stream handler
    handler = logging.StreamHandler()
    # we want redactingformatter
    formatter = RedactingFormatter(fields=list(PII_FIELDS))
    # now we set the format to handler
    handler.setFormatter(formatter)
    # adding a handler
    logger.addHandler(handler)
    # get logger returns the logger
    return (logger)


def get_db() -> connection.MySQLConnection:
    """
    connect to secure database using protected name and password
    """
    # setup environment variables
    # default as “root”
    username = os.getenv('PERSONAL_DATA_DB_USERNAME', 'root')
    # default as an empty string
    password = os.getenv('PERSONAL_DATA_DB_PASSWORD', '')
    # default as “localhost”
    host = os.getenv('PERSONAL_DATA_DB_HOST', 'localhost')
    # database name
    name = os.getenv('PERSONAL_DATA_DB_NAME')

    connection = mysql.connector.connect(
        user=username,
        password=password,
        host=host,
        database=name
    )

    return (connection)


def main() -> None:
    """
    will obtain a database connection using get_db and
    retrieve all rows in the users table
    """
    # access db
    db = get_db()
    # get a selector
    selector = db.cursor
    # execute the selector
    # all rows and columns
    selector.execute("Select * FROM users")
    # get all and save so we can search through by row
    all_info = selector.fetchall()

    # iterate and assign values
    for row in all_info:
        name = row[0]
        email = row[1]
        phone = row[2]
        ssn = row[3]
        password = row[4]
        ip = row[5]
        last_login = row[6]
        user_agent = row[7]
        # save into a string
        info_string = (
            f"name={name}; email={email}; phone={phone}; ssn={ssn}; "
            f"password={password}; ip={ip}; last_login={last_login}; user_agent={user_agent}"
        )
        # print each iteration
        print(info_string)
    # clean up by closing db and cursor
    selector.close()
    db.close()
