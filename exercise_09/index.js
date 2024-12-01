// Import and execute

import getDistanceMessageFromSumTo100 from "./getDistanceMessageFromSumTo100.js";

console.log("\n-------------- exercise_09 --------------");
console.log();

let testInputs = [70, 26, "Advanced Algebra", -20];

for (let i in testInputs) {
    let value = testInputs[i];
    console.log(`Value: ${value}. ${getDistanceMessageFromSumTo100(value)}`);
}
