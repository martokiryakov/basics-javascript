function repainting (input) {
let sqmNylon = 1.5;
let litrePaint = 14.5;
let adderPaint = 5;
let quantityNylon = Number(input[0]);
let quantityPaint = Number(input[1]);
let quantityadder = Number(input[2]);
let hoursWork = Number(input[3]);
let totalPaint = litrePaint*quantityPaint + (litrePaint*quantityPaint)*0.1;
let totalNylon = sqmNylon*quantityNylon + 2*sqmNylon;
let totalAdder = adderPaint*quantityadder;
let bags = 0.4;
let totalMaterials = totalPaint + totalNylon + totalAdder + bags;
let totalSumBuilders = (30/100*totalMaterials)*hoursWork;
let totalSum = totalMaterials + totalSumBuilders;
console.log(totalSum);
}
repainting(["10", "11", "4", "8"])