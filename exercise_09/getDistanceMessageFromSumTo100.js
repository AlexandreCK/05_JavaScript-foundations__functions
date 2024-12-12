/** 
 * #9 :: Export JS function "getDistanceMessageFromSumTo100" to generate a random number (in between 0-100) and sum it to given number
  - if sum result exceeds 100, then return message "Sum with value N exceeds in N from number 100"
  - otherwise, return message "Sum with value N is left in N from number 100"
 * input: number (value) 
 * output: string
 */

/**
 * CASE #1
 * input: 70
 * random (generated in function): 40
 * output: "Sum with value 110 exceeds in 10 from number 100"
 */

/**
 * CASE #2
 * input: 30
 * random (generated in function): 40
 * output: "Sum with value 70 is left in 30 from number 100"
 */

import getDistanceFromThreshold from "../exercise_01/getDistanceFromThreshold.js";
import generateRandomNumberInRange from "../exercise_03/generateRandomNumberInRange.js";
import isTypeOf from "../exercise_07/isTypeOf.js";

const MIN_VALUE = 0;
const MAX_VALUE = 100;

/**
 * Generates a random number, adds it to the given value, and returns a distance message to 100.
 * @param {number} value Number to add with a random value.
 * @returns {string} String displaying distance of the sum from 100.
 */
function getDistanceMessageFromSumTo100(value) {
    if (!isTypeOf(value, "number") || value < MIN_VALUE || value > MAX_VALUE) {
        return "Invalid input.";
    }

    let randomValue = generateRandomNumberInRange(MAX_VALUE);
    let addition = value + randomValue;
    let difference = getDistanceFromThreshold(addition, MAX_VALUE);

    if (addition > MAX_VALUE) {
        return `Sum with value ${addition} exceeds in ${Math.abs(
            difference
        )} from number ${MAX_VALUE}`;
    } else {
        return `Sum with value ${addition} is left in ${Math.abs(
            difference
        )} from number ${MAX_VALUE}`;
    }
}

export default getDistanceMessageFromSumTo100;
