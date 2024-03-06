// ❓ DESCRIPTION:

// Check to see if a string has the same amount of 'x's and 'o's. 
// The method must return a boolean and be case insensitive. The string can contain any char.

// EXAMPLES:
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// ✅ SOLUTION: 

function XO(str) {
    str = str.toLowerCase();
    let counterX = 0;
    let counterO = 0
    
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "x") {
        counterX += 1;
      } else if (str [i] === "o") {
        counterO += 1;
      }
    }
    return counterX === counterO;
}



