function basketballEquipment(input){
    let annualTrainingFee = Number(input[0]);
    let trainersPrice = 0.6 * annualTrainingFee;
    let kitPrice = 0.8 * trainersPrice;
    let basketball = 0.25 * kitPrice;
    let basketballAccesories = 0.2 * basketball;
    console.log(annualTrainingFee + trainersPrice + kitPrice + basketball + basketballAccesories)
}
basketballEquipment (["365"]);
