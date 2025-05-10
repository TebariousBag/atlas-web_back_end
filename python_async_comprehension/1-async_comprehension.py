#!/usr/bin/env python3
"""
coroutine will collect 10 random numbers
using an async comprehensing over async_generator
"""
import asyncio
from typing import List
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """
    collect 10 random nums from async_generator

    Returns:
        List[float]: list of 10 random numbers
        from async_generator
    """
    # iterate over async_generator and add to list
    # use async for, just like we use async def
    # not sure why it didn't count when I appended
    # to an empty list
    return [randn async for randn in async_generator()]
