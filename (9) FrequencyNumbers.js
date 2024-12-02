const numbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
const frequency = numbers.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
}, {});

console.log(frequency);  // Output: { '1': 1, '2': 2, '3': 3, '4': 4 }
