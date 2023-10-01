function divideByNine(input) {
  let n = Number(input[0]);
  let m = Number(input[1]);
  let sum = 0;
  outputNumbers = "";
  for (let i = n; i <= m; i++) {
    if (i % 9 === 0) {
      sum += i;
      outputNumbers += `${i}\n`;
    }
  }
  console.log(`The sum: ${sum}`);
  console.log(outputNumbers);
}
divideByNine(["100", "200"]);
