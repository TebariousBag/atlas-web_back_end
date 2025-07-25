#!/usr/bin/env python3
"""
Writing strings to Redis
"""
import uuid
import redis
from typing import Union, Callable
from functools import wraps


def call_history(method: Callable) -> Callable:
    """
    store history of inputs and outputs
    """
    @wraps(method)
    def wrapfunc(self, *args, **kwargs):
        """ wraps and storage for inputs and outputs """
        # keeps track of inputs
        input_key = method.__qualname__ + ":inputs"
        # keeps track of outputs
        output_key = method.__qualname__ + ":outputs"
        # append value to string to store in redis
        self._redis.rpush(input_key, str(args))
        # run method and store it
        output = method(self, *args, **kwargs)
        # append value to string to store in redis
        self._redis.rpush(output_key, str(output))
        return output

    return wrapfunc


def count_calls(method: Callable) -> Callable:
    """ counts the amount of times method is called """
    @wraps(method)
    def wrapfunc(self, *args, **kwargs):
        """ wraps and counts how many times methos is called """
        key = method.__qualname__
        # increment counter
        self._redis.incr(key)
        # call our method and save it under counter
        counter = method(self, *args, **kwargs)
        # and return the counter
        return counter
    # return the wrapper function
    return wrapfunc


class Cache:
    def __init__(self):
        """
        Redis client as a private variable, and flush DB
        """
        # redis erver
        self._redis = redis.Redis()
        # and flush the db each time
        self._redis.flushdb()

    @call_history
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
        keyvalue = self._redis.get(key)
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
        #  getting the key and running fn to decode the data
        return self.get(key, fn=lambda data: data.decode('utf-8'))

    def get_int(self, key: str):
        """
        get string int
        """
        # gets the data and returns it as an int
        return self.get(key, fn=int)


def replay(method: Callable):
    """ history of calls """
    redis.lrange()
    zip()
