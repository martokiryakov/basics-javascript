function sumNumbers(input) {
  let sum = 0;
  let numberAsString = input[0];

  for (let index = 0; index < numberAsString.length; index++) {
    let currentNumber = Number(numberAsString[index]);
    sum += currentNumber;
  }
  console.log(`The sum of the digits is:${sum}`);
}
sumNumbers(["1234"]);
