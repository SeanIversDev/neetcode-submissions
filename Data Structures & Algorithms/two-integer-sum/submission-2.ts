class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const hashMap = new Map<number, number>();

        for (let i: number = 0; i < nums.length; i++) {
            let difference: number = target - nums[i];

            if (hashMap.has(difference)) {
                return [hashMap.get(difference), i];
            }

            hashMap.set(nums[i], i);
        }
    }
}
