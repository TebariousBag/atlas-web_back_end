#!/usr/bin/env python3
"""
class MRUCache that inherits from BaseCaching and is a caching system
"""
from base_caching import BaseCaching


class MRUCache(BaseCaching):
    """
    Class to LIFO data
    """
    # inherit from parent BaseCaching
    def __init__(self):
        super().__init__()
        
        self.queue = {}

    def put(self, key, item):
        """
        adds an item to the cache
        """
        # if there is a key and an item
        # value of key is the value of item
        if key and item:
            # if number of items in cache_data is >= max_items
            # then we del the flast
            if len(self.cache_data) >= BaseCaching.MAX_ITEMS:
                # initialize first with empty
                last = None
                # iterate through keys until the end
                for last in self.cache_data:
                    # gonna pass until the end
                    # basically do nothing until we reach the end
                    pass
                # now last is the last key
                print("DISCARD:", last)
                # then delete the last key we just located
                del self.cache_data[last]
                # add the new key
            self.cache_data[key] = item

    def get(self, key):
        """
        get an item from the cache by key
        """
        # when using get method, if key is not there then it returns none
        return (self.cache_data.get(key))
