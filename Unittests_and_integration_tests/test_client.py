#!/usr/bin/env python3
"""
test client
"""
import unittest
from parameterized import parameterized
from client import GithubOrgClient
from unittest.mock import patch


class TestGithubOrgClient(unittest.TestCase):
    """
    TestGithubOrg class
    """
    # inputs
    @parameterized.expand([
        ("google",),
        ("abc",),
    ])
    # mock json get
    @patch("client.get_json")
    def test_org(self, org_name, mock_get_json):
        """
        test github org client
        """
        # we want to return this
        mock_get_json.return_value = {"login": org_name}
        # client
        client = GithubOrgClient(org_name)
        # result
        result = client.org
        # make sure it was called once
        # and assert that correct result was called
        mock_get_json.assert_called_once_with(f"https://api.github.com/orgs/{org_name}")
        self.assertEqual(result, {"login": org_name})
