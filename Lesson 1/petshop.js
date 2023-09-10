function shop(input) { 
    let dog = input[0]; 
    let cat = input[1]; 
    let dogprice = "2.50" 
    let catprice = "4"
     let result = (input[0]*dogprice)+(input[1]*catprice); 
    console.log(`${result} lv.`);
    
}
shop(["5", "4"])
