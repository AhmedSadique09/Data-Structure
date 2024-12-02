const arr = [0, 3, 0, 5, 7, 0, 9, 2, 0];

// Separate zeros
const zeros = arr.filter(num => num === 0);

// Separate non-zero numbers
const nonZeros = arr.filter(num => num !== 0);

console.log("Zeros:", zeros); // Output: [0, 0, 0, 0]
console.log("Non-zeros:", nonZeros); // Output: [3, 5, 7, 9, 2]
