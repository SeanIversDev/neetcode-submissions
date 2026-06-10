import string

class Solution:
    def isPalindrome(self, s: str) -> bool:
        remove_chars = string.punctuation + string.whitespace
        table = str.maketrans("", "", remove_chars)
        s = s.translate(table).lower()
        left = 0
        right = len(s) - 1
        while left < right:
            if s[left] != s[right]:
                return False
            left += 1
            right -= 1
        return True