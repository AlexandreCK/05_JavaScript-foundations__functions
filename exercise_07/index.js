//import and execute

import isTypeOf from "./isTypeOf.js";

console.log("\n-------------- exercise_07 --------------");
console.log();

let testInputs = [
    { value: "Recursive", type: "string" },
    { value: 404, type: "number" },
    { value: false, type: "boolean" },
    { value: [9.5, "Mosquito"], type: "array" },
    { value: "uwu", type: "array" },
    { value: 8.75, type: "string" },
];

for (let i in testInputs) {
    let { value, type } = testInputs[i];
    console.log(
        `Value: ${value}. Type: ${type}. Matches? ${isTypeOf(value, type)}`
    );
}
