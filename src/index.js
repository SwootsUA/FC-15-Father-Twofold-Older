
'use strict';

/**
 * Calculates in how many years (or how many years ago) the father will be (or was) twice as old as the son  
 * Difference between the father's age and the son's age must be no less than 15 years!
 * @param {number} fatherAge - the age of the father
 * @param {number} sonAge - the age of the son
 * @returns {number}
 */
function calcYearsUntilTwiceAsOld(fatherAge, sonAge) {
    if (fatherAge < 0 || sonAge < 0) {
        console.log('Invalid input, age cannot be negative');
        return NaN;
    }

    if (fatherAge < sonAge) {
        console.log('Invalid input, father cannot be younger than son');
        return NaN;
    }

    let difference = Math.abs(fatherAge - sonAge);
    if (difference < 15) {
        console.log('Invalid input, age difference is less than 15 years');
        return NaN;
    }

    let result = Math.abs(difference - sonAge);

    if (fatherAge > sonAge * 2) {
        console.log(`Father (${fatherAge}) will be twice as old as son (${sonAge}) in ${result} years`);
    }
    if (fatherAge < sonAge * 2) {
        console.log(`Father (${fatherAge}) was twice as old as son (${sonAge}) ${result} years ago`);
    }
    if (fatherAge === sonAge * 2) {
        console.log(`Father (${fatherAge}) is twice as old as son (${sonAge})`);
    }

    return result;
}

calcYearsUntilTwiceAsOld(36, 7); // in 22 years 
calcYearsUntilTwiceAsOld(22, 1); // in 20 years 

calcYearsUntilTwiceAsOld(40, 20); // 4 years ago

calcYearsUntilTwiceAsOld(60, 32); // 4 years ago
calcYearsUntilTwiceAsOld(70, 40); // 10 years ago

calcYearsUntilTwiceAsOld(-30, 15); // Invalid input, returns NaN
calcYearsUntilTwiceAsOld(30, -15); // Invalid input, returns NaN
calcYearsUntilTwiceAsOld(20, 10); // difference is less than 15 years, returns NaN
calcYearsUntilTwiceAsOld(20, 40); // father is younger than son, returns NaN
