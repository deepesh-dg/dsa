function isValidSubsequence2(array: number[], sequence: number[]) {
    let arrInd: number = 0;
    let seqInd: number = 0;

    while (arrInd < array.length && seqInd < sequence.length) {
        if (array[arrInd] === sequence[seqInd]) seqInd++;

        arrInd++;

        if (seqInd === sequence.length) return true;
    }

    return false;
}
