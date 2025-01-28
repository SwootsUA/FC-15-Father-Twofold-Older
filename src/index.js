
'use strict';

/**
 * Calculates in how many years (or how many years ago) the father will be (or was) twice as old as the son  
 * Difference between the father's age and the son's age must be no less than 15 years!
 * @param {number} fatherAge - the age of the father
 * @param {number} sonAge - the age of the son
 * @returns {number}
 */
function calcYearsUntilTwiceAsOld(fatherAge, sonAge) {
    if(fatherAge < 0 || sonAge < 0 || fatherAge < sonAge) {
        return NaN;
    }

    let difference = Math.abs(fatherAge - sonAge);
    if(difference < 15) {
        return NaN;
    }

    return Math.abs(difference - sonAge);
}

console.log(`Father (${36}) will be twice as old as son (${7}) in ${calcYearsUntilTwiceAsOld(36, 7)} years`); // in 22 years 
console.log(`Father (${22}) will be twice as old as son (${1}) in ${calcYearsUntilTwiceAsOld(22, 1)} years`); // in 20 years 

console.log(`Father (${60}) was twice as old as son (${32}) ${calcYearsUntilTwiceAsOld(60, 32)} years ago`); // 4 years ago
console.log(`Father (${70}) was twice as old as son (${40}) ${calcYearsUntilTwiceAsOld(70, 40)} years ago`); // 10 years ago

console.log(`Invalid input (${-30}, ${15}): ${calcYearsUntilTwiceAsOld(-30, 15)}`); // Invalid input, returns NaN
console.log(`Invalid input (${30}, ${-15}): ${calcYearsUntilTwiceAsOld(30, -15)}`); // Invalid input, returns NaN
console.log(`Invalid input (${20}, ${10}), difference is less than 15 years: ${calcYearsUntilTwiceAsOld(20, 10)}`); // difference is less than 15 years, returns NaN
console.log(`Invalid input (${20}, ${40}), father is younger than son: ${calcYearsUntilTwiceAsOld(20, 40)}`); // father is younger than son, returns NaN
