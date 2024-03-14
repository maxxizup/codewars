// ❓ DESCRIPTION:

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
// The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
// Write a method that takes the array as an argument and returns this "outlier" N.

// EXAMPLES:
// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)
// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)

// ✅ SOLUTION: 

function findOutlier(integers) {

    let evenCount = 0, oddCount = 0;
    let evens = [], odds = [];

    integers.map(item => { if (item % 2 === 0) { evenCount += 1, evens.push(item) } else { oddCount += 1, odds.push(item) } });

    return evenCount > oddCount ? odds[0] : evens[0];
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));