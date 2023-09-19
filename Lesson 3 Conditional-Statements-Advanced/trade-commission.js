function tradeCommission(input) {
  let city = input[0];
  let numberSales = Number(input[1]);
  let margin = 0;
  switch (city) {
    case "Sofia":
      if (numberSales >= 0 && numberSales <= 500) {
        margin = 0.05 * numberSales;
      } else if (numberSales > 500 && numberSales <= 1000) {
        margin = 0.07 * numberSales;
      } else if (numberSales > 1000 && numberSales <= 10000) {
        margin = 0.08 * numberSales;
      } else if (numberSales > 10000) {
        margin = 0.12 * numberSales;
      }
      break;
    case "Varna":
      if (numberSales >= 0 && numberSales <= 500) {
        margin = 0.045 * numberSales;
      } else if (numberSales > 500 && numberSales <= 1000) {
        margin = 0.075 * numberSales;
      } else if (numberSales > 1000 && numberSales <= 10000) {
        margin = 0.1 * numberSales;
      } else if (numberSales > 10000) {
        margin = 0.13 * numberSales;
      }
      break;
    case "Plovdiv":
      if (numberSales >= 0 && numberSales <= 500) {
        margin = 0.055 * numberSales;
      } else if (numberSales > 500 && numberSales <= 1000) {
        margin = 0.08 * numberSales;
      } else if (numberSales > 1000 && numberSales <= 10000) {
        margin = 0.12 * numberSales;
      } else if (numberSales > 10000) {
        margin = 0.145 * numberSales;
      }
      break;
  }
  if (
    (city === "Sofia" || city === "Varna" || city === "Plovdiv") &&
    numberSales > 0
  ) {
    console.log(`${margin.toFixed(2)}`);
  } else {
    console.log("error");
  }
}
tradeCommission(["Kaspichan", "-50"]);
