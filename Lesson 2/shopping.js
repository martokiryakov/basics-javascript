function shopping (input) {
    let budgetPeter = Number(input[0]);
    let totalVideoCards =Number(input[1]);
    let totalProcessors =Number(input[2]);
    let totalRam =Number(input[3]);
    let priceVideoCard = 250;
    let sumVideoCards = totalVideoCards*priceVideoCard
    let priceProcessor = 0.35*sumVideoCards
    let priceRam = 0.1*sumVideoCards
    let sumProcessors = totalProcessors*priceProcessor
    let sumRam = totalRam*priceRam
    let sum = sumVideoCards+sumProcessors+sumRam
    if (totalVideoCards>totalProcessors){
        sum= 0.85*sum
    }
    if (budgetPeter>=sum){
        let leftMoney=budgetPeter-sum
        console.log(`You have ${leftMoney} leva left!`)
    }else if (budgetPeter<=sum){
        let neededMoney = sum-budgetPeter
        console.log(`Not enough money! You need ${neededMoney} leva more!`)
    }
    }
shopping(["900",
"2",
"1",
"3"])
