function reverseString(str) {
    return str.split('').reverse().join('');
}

let originalString = "Ahmed";
let reversedString = reverseString(originalString);

console.log(reversedString);
