function fruitShop(input) {
  let fruit = input[0];
  let day = input[1];
  let quantityFruit = Number(input[2]);
  let price = 0;
  switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      if (fruit === "banana") {
        price = quantityFruit * 2.5;
      } else if (fruit === "apple") {
        price = quantityFruit * 1.2;
      } else if (fruit === "orange") {
        price = quantityFruit * 0.85;
      } else if (fruit === "grapefruit") {
        price = quantityFruit * 1.45;
      } else if (fruit === "kiwi") {
        price = quantityFruit * 2.7;
      } else if (fruit === "pineapple") {
        price = quantityFruit * 5.5;
      } else if (fruit === "grapes") {
        price = quantityFruit * 3.85;
      }
      break;
    case "Saturday":
    case "Sunday":
      if (fruit === "banana") {
        price = quantityFruit * 2.7;
      } else if (fruit === "apple") {
        price = quantityFruit * 1.25;
      } else if (fruit === "orange") {
        price = quantityFruit * 0.9;
      } else if (fruit === "grapefruit") {
        price = quantityFruit * 1.6;
      } else if (fruit === "kiwi") {
        price = quantityFruit * 3;
      } else if (fruit === "pineapple") {
        price = quantityFruit * 5.6;
      } else if (fruit === "grapes") {
        price = quantityFruit * 4.2;
      }
      break;
  }
  if (price > 0) {
    console.log(price.toFixed(2));
  } else {
    console.log("error");
  }
}
fruitShop(["apple", "Tuesday", "2"]);
