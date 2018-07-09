
const workTimer = 1500;
const breakTimer = 300;
const lbreakTimer = 600;
var pomCounter = 0;
var allCounter = 0;
var timer = workTimer;
var mins, seconds;
var counting;
var stopped = true;

var display = document.querySelector(".timer")
var noPoms = document.querySelector(".noPoms")
var mode = document.querySelector(".mode")
const start = document.querySelector(".start")
const pause = document.querySelector(".pause")
const stop = document.querySelector(".stop")

start.addEventListener("click",startTimer,false);
stop.addEventListener("click",stopTimer,false);
pause.addEventListener("click",pauseTimer,false);

function pauseTimer(){
  stopped = true;
  if(allCounter % 2 == 0){ // if round number is even then work timer displays
    clearInterval(counting);
    timer = workTimer;
  }
}

function stopTimer(){
  stopped = true;
  clearInterval(counting);
  timer = workTimer;
  allCounter = 0;
  pomCounter = 0;
  mode.innerText = ""
  display.innerText = "00:00"
  noPoms.innerText = "#pomodoros"
}



function startTimer(){
  if(stopped == true){

// work timer counts down
    stopped = false;
    mode.innerText = "Work"
    counting = setInterval(function () {
      mins = parseInt(timer / 60);
      seconds = parseInt(timer % 60);
      mins = mins < 10 ? "0" + mins : mins;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      display.innerText = mins + ":" + seconds;
      timer = --timer;

      if(timer < 0){ // if we hit zero timer resets to either work or break rounds
        allCounter += 1;
        if(allCounter % 2 == 0){ // if round number is even then work timer displays
          timer = workTimer;
          mode.innerText = "Work";
        }
        else{
          timer = (allCounter + 1) % 8 == 0 ? lbreakTimer : breakTimer; // else we take a long break if we have had 4 work rounds, otherwise short break
          pomCounter += 1; //add 1 pomodoros
          noPoms.innerText = pomCounter + " pomodoros";
          mode.innerText = "Break"
        }
      }
    }, 1000);// then we loop above until stop is pressed
  }

  return;
}
