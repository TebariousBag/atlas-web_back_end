#!/usr/bin/env python3
"""
asynchronous coroutine that takes an int as arg
and then waits from 0- that arg in seconds
then returns the time waited
"""
import asyncio, random


# asynce def to make sure its an async function
# max_delay has a default value 10 
async def wait_random(max_delay: int = 10) -> float:
    """
    waits a random time form 0-max_delay
    
    Args:
    	max_delay (int): time in seconds with default of 10
    Returns:
		a float: the time in seconds that we waited
    """
    # random number, uniform ensures the numbers should not
    # pop up more often than others
    rdelay = random.uniform(0, max_delay)
    # now await that random time in seconds
    await asyncio.sleep(rdelay)
    # return that random number
    return (rdelay)
