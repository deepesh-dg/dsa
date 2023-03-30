function twoNumberSum(array, targetSum) {
    const nums = new Set();
    for (let num of array) {
        const potentialMatch = targetSum - num;
        if (nums.has(potentialMatch)) {
            return [potentialMatch, num];
        } else {
            nums.add(num);
        }
    }
    return [];
}

/**

The implementation is very similar to the one using a hash table, but instead of using an object, we use a Set to store the numbers in the input array because in JS, Set is much optimized way than just an object.

 1. Create an empty Set (nums) to store numbers in the array.
 2. Loop through each number (num) in the array.
 3. For each number, calculate the potential match (potentialMatch) by subtracting it from the target sum.
 4. If the potential match is already in the Set (nums.has(potentialMatch)), return an array with the potential match and the current number.
 5. Otherwise, add the current number to the Set (nums.add(num)).
 6. If no two numbers in the array add up to the target sum, return an empty array.

This one has a time complexity of O(n) and a space complexity of O(n), where n is the length of the input array.

*/

export default twoNumberSum;
