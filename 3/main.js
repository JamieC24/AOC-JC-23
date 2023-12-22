const fs = require("fs");

let regex = /[@!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]/;
let numberRegex = /\d+/g;

try {
    let example = fs.readFileSync('example.txt', 'utf8');
    example = example.split("\n");
    let symbolIndexes = [];
    let numbers = [];
    numberIndexes = [];
    example.forEach((line, index) => {
        if(regex.test(line)) {
            // console.log("This line has a symbol");
            console.log(line)
            symbolIndexes.push(line.indexOf(line.match(regex)));
        }
        // Get all of the numbers on lines that have numbers and push them to the numbers array
        if(numberRegex.test(line)) {
            line.match(numberRegex).map(x => {
                numbers.push(x);
            })
        }
        // Go through the numbers array and get the index
        numbers.forEach(num => {
            if(line.indexOf(num) > -1) {
                numberIndexes.push(line.indexOf(num));
            }
        })
    })
    numbers.forEach(num => {
        // console.log(`Length of ${num} is ${num.length}`)
    })
    console.log(symbolIndexes);
    // console.log(numbers)
    console.log(numberIndexes);
    // console.log(JSON.stringify(example))
    let validIndexes = [];
    
    numberIndexes.forEach(ni => {
        // console.log(`${numbers[ni]} is ${numbers[ni].length} digits long`)
        // endIndex = Number index + the length of the number - 1 - The index of the final digit of the number
        let endIndex = Number(ni) + Number(numbers[ni].length) - 1;
        // If the end index is in the array of symbol indexes
        if(symbolIndexes.includes(endIndex)) {
            console.log(`Symbol index ${symbolIndexes[symbolIndexes.indexOf(endIndex.length)]} is the same as ${endIndex}`)
            validIndexes.push(Number(endIndex) + 1)
        } else if(symbolIndexes.includes(Number(endIndex) + 1)) {
            console.log(`Symbol index ${symbolIndexes[symbolIndexes.indexOf(Number(endIndex) + 1)]} is one ahead of ${endIndex} which qualifies it`)
            validIndexes.push(Number(endIndex) + 1)
        } else if(symbolIndexes.includes(Number(endIndex) - 1)) {
            console.log(`Symbol index ${symbolIndexes[symbolIndexes.indexOf(Number(endIndex) - 1)]} is one behind of ${endIndex} which qualifies it`)
            validIndexes.push(Number(endIndex) + 1)
        }
    })
    
    console.log(validIndexes)
    

} catch (err) {
    console.error(err)
}

/**
 * 467 (spans to index 2) - asterisk in index 3 of line 2
 * 114 (index 5 - 7) - asterisk in index 3 of line 2 - NOT PART
 * 
 */