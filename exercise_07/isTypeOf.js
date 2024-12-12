/**
 * #7 :: Export JS function "isTypeOf" to check if type of value matches type received as argument
 * input: any (value)
 * input: 'string' | 'number' | 'boolean' | 'array' (type)
 * output: boolean
 */

/**
 * hint 👉 array should be treated in a different way. Use Array.isArray() to check it
 * docu 👉 https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
 */

/**
 * Check if the type of the input value matches the provided type.
 * @param {any} value Value to check.
 * @param {'string' | 'number' | 'boolean' | 'array'} type Type to check.
 * @returns {boolean} True if value matches the specified type, false if not.
 */
function isTypeOf(value, type) {
    if (type === "array") {
        return Array.isArray(value);
    }

    return typeof value === type;
}

export default isTypeOf;
