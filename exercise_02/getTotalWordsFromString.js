/**
 * #2 :: Export JS function "getTotalWordsFromString" to get the total number of words contained in one string.
 * input: string (sentence)
 * output: number
 */

import isTypeOf from "../exercise_07/isTypeOf.js";

/**
 * Number of words in a string.
 * @param {string} string Sentence to count words of.
 * @returns {number} Number of words or 0 if invalid input.
 */
function getTotalWordsFromString(string) {
    if (!isTypeOf(string, "string") || string === "") {
        return 0;
    }

    let wordCollection = string.trim().split(/\s+/);

    return wordCollection.length;
}

export default getTotalWordsFromString;
