#!/usr/bin/env python3
"""
Writing strings to Redis
"""
import uuid
import redis
from typing import Union, Callable


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

    def get(self, key: str, fn: Callable = None):
        """
        retrieve key and attempt to convert by fn
        """
        # get key data in bytes
        keyvalue = self.redis.get(key)
        # if no key
        if keyvalue is None:
            return None
        # if we have an fn, return key but converted
        if fn:
            return fn(keyvalue)
        # or else just return the keyvalue
        return keyvalue

    def get_str(self, key: str):
        """
        get string string
        """
    def get_int(self, key: str):
        """
        get string int
        """
