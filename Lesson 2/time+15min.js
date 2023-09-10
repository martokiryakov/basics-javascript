function timeAnd15Min (input){
    let hour = Number(input[0]);
    let min = Number(input[1]);
    let totaltime=hour*60 +min + 15
    let newHour = Math.floor(totaltime/60);
    let newMin = totaltime%60;
    if (newHour===24){
        newHour = 0;
    }
    if (newMin<10){
        console.log(`${newHour}:0${newMin}`);
    } else {
        console.log(`${newHour}:${newMin}`);
    }
}
timeAnd15Min(["1", "46"])