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
    """
    # empty list
    the_list = []
    # iterate over async_generator and add to list
    # use async for, just like we use async def
    async for randn in async_generator():
        the_list.append(randn)
    return (the_list)
