/**
 * #4 :: Export JS function "isGreaterThan" to check whether one number is greater than a given number
 * input: number (value)
 * input: number (threshold)
 * output: boolean
 */

import isTypeOf from "../exercise_07/isTypeOf.js";

/**
 * Checks if the first number is greater than the second number.
 * @param {number} value Number to compare.
 * @param {number} threshold Number to compare against.
 * @returns {boolean} True if the value is greater than the threshold, false if not.
 */
function isGreaterThan(value, threshold) {
    if (!isTypeOf(value, "number") || !isTypeOf(threshold, "number")) {
        return false;
    }
    return value > threshold;
}

export default isGreaterThan;
