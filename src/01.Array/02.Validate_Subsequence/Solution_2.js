function isValidSubsequence(array, sequence) {
    let arrInd = 0;
    let seqInd = 0;

    while (arrInd < array.length && seqInd < sequence.length) {
        if (array[arrInd] === sequence[seqInd]) seqInd++;

        arrInd++;

        if (seqInd === sequence.length) return true;
    }

    return false;
}

export default isValidSubsequence;
