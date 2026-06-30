class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false;
        }
        
        const count: { [key: string]: number } = {};

        for (let i: number = 0; i < s.length; i++) {
            count[s[i]] = (count[s[i]] || 0) + 1;
            count[t[i]] = (count[t[i]] || 0) - 1;
        }

        for (const char in count) {
            if (count[char] !== 0) {
                return false;
            }
        }

        return true;
    }
}
