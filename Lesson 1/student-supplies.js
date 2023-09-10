function studentSupplies (input) {
    let pricePens = 5.8;
    let priceMarkers = 7.2;
    let priceCleaning = 1.2;
    let totalPens = Number (input[0]);
    let totalMarkers = Number (input[1]);
    let totalCleaning = Number (input[2]);
    let discount = Number (input[3]);
    let discountOf = discount/100
    let totalPrice = pricePens*totalPens + priceMarkers*totalMarkers + priceCleaning*totalCleaning
    let finalPrice = totalPrice - (totalPrice*discountOf)
    console.log(finalPrice);
}
studentSupplies(["2", "3", "4", "25"])