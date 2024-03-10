// ❓ DESCRIPTION:

// There is an array with some numbers. All numbers are equal except for one. Try to find it!


// EXAMPLES:
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

// ✅ SOLUTION: 

function findUniq(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            arr.push(arr[i]);
            arr.splice(i, 1);
            if (arr[i] === arr[i + 1]) {
                return arr[arr.length - 1];
            } else {
                return arr[i];
            }
        }
    }
}


console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));