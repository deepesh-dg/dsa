function twoNumberSum(array, targetSum) {
    const numbers = {};

    for (const num of array) {
        const potentialNum = targetSum - num;

        if (potentialNum in numbers) return [potentialNum, num];
        else numbers[num] = true;
    }

    return [];
}

export default twoNumberSum;
