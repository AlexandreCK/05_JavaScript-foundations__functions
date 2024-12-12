/**
 * #3 :: Export JS function "generateRandomNumberInRange" to generate a rounded random number depending on a limit
 * input: number (limit)
 * output: number
 */

import isTypeOf from "../exercise_07/isTypeOf.js";

const MIN_LIMIT = 0;

/**
 * Generate random number from 0 to the stated limit.
 * @param {number} limit Maximum number.
 * @returns {number} Random number or 0 if invalid input.
 */
function generateRandomNumberInRange(limit) {
    if (!isTypeOf(limit, "number") || limit < MIN_LIMIT) {
        return MIN_LIMIT;
    }
    return Math.floor(Math.random() * (limit + 1));
}

export default generateRandomNumberInRange;
