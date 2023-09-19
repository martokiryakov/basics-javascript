function hotelRoom(input) {
  let month = input[0];
  let numberNights = Number(input[1]);
  let studioPrice = 0;
  let apartmentPrice = 0;
  switch (month) {
    case "May":
    case "October":
      studioPrice = numberNights * 50;
      apartmentPrice = numberNights * 65;
      if (numberNights > 7 && numberNights <= 14) {
        studioPrice *= 0.95;
      } else if (numberNights > 14) {
        studioPrice *= 0.7;
      }
      break;
    case "June":
    case "September":
      studioPrice = numberNights * 75.2;
      apartmentPrice = numberNights * 68.7;
      if (numberNights > 14) {
        studioPrice *= 0.8;
      }
      break;
    case "July":
    case "August":
      studioPrice = numberNights * 76;
      apartmentPrice = numberNights * 77;
      break;
  }
  if (numberNights > 14) {
    apartmentPrice *= 0.9;
  }
  console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
  console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}
hotelRoom(["May", "15"]);
