const arr = ['abc', 'aba', 'a'];

function isPalindrome(str) {
    // Check if the string is equal to its reverse
    return str === str.split('').reverse().join('');
}

arr.forEach(str => {
    if (isPalindrome(str)) {
        console.log(str);  // Print palindrome strings
    }
});