class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        const record = [];
        for (let i = 0; i < operations.length; i++) {
            if (this.isNumeric(operations[i])) {
                record.push(Number(operations[i]));
            } else if (operations[i] === "+") {
                record.push(record[record.length - 1] + record[record.length - 2]);
            } else if (operations[i] === "D") {
                record.push(record[record.length - 1] * 2);
            } else {
                record.pop();
            }
        }
        const totalSum: number = record.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }, 0);
        return totalSum;
    }
    isNumeric(val: string): boolean {
        return !Number.isNaN(Number(val));
    }
}
