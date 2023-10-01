function trekkingMania(input) {
  let groupsPeople = Number(input[0]);

  let musalaCount = 0;
  let monblan = 0;
  let kilimadjaroCount = 0;
  let k2Count = 0;
  let everestCount = 0;
  let totalPeople = 0;

  for (let i = 1; i <= groupsPeople; i++) {
    let peopleInGroup = Number(input[i]);
    if (peopleInGroup <= 5) {
      musalaCount += peopleInGroup;
    } else if (peopleInGroup <= 12) {
      monblan += peopleInGroup;
    } else if (peopleInGroup <= 25) {
      kilimadjaroCount += peopleInGroup;
    } else if (peopleInGroup <= 40) {
      k2Count += peopleInGroup;
    } else {
      everestCount += peopleInGroup;
    }

    totalPeople += peopleInGroup;
  }

  let musalaPercent = (musalaCount / totalPeople) * 100;
  let monblanPercent = (monblan / totalPeople) * 100;
  let kilimandjaroPercent = (kilimadjaroCount / totalPeople) * 100;
  let k2Percent = (k2Count / totalPeople) * 100;
  let everestPercent = (everestCount / totalPeople) * 100;

  console.log(`${musalaPercent.toFixed(2)}%`);
  console.log(`${monblanPercent.toFixed(2)}%`);
  console.log(`${kilimandjaroPercent.toFixed(2)}%`);
  console.log(`${k2Percent.toFixed(2)}%`);
  console.log(`${everestPercent.toFixed(2)}%`);
}
trekkingMania([
  "10",
  "10",
  "5",
  "1",
  "100",
  "12",
  "26",
  "17",
  "37",
  "40",
  "78",
]);
