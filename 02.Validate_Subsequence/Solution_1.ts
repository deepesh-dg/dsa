function isValidSubsequence(array: number[], sequence: number[]) {
    const order: number[] = [];

    for (let i = 0; i < sequence.length; i++) {
        const index = array.indexOf(sequence[i]);

        if (index === -1 || order[order.length - 1] >= index) return false;

        order.push(index);
    }

    return true;
}

export default isValidSubsequence;

// This solution fails in the case of duplicate elements in array
