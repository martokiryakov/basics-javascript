function onTime(input) {
  let examHour = Number(input[0]);
  let examMin = Number(input[1]);
  let comeHour = Number(input[2]);
  let comeMin = Number(input[3]);
  let timeOfExamInMinutes = examHour * 60 + examMin;
  let timeOfComeInMinutes = comeHour * 60 + comeMin;
  let timeEarly = timeOfExamInMinutes - timeOfComeInMinutes;
  let timeLate = timeOfComeInMinutes - timeOfExamInMinutes;
  timeInHour = 0;
  timeInMinutes = 0;

  if (timeOfExamInMinutes > timeOfComeInMinutes && timeEarly <= 30) {
    console.log(`On time`);
    console.log(`${timeEarly} minutes before the start`);
  } else if (
    timeOfExamInMinutes === timeOfComeInMinutes &&
    timeEarly === timeEarly
  ) {
    console.log(`On time`);
  } else if (timeOfComeInMinutes > timeOfExamInMinutes && timeLate < 60) {
    console.log(`Late`);
    console.log(`${timeLate} minutes after the start`);
  } else if (timeOfComeInMinutes > timeOfExamInMinutes && timeLate >= 60) {
    timeInHour = timeLate / 60;
    timeInMinutes = timeLate % 60;
    if (timeInMinutes < 10) {
      console.log(`Late`);
      console.log(
        `${Math.floor(timeInHour)}:0${timeInMinutes} hours after the start`
      );
    } else {
      console.log(`Late`);
      console.log(
        `${Math.floor(timeInHour)}:${timeInMinutes} hours after the start`
      );
    }
  } else if (
    timeOfExamInMinutes > timeOfComeInMinutes &&
    timeEarly > 30 &&
    timeEarly < 60
  ) {
    console.log(`Early`);
    console.log(`${timeEarly} minutes before the start`);
  } else if (timeOfExamInMinutes > timeOfComeInMinutes && timeEarly >= 60) {
    timeInHour = timeEarly / 60;
    timeInMinutes = timeEarly % 60;
    if (timeInMinutes < 10) {
      console.log(`Early`);
      console.log(
        `${Math.floor(timeInHour)}:0${timeInMinutes} hours before the start`
      );
    } else {
      console.log(`Early`);
      console.log(
        `${Math.floor(timeInHour)}:${timeInMinutes} hours before the start`
      );
    }
  }
}
onTime(["9", "30", "9", "50"]);
