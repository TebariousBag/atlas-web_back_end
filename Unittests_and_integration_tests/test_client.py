#!/usr/bin/env python3
"""
test client
"""
import unittest
from parameterized import parameterized
from client import GithubOrgClient
from unittest.mock import patch
from unittest.mock import patch, PropertyMock

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

    @patch('client.GithubOrgClient.org', new_callable=PropertyMock)
    # make sure to take mock_org as argument
    def test_public_repos_url(self, mock_org):
        """
        test githubOrgClient._public_repos_url
        """
        # set the return value we are expecting
        mock_org.return_value = {
            'repos_url': 'https://api.github.com/orgs/google/repos'
    }
        # set an instance of github org client for google
        githubOrg = GithubOrgClient('google')
        # should read the .org dict we made
        result = githubOrg._public_repos_url
        # assert that the result matches
        self.assertEqual('https://api.github.com/orgs/google/repos', result)

if __name__ == '__main__':
    unittest.main()
