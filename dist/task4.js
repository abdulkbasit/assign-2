"use strict";
function calculateFactorial(num) {
    let result = 1;
    for (let i = num; i >= 1; i--) {
        result *= i;
    }
    return result;
}
// Example usage
console.log(calculateFactorial(5)); // Output: 120
console.log(calculateFactorial(7)); // Output: 5040
console.log(calculateFactorial(0)); // Output: 1 (by definition)
