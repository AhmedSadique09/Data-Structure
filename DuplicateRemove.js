let nums = [12, 34, 56, 34, 77, 90, 27, 56, 45, 67, 89, 10, 34, 12];
let uniqueNums = []; // Empty array to store unique numbers

for (let i = 0; i < nums.length; i++) {
  if (!uniqueNums.includes(nums[i])) {
    // Check if the number is not already in uniqueNums
    uniqueNums.push(nums[i]); // Add it to uniqueNums if it's not a duplicate
  }
}

console.log(uniqueNums);
