//import and execute

import generateRandomNumberInRange from "./generateRandomNumberInRange.js";

console.log("\n-------------- exercise_03 --------------");
console.log();

let testInputs = [10, "Helicobacter pylori", 400, 5000, -154];

for (let i in testInputs) {
    console.log(
        `Limit: ${
            testInputs[i]
        }. Random number within the limit: ${generateRandomNumberInRange(
            testInputs[i]
        )}`
    );
}
