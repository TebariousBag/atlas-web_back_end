#!/usr/bin/env python3
"""
module redacts sensitive information
"""

import re
import logging
from typing import List
# global variablle for fields that are PII
PII = ('name', 'email', 'phone', 'ssn', 'password')


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
        
        """