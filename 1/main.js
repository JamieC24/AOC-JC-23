const fs = require("fs");

try {
    let example = fs.readFileSync('input.txt', 'utf8');
    example = example.split("\n");
    // Part one
    example.forEach((line, index, arr) => {
       arr[index] = line.match(/\d/g)
       arr[index] = arr[index][0] + arr[index].at(-1);
       arr[index] = Number(arr[index]);
    })
    let sum = example.reduce((acc, curr) => {
        return acc + curr
    }, 0);
    console.log(`Part one answer: ${sum}`)
    // Part two
    let newExample = fs.readFileSync('input.txt', 'utf8');
    let numberMap = {
        one: "one1one",
        two: "two2two",
        three: "three3three",
        four: "four4four",
        five: "five5five",
        six: "six6six",
        seven: "seven7seven",
        eight: "eight8eight",
        nine: "nine9nine",
    }
    newExample = newExample.split("\n");
    newExample.forEach((line, index, arr) => {
        for (let num of Object.keys(numberMap)) {
            line = line.replaceAll(num, numberMap[num]);
        }
        arr[index] = line;
       arr[index] = line.match(/\d/g)
       arr[index] = arr[index][0] + arr[index].at(-1);
       arr[index] = Number(arr[index]);
    })
    let newSum = newExample.reduce((acc, curr) => {
        return acc + curr
    }, 0);
    // console.log(newExample);
    console.log(`Part two answer: ${newSum}`)
} catch (err) {
    console.error(err)
}