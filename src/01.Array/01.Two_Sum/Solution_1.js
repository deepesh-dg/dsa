function twoNumberSum(array, targetSum) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === targetSum) return [array[i], array[j]];
        }
    }

    return [];
}
export default twoNumberSum;
