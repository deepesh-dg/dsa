function twoNumberSum(array, targetSum) {
    const nums = {};
    for (let num of array) {
        const potentialMatch = targetSum - num;
        if (potentialMatch in nums) {
            return [potentialMatch, num];
        } else {
            nums[num] = true;
        }
    }
    return [];
}

/** 

This function takes in an array of integers and a target sum, and returns an array of any two numbers in the input array that add up to the target sum. The implementation works as follows:

 1. Create an empty hash table (nums) to store numbers in the array.
 2. Loop through each number (num) in the array.
 3. For each number, calculate the potential match (potentialMatch) by subtracting it from the target sum.
 4. If the potential match is already in the hash table (potentialMatch in nums), return an array with the potential match and the current number.
 5. Otherwise, add the current number to the hash table (nums[num] = true).
 6. If no two numbers in the array add up to the target sum, return an empty array.

This implementation has a time complexity of O(n) and a space complexity of O(n), where n is the length of the input array. 

*/

export default twoNumberSum;
