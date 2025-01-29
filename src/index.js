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

    let difference = fatherAge - sonAge;
    if (difference < 15) {
        console.log('Invalid input, age difference is less than 15 years and father cannot be younger than son');
        return NaN;
    }
    
    return Math.abs(difference - sonAge);
}

// Test cases
let testFatherAges = [36, 22, 40, 60, 70, -30, 30, 20, 20];
let testSonAges = [7, 1, 20, 32, 40, 15, -15, 10, 40];

for (let i = 0; i < testFatherAges.length; i++) {
    let years = calcYearsUntilTwiceAsOld(testFatherAges[i], testSonAges[i]);

    if (Number.isNaN(years)) {
        continue;
    }

    if (years === 0) {
        console.log(`Father (${testFatherAges[i]}) is twice as old as son (${testSonAges[i]})`);
    } else if (testFatherAges[i] > testSonAges[i] * 2) {
        console.log(`Father (${testFatherAges[i]}) will be twice as old as son (${testSonAges[i]}) in ${years} years`);
    } else if (testFatherAges[i] < testSonAges[i] * 2) {
        console.log(`Father (${testFatherAges[i]}) was twice as old as son (${testSonAges[i]}) ${years} years ago`);
    }
}
