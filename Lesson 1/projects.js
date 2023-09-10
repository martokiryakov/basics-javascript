function projects(input) {;
    let nameArchitect = (input[0]);
    let a = Number(input[1]);
    let b = 3;
    let neededHours = a*b;;
    console.log(`The architect ${nameArchitect} will need ${neededHours} hours to complete ${a} project/s.`);
}
projects(["George", "4"])
