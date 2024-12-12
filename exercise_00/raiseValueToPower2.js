/**
 *  * Export JS function "raiseValueToPower2" to raise one number to power of two
 
* - raise base to 2
 
 * - define signature
  * - input: one number
  * - output: one boolean
*/

const POWER = 2;

/**
 * Raise one number to power of two
 * @param {number} base
 * @returns number
 */
const raiseValueToPower2 = function (base) {
    const result = Math.pow(base, POWER);

    return result;
};

export default raiseValueToPower2;
