function radianConverter (input) {
    let radian = Number(input[0]);
    let degree = radian * 180 / Math.PI;
    console.log(degree);
}
radianConverter(["3.1416"])