"use strict";

// """dom""" elements
const timerElement = document.getElementById("timer");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const quitBtn = document.getElementById("quit");
// eventlisteners
startBtn.addEventListener("click", () => {
  chrome.storage.local.set({
    isRunning: true,
  });
});
stopBtn.addEventListener("click", () => {
  chrome.storage.local.set({
    isRunning: false,
  });
});
quitBtn.addEventListener("click", () => {
  chrome.storage.local.get(["timeLimit", "timer"], (result) => {
    const timeLimit = result.timeLimit ?? 25 * 60;
    chrome.storage.local.set({
      isRunning: false,
      timer: timeLimit,
    });
  });
});

function updateTimer() {
  chrome.storage.local.get(["timer"], (result) => {
    const time = result.timer ?? 25 * 60;
    timerElement.textContent = `${Math.floor(
      time / 60
    )} minute(s) and ${Math.floor(time % 60)} seconds remain.`;
  });
}
updateTimer();
setInterval(updateTimer, 1000);
