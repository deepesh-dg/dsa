function sortedSquaredArray(array) {
    const result = new Array(array.length).fill(0);
    let left = 0;
    let right = array.length - 1;

    for (let i = array.length - 1; i >= 0; i--) {
        const leftVal = Math.abs(array[left]);
        const rightVal = Math.abs(array[right]);

        if (leftVal > rightVal) {
            result[i] = leftVal * leftVal;
            left++;
        } else {
            result[i] = rightVal * rightVal;
            right--;
        }
    }

    return result;
}

export default sortedSquaredArray;
