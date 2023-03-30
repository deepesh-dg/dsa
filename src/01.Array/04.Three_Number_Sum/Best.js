function threeNumberSum(array, targetSum) {
    array = array.sort((a, b) => a - b); // sort the input array
    const result = []; // initialize a list to hold the triplets

    for (let i = 0; i < array.length - 2; i++) {
        let left = i + 1;
        let right = array.length - 1;

        while (left < right) {
            const currSum = array[i] + array[left] + array[right];
            if (currSum === targetSum) {
                result.push([array[i], array[left], array[right]]);
                left++;
                right--;
            } else if (currSum < targetSum) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
}

export default threeNumberSum;
