/**
 * #1 :: Export JS function "getDistanceFromThreshold" to find how much a number exceeds or is left to reach one value
 * input: number (value)
 * input: number (threshold)
 * output: number
 */

import isTypeOf from "../exercise_07/isTypeOf.js";

const DEFAULT_DISTANCE = 0;

/**
 * Calculate the distance between a value and a threshold.
 * @param {number} value Number to compare.
 * @param {number} threshold Number to compare with.
 * @returns {number} Distance or 0 if input is invalid.
 */
function getDistanceFromThreshold(value, threshold) {
    if (!isTypeOf(value, "number") || !isTypeOf(threshold, "number")) {
        return DEFAULT_DISTANCE;
    }
    return threshold - value;
}

export default getDistanceFromThreshold;
