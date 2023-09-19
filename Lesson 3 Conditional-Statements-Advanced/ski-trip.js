function skiTrip(input) {
  let timeOfStay = Number(input[0]);
  let nightStay = timeOfStay - 1;
  let roomType = input[1];
  let grade = input[2];
  let price = 0;
  switch (roomType) {
    case "room for one person":
      price = nightStay * 18;
      break;
    case "apartment":
      price = nightStay * 25;
      if (timeOfStay < 10) {
        price *= 0.7;
      } else if (timeOfStay >= 10 && timeOfStay <= 15) {
        price *= 0.65;
      } else {
        price *= 0.5;
      }
      break;
    case "president apartment":
      price = nightStay * 35;
      if (timeOfStay < 10) {
        price *= 0.9;
      } else if (timeOfStay >= 10 && timeOfStay <= 15) {
        price *= 0.85;
      } else {
        price *= 0.8;
      }
      break;
  }
  if (grade === "positive") {
    price *= 1.25;
  } else if (grade === "negative") {
    price *= 0.9;
  }
  console.log(price.toFixed(2));
}
skiTrip(["14", "apartment", "positive"]);
