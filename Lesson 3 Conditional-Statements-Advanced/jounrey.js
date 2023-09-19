function journey(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let price = 0;
  let destination = "";
  let placeType = "";
  switch (season) {
    case "summer":
      if (budget <= 100) {
        destination = "Bulgaria";
        placeType = "Camp";
        price = budget * 0.3;
      } else if (budget <= 1000) {
        destination = "Balkans";
        placeType = "Camp";
        price = budget * 0.4;
      } else if (budget > 1000) {
        destination = "Europe";
        placeType = "Hotel";
        price = budget * 0.9;
      }
      break;

    case "winter":
      if (budget <= 100) {
        destination = "Bulgaria";
        placeType = "Hotel";
        price = budget * 0.7;
      } else if (budget <= 1000) {
        destination = "Balkans";
        placeType = "Hotel";
        price = budget * 0.8;
      } else if (budget > 1000) {
        destination = "Europe";
        placeType = "Hotel";
        price = budget * 0.9;
      }
      break;
  }
  console.log(`Somewhere in ${destination}`);
  console.log(`${placeType} - ${price.toFixed(2)}`);
}
journey(["50", "summer"]);
