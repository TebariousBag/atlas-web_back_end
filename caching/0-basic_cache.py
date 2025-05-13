#!/usr/bin/env python3
"""
class BasicCache that inherits from BaseCaching and is a caching system
"""
from base_caching import BaseCaching


class BasicCache(BaseCaching):
    """
    defining the class BasicCache that inherits from BaseCaching
    """
    def put(self, key, item):
        """
        adds an item to the cache
        """
        # if there is a key and an item
        # value of key is the value of item
        if key and item:
            self.cache_data[key] = item
        # nothing happens if key or value is None
    def get(self, key):
        """
        get an item from the cache by key
        """
        return (self.cache_data.get(key))
