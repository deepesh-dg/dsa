function isValidSubsequence(array: number[], sequence: number[]) {
    const order: number[] = [];

    for (let i = 0; i < sequence.length; i++) {
        const index = array.indexOf(sequence[i]);

        if (index === -1 || order[order.length - 1] >= index) return false;

        order.push(index);
    }

    return true;
}

const array = [5, 1, 22, 25, 6, -1, 8, 10],
    sequence = [1, 6, -1, 10];

console.log(isValidSubsequence(array, sequence));

// This solution fails in the case of duplicate elements in array
