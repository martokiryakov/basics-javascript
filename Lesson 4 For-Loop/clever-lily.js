function cleverLily(input) {
  let age = Number(input[0]);
  let washingMachinePrice = Number(input[1]);
  let toyPrice = Number(input[2]);
  let moneySaved = 0;
  let birthdayMoney = 10;
  for (let birthday = 1; birthday <= age; birthday++) {
    if (birthday % 2 === 0) {
      moneySaved += birthdayMoney - 1;
      birthdayMoney += 10;
    } else {
      moneySaved += toyPrice;
    }
  }
  if (moneySaved >= washingMachinePrice) {
    let moneyLeft = moneySaved - washingMachinePrice;
    console.log(`Yes! ${moneyLeft.toFixed(2)}`);
  } else {
    let moneyNeeded = washingMachinePrice - moneySaved;
    console.log(`No! ${moneyNeeded.toFixed(2)}`);
  }
}
cleverLily(["10", "170.00", "6"]);
