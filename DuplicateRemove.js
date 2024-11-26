let nums = [12, 34, 56, 34, 77, 90, 27, 56, 45, 67, 89, 10, 34, 12];
let uniqueNums = []; 

for (let i = 0; i < nums.length; i++) {
  if (!uniqueNums.includes(nums[i])) {
    
    uniqueNums.push(nums[i]); 
  }
}

console.log(uniqueNums);
