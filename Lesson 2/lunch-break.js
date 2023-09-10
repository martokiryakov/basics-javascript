function lunchBreak(input){
    let seriesName = input[0];
    let episodeDuration = Number(input[1]);
    let breakDuration = Number(input[2]);
    let lunchDuration = 1/8*breakDuration;
    let relaxTime = 1/4*breakDuration;
    let totalPlannedTime = lunchDuration + relaxTime
    let timeForMovie = breakDuration-totalPlannedTime
    if (timeForMovie>=episodeDuration){
        let freeTime= timeForMovie-episodeDuration
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(freeTime)} minutes free time.`);
    }else{
        let timeNeeded = episodeDuration-timeForMovie;
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(timeNeeded)} more minutes.`)
    }
}
    lunchBreak(["Game of Thrones",
    "60",
    "96"])
    