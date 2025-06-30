let [hours, minutes, seconds, milliseconds] = [0, 0, 0, 0];
let timer = null;

function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds;
  document.getElementById("display").innerText = `${h}:${m}:${s}.${ms}`;
}

function stopwatch() {
  milliseconds += 1;
  if (milliseconds === 100) {
    milliseconds = 0;
    seconds++;
  }
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  updateDisplay();
}

function startStop() {
  const btn = document.getElementById('startPauseBtn');
  if (timer === null) {
    timer = setInterval(stopwatch, 10);
    btn.innerText = "Pause";
  } else {
    clearInterval(timer);
    timer = null;
    btn.innerText = "Start";
  }
}

function reset() {
  clearInterval(timer);
  timer = null;
  [hours, minutes, seconds, milliseconds] = [0, 0, 0, 0];
  updateDisplay();
  document.getElementById('startPauseBtn').innerText = "Start";
  document.getElementById("laps").innerHTML = "";
}

function recordLap() {
  let lapTime = document.getElementById("display").innerText;
  let lapItem = document.createElement("li");
  lapItem.innerText = lapTime;
  document.getElementById("laps").appendChild(lapItem);
}
