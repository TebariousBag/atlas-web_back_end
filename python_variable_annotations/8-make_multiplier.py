#!/usr/bin/env python3
"""
type-annotated function make_multiplier that takes a float multiplier
as argument and returns a function that multiplies a float by multiplier
"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    returns a function that multiplies by multiplier
    """
    # function that multiplies by multiplier, all floats
    def times_function(num: float) -> float:
        return num * multiplier
    # now we return the function
    return (times_function)
