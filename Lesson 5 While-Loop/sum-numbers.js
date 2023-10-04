function sumNumbers(input) {
  let finalNumber = Number(input[0]);
  let sumNumbers = 0;
  let index = 1;
  let currentNumber = Number(input[index]);
  while (sumNumbers < finalNumber) {
    sumNumbers += currentNumber;
    index++;
    currentNumber = Number(input[index]);
  }
  console.log(sumNumbers);
}
sumNumbers(["100", "10", "20", "30", "40"]);
