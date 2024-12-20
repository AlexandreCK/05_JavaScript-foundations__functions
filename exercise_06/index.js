//import and execute

import checkCollectionHasElements from "./checkCollectionHasElements.js";

console.log("\n-------------- exercise_06 --------------");
console.log();

let testInputs = [
    { collection: ["Bruh", 2004, "Risotto"] },
    { collection: [] },
    { collection: "Essayist" },
];

for (let input in testInputs) {
    let { collection } = testInputs[input];
    console.log(
        `Collection: ${collection}. Has elements? ${checkCollectionHasElements(
            collection
        )}`
    );
}
