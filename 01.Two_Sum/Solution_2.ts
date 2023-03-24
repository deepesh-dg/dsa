function twoNumberSum(array: number[], targetSum: number) {
    const numbers = {};

    for (const num of array) {
        const potentialNum = targetSum - num;

        if (potentialNum in numbers) return [potentialNum, num];
        else numbers[num] = true;
    }

    return [];
}
