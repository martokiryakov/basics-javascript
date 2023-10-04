function balance(input) {
  let total = 0;
  let index = 0;
  let currentRow = input[index];
  while (currentRow !== "NoMoreMoney") {
    let currentRowNumber = Number(currentRow);
    if (currentRowNumber < 0) {
      console.log("Invalid operation!");
      break;
    }
    console.log(`Increase: ${currentRowNumber.toFixed(2)}`);
    total += currentRowNumber;
    index++;
    currentRow=input[index]
  }
  console.log(`Total: ${total.toFixed(2)}`);
}
balance(["5.51", "69.42", "100", "NoMoreMoney"]);
