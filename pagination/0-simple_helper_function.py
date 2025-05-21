#!/usr/bin/env python3
"""
helper function
"""


def index_range(page: int, page_size: int) -> tuple[int, int]:
    """
    get index of page numbers
    """
    start = (page - 1) * page_size
    end = page * page_size
    return (start, end)
