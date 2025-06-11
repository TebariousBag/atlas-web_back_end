#!/usr/bin/env python3
"""
Writing strings to Redis
"""
import uuid
import redis
from typing import Union


class Cache:
    def __init__(self):
        """
        Redis client as a private variable, and flush DB
        """
        # redis erver
        self._redis = redis.Redis()
        # and flush the db each time
        self._redis.flushdb()


    def store(self, data: Union[str, bytes, int, float]) -> str:
        """
        takes a data argument and returns a string
        generate a random key and store it correctly
        """
        # generate a random key using uuid
        key = str(uuid.uuid4())
        # set, or stroe data
        self._redis.set(key, data)
        return key
