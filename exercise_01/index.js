//import and execute

import getDistanceFromThreshold from "./getDistanceFromThreshold.js";

console.log("\n-------------- exercise_01 --------------");
console.log();

let testInputs = [
    { value: 112, threshold: 12 },
    { value: 500, threshold: 1000 },
    { value: 15, threshold: 20 },
    { value: "Esomeprazol", threshold: "Prolia" },
    { value: -100, threshold: 1000 },
];

for (let input in testInputs) {
    let { value, threshold } = testInputs[input];
    console.log(
        `Value: ${value}. Threshold: ${threshold}. Distance: ${getDistanceFromThreshold(
            value,
            threshold
        )}`
    );
}
