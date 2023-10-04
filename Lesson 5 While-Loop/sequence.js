function numColumn(input) {
  let data = Number(input[0]);

  let newNumb = 1;
  let nextnumb = 0;

  while (nextnumb < data) {
    console.log(newNumb);
    newNumb *= 2;
    nextnumb = newNumb++;
  }
}
generateSequence(["3"]);
