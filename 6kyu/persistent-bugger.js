// ⁉️ DESCRIPTION: 

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, 
// which is the number of times you must multiply the digits in num until you reach a single digit.

// EXAMPLE:
// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

// ✅ SOLUTION:

function persistence(num) {
    
    let multiplicativeNumber = 1;
    let i;
    let counter = 0;
    let arrayOfDigits = Array.from(String(num), Number);
    
    while (arrayOfDigits.length > 1) {
      for (i = 0; i < arrayOfDigits.length; i++) {
        multiplicativeNumber *= arrayOfDigits[i];
      }
      arrayOfDigits = Array.from(String(multiplicativeNumber), Number);
      multiplicativeNumber = 1;
      counter += 1;
    }
    return counter;
}


console.log(persistence(39));