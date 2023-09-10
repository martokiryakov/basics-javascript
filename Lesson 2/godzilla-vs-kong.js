function godzillaVsKong(input) {
    let filmBudget = Number(input[0]);
    let actorsCount = Number(input[1]);
    let costumePricePerActor = Number(input[2]);
    let decorationPrice = 0.1 * filmBudget;
    let costumesPrice = actorsCount * costumePricePerActor;
    if (actorsCount > 150) {
        costumesPrice *= 0.9
    }
    let totalPrice = decorationPrice + costumesPrice
    if (filmBudget >= totalPrice) {
        let moneyLeft = filmBudget - totalPrice;
        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
    } else if (filmBudget < totalPrice) {
        let moneyNeeded = totalPrice - filmBudget
        console.log("Not enough money!");
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`)
    }
}
godzillaVsKong(["20000",
    "120",
    "55.5"])
