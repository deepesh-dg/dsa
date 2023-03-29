function sortedSquaredArray(array) {
    const last = array.length - 1;

    let startPointer = 0;
    let endPointer = last;

    const newArr = new Array(array.length);

    for (let i = last; i > -1; i--) {
        const start = Math.abs(array[startPointer]) ** 2;
        const end = Math.abs(array[endPointer]) ** 2;

        if (end > start) {
            newArr[i] = end;
            endPointer--;
        } else {
            newArr[i] = start;
            startPointer++;
        }
    }
    return newArr;
}

export default sortedSquaredArray;
