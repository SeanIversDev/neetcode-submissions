class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const hashSet = new Set<number>();

        for(let i: number = 0; i < nums.length; i++) {
            if(hashSet.has(nums[i])) {
                return true;
            }
            hashSet.add(nums[i]);
        }
        
        return false;
    }
}
