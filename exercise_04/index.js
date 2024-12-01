// Import and execute

import isGreaterThan from "./isGreaterThan.js";

console.log("\n-------------- exercise_04 --------------");
console.log();

let testInputs = [
    { value: 1914, threshold: 2024 },
    { value: "Gastroscopy", threshold: "E. Coli" },
    { value: 500, threshold: 500 },
    { value: 118000, threshold: 10 },
];

for (let i in testInputs) {
    let { value, threshold } = testInputs[i];
    console.log(
        `Value: ${value}. Threshold: ${threshold}. Greater? ${isGreaterThan(
            value,
            threshold
        )}`
    );
}
