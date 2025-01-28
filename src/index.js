
'use strict';

/**
 * Calculates in how many years (or how many years ago) the father will be (or was) twice as old as the son  
 * Difference between the father's age and the son's age must be no less than 15 years!
 * @param {number} fatherAge - the age of the father
 * @param {number} sonAge - the age of the son
 * @returns {number}
 */
function fatherTwofoldOlder(fatherAge, sonAge) {
    if(fatherAge < 0 || sonAge < 0) {
        return NaN;
    }

    let difference = Math.abs(fatherAge - sonAge);
    if(difference < 15) {
        return NaN;
    }

    return Math.abs(difference - sonAge);
}

console.log(fatherTwofoldOlder(36, 7)); // in 22 years 
console.log(fatherTwofoldOlder(22, 1)); // in 20 years

console.log(fatherTwofoldOlder(60, 32)); // 4 years ago
console.log(fatherTwofoldOlder(70, 40)); // 10 years ago

console.log(fatherTwofoldOlder(-30, 15)); // Invalid input, returns NaN
console.log(fatherTwofoldOlder(30, -15)); // Invalid input, returns NaN
console.log(fatherTwofoldOlder(20, 10)); // difference is less than 15 years, returns NaN
