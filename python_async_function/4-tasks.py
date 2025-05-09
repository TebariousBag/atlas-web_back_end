#!/usr/bin/env python3
"""
function that creates and returns task wait_random(max_delay)
"""
import asyncio
from typing import List
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Run task_wai_random n times with max_delay as arg

    Args:
        n (int): times to run task_wait_random
        max_delay: the time of delay in seconds

    Returns:
        List[float]: list of all the delays
    """
    # to hold each time we run wait_random(max_delay)
    temp = []
    # append task to run it n times and save to temp
    for i in range(n):
        temp.append(task_wait_random(max_delay))

    results = []
    # iterate through each completed task in temp
    for each_completed in asyncio.as_completed(temp):
        # save the delay as we iterate through each time
        delay = await each_completed
        # and then add that delay to the results
        results.append(delay)

    return (results)
