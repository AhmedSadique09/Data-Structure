// Numbers from 0 to 100
let numbers = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53,97, 98, 99, 100];

// Check if a number is prime
function isPrime(num) {
    if (num <= 1) {
        return false; // Numbers 0 and 1 are not prime
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false; // If num can be divided, it's not prime
        }
    }
    return true; // It's prime!
}

// Store the prime numbers
let primeNumbers = [];

// Find prime numbers
for (let i = 0; i < numbers.length; i++) {
    if (isPrime(numbers[i])) {
        primeNumbers.push(numbers[i]);
    }
}

// Show the prime numbers
console.log(primeNumbers);
