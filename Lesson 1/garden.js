function garden(input) {
    let sqm = Number(input[0]);
    let sqmPrice = 7.61;
    let totalPrice = sqm * sqmPrice;
    let discount = 0.18 * totalPrice;
    let finalPrice = totalPrice - discount;
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}
garden (["550"])