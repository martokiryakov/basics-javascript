function minNumber(input) {
    let index = 1;
    let inputElement = input[0];
    let min = Number.MAX_SAFE_INTEGER;
    while (inputElement !== "Stop") {
      let currentNumber = Number(inputElement);
      if (currentNumber < min) {
        min = currentNumber;
      }
      inputElement = input[index];
      index++;
    }
    console.log(min);
  }
  minNumber(["100",
  "99",
  "80",
  "70",
  "Stop"])
  