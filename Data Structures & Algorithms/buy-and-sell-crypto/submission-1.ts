class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let left: number = 0;
        let right: number = 1;
        let maxProfit: number = 0;

        while (right < prices.length) {
            if (prices[left] < prices[right]) {
                let profit: number = prices[right] - prices[left];
                maxProfit = Math.max(profit, maxProfit);
            } else {
                left = right;
            }
            right++;
        }
        return maxProfit;
    }
}
