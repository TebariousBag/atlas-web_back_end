#!/usr/bin/env python3
"""
coroutine that will execute async_comprehension
four times in parallel using asyncio.gather
"""
import asyncio
import time
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    rrun async_comprehension 4 times and find out how long it takes with gather
    
    Returns:
        float: total time it took to run 4 times
    """
    # start timer
    start = time.time()
    # gather 4 times, but wait for all 4 to gather first
    await asyncio.gather(async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        async_comprehension())
    # end timer
    end = time.time()
    # get total
    total_time = end - start
    return (total_time)
