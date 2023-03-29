function isValidSubsequence(sequence, subsequence) {
    let subseqIndex = 0;
    for (let i = 0; i < sequence.length; i++) {
        if (subseqIndex === subsequence.length) {
            return true;
        }
        if (sequence[i] === subsequence[subseqIndex]) {
            subseqIndex++;
        }
    }
    return subseqIndex === subsequence.length;
}

export default isValidSubsequence;

/**

This function takes in two arrays, sequence and subsequence, and returns a boolean indicating whether subsequence is a valid subsequence of sequence. The implementation works as follows:

 1. Initialize the index of the subsequence to 0 (subseqIndex = 0).
 2. Loop through each element in the sequence (for (let i = 0; i < sequence.length; i++)).
 3. If the subsequence index is equal to the length of the subsequence, it means that we've found all the elements of the subsequence in the sequence, so we can return true (if (subseqIndex === subsequence.length) { return true; }).
 4. If the current element in the sequence matches the element in the subsequence at the current index, increment the subsequence index (if (sequence[i] === subsequence[subseqIndex]) { subseqIndex++; }).
 5. After the loop, check if we've reached the end of the subsequence (return subseqIndex === subsequence.length).

This implementation has a time complexity of O(n), where n is the length of the sequence, and a space complexity of O(1), since we only use a constant amount of space to store the index of the subsequence.

 */
