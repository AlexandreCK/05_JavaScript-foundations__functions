/**
 * #8 :: Export JS function "formatStringByWordsLength" to check number of words contained in given string
    - if total number of words is greater than 5, then return uppercase string
    - otherwise, return lower case string
 * input: string (sentence) 
 * output: string
 */

/**
 * CASE #1
 * input: "This is a long, long, long sentence."
 * output: "THIS IS A LONG, LONG, LONG SENTENCE."
 */

/**
 * CASE #2 * input: "This is short one."
 * output: "this is short one."
 */

import getTotalWordsFromString from "../exercise_02/getTotalWordsFromString.js";
import isTypeOf from "../exercise_07/isTypeOf.js";

const WORD_THRESHOLD = 5;

/**
 * Format string based on word count. Uppercase if more than 5 words, if not, lowercase.
 * @param {string} sentence String to format.
 * @returns {string} Formmated string.
 */
function formatStringByWordsLength(sentence) {
    if (!isTypeOf(sentence, "string")) {
        return "";
    }

    let numberOfWords = getTotalWordsFromString(sentence);
    return numberOfWords > WORD_THRESHOLD
        ? sentence.toUpperCase()
        : sentence.toLowerCase();
}

export default formatStringByWordsLength;
