// ❓ DESCRIPTION:

// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed 
// (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. 
// Spaces will be included only when more than one word is present.

// EXAMPLES:
// spinWords("Hey fellow warriors")  --> "Hey wollef sroirraw" 
// spinWords("This is a test)        --> "This is a test" 
// spinWords("This is another test") --> "This is rehtona test"

// ✅ SOLUTION: 

function spinWords(str) {
    let arr = str.split(' ');
    for (let i = 0; i < arr.length; i++) {
        arr[i].length >= 5 ? arr[i] = arr[i].split('').reverse().join('') : arr[i];
    }
    return arr.join(' ');
}

console.log(spinWords("Hey fellow warriors"));