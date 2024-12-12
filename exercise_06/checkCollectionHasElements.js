/**
 * #6 :: Export JS function "checkCollectionHasElements" to get length of a collection and check whether it is empty or not
 * input: array (collection)
 * output: boolean
 */

import isTypeOf from "../exercise_07/isTypeOf.js";

/**
 * Check if collection has any items.
 * @param {array} collection Array to check.
 * @returns {boolean} True if collection has elements, false if empty or invalid.
 */
function checkCollectionHasElements(collection) {
    return isTypeOf(collection, "array") && collection.length > 0;
}

export default checkCollectionHasElements;
