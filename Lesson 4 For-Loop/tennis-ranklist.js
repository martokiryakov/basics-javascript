function tennisRanklist(input) {
  let numTurnir = Number(input[0]);
  let points = Number(input[1]);
  let newPoints = 0;
  let winner = 0;

  for (let index = 2; index < input.length; index++) {
    let curTurnir = input[index];

    switch (curTurnir) {
      case "W":
        newPoints += 2000;
        winner++;
        break;
      case "F":
        newPoints += 1200;
        break;
      case "SF":
        newPoints += 720;
        break;
    }
  }
  let avarage = Math.floor(newPoints / numTurnir);
  let winPercent = (winner / numTurnir) * 100;
  console.log(`Final points: ${newPoints + points}`);
  console.log(`Average points: ${avarage}`);
  console.log(`${winPercent.toFixed(2)}%`);
}
tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);
