class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const cleanedString: string = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        console.log(cleanedString);
        let right: number = cleanedString.length - 1;
        let left: number = 0;

        while (left < right) {
            if (cleanedString[left++] !== cleanedString[right--]) {
                return false;
            }
        }
        return true;
    }
}
