#!/usr/bin/env python3
"""
type-annotated function to_kv that takes a string k
and an int OR float v as arguments and returns a tuple
"""
from typing import Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    returns the string and the square of v
    """
    # v is squared
    return (k, float(v ** 2))
