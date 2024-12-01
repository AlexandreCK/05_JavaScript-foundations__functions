/**
 * #5 :: Export JS function "isAdditionGreaterThanFifty" to check a pair of numbers and return true if their sum is 50 or greater than 50
 * input: number (summand1)
 * input: number (summand2)
 * output: boolean
 */

import isTypeOf from "../exercise_07/isTypeOf.js";

/**
 * Check if sum of two numbers is 50 or more.
 * @param {number} summand1 First number.
 * @param {number} summand2 Second number.
 * @returns {boolean} True if sum is 50 or more, else false.
 */
function isAdditionGreaterThanFifty(summand1, summand2) {
    if (!isTypeOf(summand1, "number") || !isTypeOf(summand2, "number")) {
        return false;
    }
    return summand1 + summand2 >= 50;
}

export default isAdditionGreaterThanFifty;
