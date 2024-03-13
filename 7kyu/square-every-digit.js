// ❓ DESCRIPTION:

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// Note: The function accepts an integer and returns an integer.

// EXAMPLES:
// squareDigits(9119);  --> return 811181
// squareDigits(765); --> return 493625

// ✅ SOLUTION: 

function squareDigits(num) {
    num = num.toString();
    let res = '';
    for (let i = 0; i < num.length; i++) {
        res += Math.pow(num[i], 2);
    }
    return parseInt(res);
}

console.log(squareDigits(9119));
