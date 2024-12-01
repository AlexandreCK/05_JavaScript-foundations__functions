//import and execute

import formatStringByWordsLength from "./formatStringByWordsLength.js";

console.log("\n-------------- exercise_08 --------------");
console.log();

let testInputs = [
    "Pain and suffering are always inevitable for a large intelligence and a deep heart. The really great men must, I think, have great sadness on earth.",
    "Beauty will save the world.",
];

for (let i in testInputs) {
    let sentence = testInputs[i];
    console.log(
        `Sentence: "${sentence}" Formatted: ${formatStringByWordsLength(
            sentence
        )}`
    );
}
