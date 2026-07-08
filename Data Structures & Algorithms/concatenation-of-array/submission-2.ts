class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        const ans = new Array<number>(nums.length * 2);
        let r = nums.length;
        for (let l = 0; l < nums.length; l++) {
            ans[l] = nums[l];
            ans[r++] = nums[l];
        }
        return ans;
    }
}
