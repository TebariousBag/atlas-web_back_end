#!/usr/bin/env python3
"""
module redacts sensitive information
"""

import re
from typing import List


def filter_datum(fields: List[str], redaction: str, message: str, separator: str) -> str:
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
    return(re.sub(pattern, rf"\1={redaction}", message))
    