function histogram(input) {
  let n = Number(input[0]);
  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  let p4 = 0;
  let p5 = 0;

  for (let index = 1; index <= n; index++) {
    let num = Number(input[index]);
    if (num < 200) {
      p1++;
    } else if (num < 400) {
      p2++;
    } else if (num < 600) {
      p3++;
    } else if (num < 800) {
      p4++;
    } else {
      p5++;
    }
  }

  let pr1 = (p1 / n) * 100;
  let pr2 = (p2 / n) * 100;
  let pr3 = (p3 / n) * 100;
  let pr4 = (p4 / n) * 100;
  let pr5 = (p5 / n) * 100;

  console.log(`${pr1.toFixed(2)}%`);
  console.log(`${pr2.toFixed(2)}%`);
  console.log(`${pr3.toFixed(2)}%`);
  console.log(`${pr4.toFixed(2)}%`);
  console.log(`${pr5.toFixed(2)}%`);
}
histogram(["3", "1", "2", "999"]);
