/**
 * #10 :: Export JS function "transformCollectionToString" to transform collection into string
    - if array has elements, then return array as string, joined by '|' (pipe character)
    - otherwise, return an empty string
 * input: array (collection) 
 * output: string
 */

/**
 * CASE #1
 * input: ['apple', 'grapes', 'strawberries']
 * output: "apple | grapes | strawberries"
 */

/**
 * CASE #2
 * input: []
 * output: ""
 */

import checkCollectionHasElements from "../exercise_06/checkCollectionHasElements.js";

/**
 * Transform a collection into a string, elements joined by a pipe ('|').
 * @param {Array} collection Array to transform.
 * @returns {string} Array as a string joined by pipe characters, empty string if array is empty.
 */
function transformCollectionToString(collection) {
    if (checkCollectionHasElements(collection)) {
        return collection.join(" | ");
    }
    return "";
}

export default transformCollectionToString;
