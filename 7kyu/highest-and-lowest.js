// ❓ DESCRIPTION:

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// EXAMPLES:
// highAndLow("1 2 3 4 5");  --> return "5 1"
// highAndLow("1 2 -3 4 5"); --> return "5 -3"
// highAndLow("1 9 3 4 -5"); --> return "9 -5"

// ✅ SOLUTION: 

function highAndLow(numbers) {
    const num = numbers.split(' ').map(Number);
    let max = num[0], min = num[0];
    for (let i = 0; i < num.length; i++) {
        if (num[i] > max) {
            max = num[i];
        }

        if (num[i] < min) {
            min = num[i]
        }
    }
    return `${max} ${min}`;
}