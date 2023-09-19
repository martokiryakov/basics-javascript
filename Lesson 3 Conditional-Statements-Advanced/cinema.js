function cinema(input) {
  let movieType = input[0];
  let rows = Number(input[1]);
  let colomns = Number(input[2]);
  let seatsOccupied = rows * colomns;
  let profit = 0;
  if (movieType === "Premiere") {
    profit = seatsOccupied * 12;
  } else if (movieType === "Normal") {
    profit = seatsOccupied * 7.5;
  } else if (movieType === "Discount") {
    profit = seatsOccupied * 5;
  }
  console.log(`${profit.toFixed(2)} leva`);
}
cinema(["Premiere", "10", "12"]);
swi;
