#!/usr/bin/env python3
"""
coroutine called async_generator will loop 10 times,
each time asynchronously wait 1 second,
then yield a random number between 0 and 10
"""
import asyncio
import random
from typing import Generator


async def async_generator() -> Generator[float, None, None]:
    """
    functtion will loop 10 times, each time wait 1 second then yield
    a random num from 0 - 10
    """
    count = 0
    # iterate 10 times
    while count < 10:
        count += 1
        # sleep for 1 second
        await asyncio.sleep(1)
        # then random number between 0 - 10
        # yield pauses here and returns it to whatever
        # is calling for it, we can continue the
        # loop from here later
        yield random.uniform(0, 10)
