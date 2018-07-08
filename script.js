// work timer counts down from 25 mins and adds a pomodoros when complete
const workTimer = 5;
const breakTimer = 10;
const lbreakTimer = 15;
var pomCounter = 0;
var timer = workTimer;

var mins, seconds;


var counting = setInterval(function () {
  mins = parseInt(timer / 60);
  seconds = parseInt(timer % 60);

  mins = mins < 10 ? "0" + mins : mins;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  console.log(mins + ":" + seconds);

  timer = --timer;

  if(timer < 0){
    console.log("Pomodoros!");
    pomCounter += 1;
    timer = pomCounter % 4 == 0 ? lbreakTimer : breakTimer;
    }





}, 1000);

// then break timer counts down 5 mins

// above is looped unless we are on any multiple of 4 pomodoros

// then we take a break for 25 mins

// then we loop above until stop is pressed

// if pause is pressed at any time during work timer then work timer starts from beginning once we resume
