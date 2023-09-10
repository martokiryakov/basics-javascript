function foodDelivery (input) {
    let chickenMenus = Number(input[0]);
    let fishMenus = Number(input[1]);
    let vegetarianMenus = Number(input[2]);
    let  chickenMenu = 10.35;
    let fishMenu = 12.4;
    let vegetarianMenu = 8.15;
    let totalMenuPrice = chickenMenus * chickenMenu + fishMenus * fishMenu + vegetarianMenus * vegetarianMenu;
    let dessertPrice = 0.2 * totalMenuPrice
    let delivery = 2.50;
    console.log(totalMenuPrice + dessertPrice + delivery);
}
foodDelivery (["2", "4", "3"])