function evenPowersOf2(input) {
  let n = Number(input[0]);
  for (let a = 0; a <= n; a += 2) {
    if (n % 2 === 0) {
    }
    console.log(Math.pow(2, a));
  }
}
evenPowersOf2(["5"]);
