function multiplication(input) {
  let num = Number(input[0]);
  for (let index = 1; index <= 10; index++) {
    let sum = index * num;
    console.log(`${index} * ${num} = ${sum}`);
  }
}
multiplication(["5"]);
