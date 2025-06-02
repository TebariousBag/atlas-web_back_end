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

    # patch fake det_json
    # with fake return values
    @patch('client.get_json',
           return_value=[{'name': 'repo1'}, {'name': 'repo2'}])
    # mock is passed to mock_get_json as arg
    def test_public_repos(self, mock_get_json):
        """Testing GithubOrgClient.public_repos"""
        # mock publick_repos_url
        with patch('client.GithubOrgClient._public_repos_url',
                   new_callable=PropertyMock) as mockRepos:
            # mock return value
            mockRepos.return_value = "https://fake.api/repos"
            # instance of client, like fetching from google
            githubOrg = GithubOrgClient('google')
            # should return the list of repos we chose
            result = githubOrg.public_repos()
            # assert that values match
            self.assertEqual(result, ['repo1', 'repo2'])
            # check that it was only called once
            mockRepos.assert_called_once()
            # check that json was called once, and with correct url
            mock_get_json.assert_called_once_with(
                'https://fake.api/repos'
                )

    # input values dict
    # one true statement, one false statement
    @parameterized.expand([
        ({"license": {"key": "my_license"}}, "my_license", True),
        ({"license": {"key": "other_license"}}, "my_license", False),
    ])
    def test_has_license(self, repo, license_key, expected):
        """
        teast for has_license
        """
        # get our chpsen results
        result = GithubOrgClient.has_license(repo, license_key)
        # and assert that they match what is expected
        self.assertEqual(result, expected)

if __name__ == '__main__':
    unittest.main()
