//import and execute

import transformCollectionToString from "./transformCollectionToString.js";

console.log("\n-------------- exercise_10 --------------");
console.log();

let testInputs = [
    { collection: ["Shoulder", "Clutch", "4 time", "Transmission"] },
    { collection: [] },
];

for (let i in testInputs) {
    let { collection } = testInputs[i];
    console.log(
        `Collection: [${collection}]. Transformed: "${transformCollectionToString(
            collection
        )}"`
    );
}
