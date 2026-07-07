class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let current: number = 0;
        let max: number = 0;
        for (let n of nums) {
            if (n === 1) {
                current++;
                max = Math.max(current, max);
            } else {
                current = 0;
            }
        }
        return max;
    }
}
