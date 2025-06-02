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
		("google"),
		("abc"),
	])
	# mock json get
	@patch("client.get_json")
	def test_org(self, org_name, mock.get_json):
		