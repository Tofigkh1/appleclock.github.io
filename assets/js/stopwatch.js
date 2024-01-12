// Buttonlar
let lap = document.querySelector(".lap");
let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");
// Esas Timer
let timer = document.querySelector(".timer");

let seconds = 0;
let milliseconds = 0;
let intervalIndex;

let lapdiv = document.querySelector(".lapdiv")

start.addEventListener("click", () => {
  start.style = "display: none;";
  stop.style = "display: inline;";
  lap.style = "display: inline;";
  reset.style = "display: none;";

  clearInterval(intervalIndex);
  intervalIndex = setInterval(() => {
    milliseconds += 10;

    if (milliseconds === 1000) {
      seconds++;
      milliseconds = 0;
    }

    timer.innerHTML = convertTime(seconds, milliseconds);
  }, 10);
});

stop.addEventListener("click", () => {
  stop.style = "display: none;";
  start.style = "display: inline;";
  lap.style = "display: none;";
  reset.style = "display: inline;";

  clearInterval(intervalIndex);

  timer.innerHTML = convertTime(seconds, milliseconds);
});

reset.addEventListener("click", () => {
  reset.style = "display: none;";
  lap.style = "display: inline;";

  clearInterval(intervalIndex);
  seconds = 0;
  milliseconds = 0;

  timer.innerHTML = convertTime(seconds, milliseconds);
});

let lapp = document.querySelector(".lapp")

lap.addEventListener = ("click", let = ()=>{
  console.log("click olundu");
})



function convertTime(seconds, milliseconds) {
  const hours = Math.floor(seconds / 3600);
  const remainingSeconds = seconds % 3600;
  const min = Math.floor(remainingSeconds / 60);
  const lastSec = remainingSeconds - min * 60;

  const roundHours = hours;
  const roundMin = min < 10 ? "0" + min : min;
  const roundLastSec = lastSec < 10 ? "0" + lastSec : lastSec;

  const roundMilliseconds = milliseconds.toString().padStart(3, "0");

  let formattedTime = `${roundHours}:${roundMin}:${roundLastSec},${roundMilliseconds}`;
   
  return formattedTime;

}

