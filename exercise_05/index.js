//import and execute

import isAdditionGreaterThanFifty from "./isAdditionGreaterThanFifty.js";

console.log("\n-------------- exercise_05 --------------");
console.log();

let testInputs = [
    { summand1: 2, summand2: 48 },
    { summand1: "Metabolic regulation", summand2: -20 },
    { summand1: 48, summand2: 1 },
];

for (let input in testInputs) {
    let { summand1, summand2 } = testInputs[input];
    console.log(
        `Summand 1: ${summand1}. Summand 2: ${summand2}. Sum >= 50? ${isAdditionGreaterThanFifty(
            summand1,
            summand2
        )}`
    );
}
