function newHouse(input) {
  let flowerType = input[0];
  let flowerCOunt = Number(input[1]);
  let budget = Number(input[2]);
  let price = 0;
  switch (flowerType) {
    case "Roses":
      price = flowerCOunt * 5;
      if (flowerCOunt > 80) {
        price *= 0.9;
      }
      break;
    case "Dahlias":
      price = flowerCOunt * 3.8;
      if (flowerCOunt > 90) {
        price *= 0.85;
      }
      break;
    case "Tulips":
      price = flowerCOunt * 2.8;
      if (flowerCOunt > 80) {
        price *= 0.85;
      }
      break;
    case "Narcissus":
      price = flowerCOunt * 3;
      if (flowerCOunt < 120) {
        price *= 1.15;
      }
      break;
    case "Gladiolus":
      price = flowerCOunt * 2.5;
      if (flowerCOunt < 80) {
        price *= 1.2;
      }
      break;
  }
  if (budget >= price) {
    let leftMoney = budget - price;
    console.log(
      `Hey, you have a great garden with ${flowerCOunt} ${flowerType} and ${leftMoney.toFixed(
        2
      )} leva left.`
    );
  } else if (budget < price) {
    let neededMoney = price - budget;
    console.log(
      `Not enough money, you need ${neededMoney.toFixed(2)} leva more.`
    );
  }
}
newHouse(["Roses", "55", "250"]);
