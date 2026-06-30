class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let left: number = 0;
        let right: number = s.length - 1;

        function isAlphanumeric(str: string): boolean {
            return /^[a-zA-Z0-9]+$/.test(str);
        }

        while (left < right) {
            if (!isAlphanumeric(s[left])) {
                left++
            }
            else if (!isAlphanumeric(s[right])) {
                right--;
            } else {
                if (s[left++].toLowerCase() !== s[right--].toLowerCase()) {
                    return false;
                }
            }
        }
        return true;
    }
}
