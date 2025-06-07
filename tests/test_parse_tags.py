import os, sys
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))
import pytest
from data_processing.parse_sevenfifty import parse_tags


@pytest.mark.parametrize(
  "tag,expected",
  [
    (
      "CK",
      {
        "chattanooga": True,
        "knoxville": True,
        "memphis": False,
        "nashville": False,
        "broad_market": True,
      },
    ),
    (
      "MNX",
      {
        "chattanooga": False,
        "knoxville": False,
        "memphis": True,
        "nashville": True,
        "broad_market": False,
      },
    ),
  ],
)
def test_parse_tags_valid(tag, expected):
  assert parse_tags(tag) == expected


@pytest.mark.parametrize("tag", ["Unknown", ""])
def test_parse_tags_unknown(tag):
  result = parse_tags(tag)
  assert result == {
    "chattanooga": False,
    "knoxville": False,
    "memphis": False,
    "nashville": False,
    "broad_market": True,
  }


