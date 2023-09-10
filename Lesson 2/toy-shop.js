function toyShop(input){
    let tripPrice = Number(input[0]);
    let jigsawCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let bearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);
    let toysPrice = jigsawCount*2.6 + dollsCount*3 + bearsCount*4.1 + minionsCount*8.20 + trucksCount*2;
    let toysCount = jigsawCount+dollsCount+bearsCount+minionsCount+trucksCount;
    if (toysCount>=50){
        toysPrice*=0.75;
    }
    toysPrice *=0.9;
    if (toysPrice>= tripPrice){
        let moneyLeft = toysPrice - tripPrice
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`) 
    }else{
        let moneyNeeded = tripPrice - toysPrice
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`)
    }

}
toyShop(["40.8",
"20",
"25",
"30",
"50",
"10"])