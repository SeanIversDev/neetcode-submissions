class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphanumeric(str: string): boolean {
            return /^[a-zA-Z0-9]+$/.test(str);
    }
    isPalindrome(s: string): boolean {
        let left: number = 0;
        let right: number = s.length - 1;

        while (left < right) {
            if (!this.isAlphanumeric(s[left])) {
                left++
            }
            else if (!this.isAlphanumeric(s[right])) {
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
