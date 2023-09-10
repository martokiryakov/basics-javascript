function aquarium (input) {
    let length = Number(input[0]);
    let depth = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);
    let totalPercent = percent/100;
    let totalValue = length*depth*height;
    let totalLitres = totalValue/1000;
    let usedSpace = totalPercent;
    let neededLitres = totalLitres* (1-totalPercent);
    console.log (neededLitres);     
}
aquarium(["85", "75", "47", "17"])