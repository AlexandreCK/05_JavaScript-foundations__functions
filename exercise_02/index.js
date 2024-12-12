//import and execute

import getTotalWordsFromString from "./getTotalWordsFromString.js";

console.log("\n-------------- exercise_02 --------------");
console.log();

let testInputs = [
    "Presents hypertrophic amygdalae without the presence of esxsudate",
    "   spaces   spaces",
    "",
    "Guts",
    null,
    1936,
];

for (let input in testInputs) {
    console.log(
        `Input: ${testInputs[input]}. Words: ${getTotalWordsFromString(
            testInputs[input]
        )}`
    );
}
