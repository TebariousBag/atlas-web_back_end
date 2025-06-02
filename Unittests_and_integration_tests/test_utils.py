#!/usr/bin/env python3
"""
unittests
"""
import unittest
from unittest.mock import patch, Mock
from parameterized import parameterized
from utils import access_nested_map, memoize
from utils import access_nested_map, get_json


class TestAccessNestedMap(unittest.TestCase):
    """
    class for tests
    """

    @parameterized.expand([
        ({"a": 1}, ("a",), 1),
        ({"a": {"b": 2}}, ("a",), {"b": 2}),
        ({"a": {"b": 2}}, ("a", "b"), 2),
    ])

    def test_access_nested_map(self, nested_map, path, expected):
        """parameterization to test nested map"""
        self.assertEqual(access_nested_map(nested_map, path), expected)

    @parameterized.expand([
        ({}, ("a",), KeyError),
        ({"a": 1}, ("a", "b"), KeyError)
    ])

    def test_access_nested_map_exception(self, nested_map, path, expected):
        """test with keyerror exception"""
        with self.assertRaises(expected):
            access_nested_map(nested_map, path)

class TestGetJson(unittest.TestCase):
    """test for http to be mocked"""
    # the inputs
    @parameterized.expand([
        ("http://example.com", {"payload": True}),
        ("http://holberton.io", {"payload": False}),
    ])
    # patch in a request
    @patch("utils.requests.get")
    def test_get_json(self, test_url, test_payload, mock_get):
        """Test get_json with various inputs"""
        # make a mock response
        mock_response = Mock()
        mock_response.json.return_value = test_payload
        # return our mock response
        mock_get.return_value = mock_response
        # call get json on our mock
        result = get_json(test_url)
        # make sure it is called only once
        mock_get.assert_called_once_with(test_url)
        self.assertEqual(result, test_payload)

class TestMemoize(unittest.TestCase):
    """
    memoization test
    """

    def test_memoize(self):
        """test the memoize function
        """
        class TestClass:
            """Test class"""
            # return 42
            def a_method(self):
                """test calling"""
                return 42
            # cache the result of a_method
            @memoize
            def a_property(self):
                """wrap with memoize"""
                return self.a_method()
        # create object of testclass
        testClassInstance = TestClass()
        # replace a_method with a mock
        with patch.object(testClassInstance, 'a_method', return_value=42) as mock_a_method:
            # first call should be a_method, and caches it
            # removed parenthesis because int object not callable
            self.assertEqual(testClassInstance.a_property, 42)
            # second call should be the cached value
            self.assertEqual(testClassInstance.a_property, 42)
            # and check if it was only called once
            mock_a_method.assert_called_once()

if __name__ == "__main__":
    unittest.main()
