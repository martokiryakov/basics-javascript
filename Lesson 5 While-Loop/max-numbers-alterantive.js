function maxNumberAlternative(input){
    input.pop();
    let numbersArray = input.map(Number)
console.log(Math.max(...numbersArray));
}
maxNumberAlternative(["45",
"-20",
"7",
"99",
"Stop"])
