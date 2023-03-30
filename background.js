chrome.alarms.create({
  periodInMinutes: 1 / 60, //once every second
});

chrome.alarms.onAlarm.addListener((alarm) => {
  chrome.storage.local.get(["timer", "timeLimit", "isRunning"], (result) => {
    const isRunning = result.isRunning ?? false;
    const time = result.timer ?? 25 * 60;
    if (!isRunning) {
      return;
    }
    if (result.timer <= 0) {
      chrome.storage.local.set({
        isRunning: false,
      });
      return;
    }
    chrome.storage.local.set({
      timer: time - 1,
    });
    chrome.action.setBadgeText({
      text: `${Math.floor(time / 60)}`,
    });
    if (time === 0) {
      this.registration.showNotification("Pomodoro Chrome Extension", {
        body: "Great job! Your study session is done!",
        icon: "logo.png",
      });
      chrome.storage.local.set({ isRunning: false });
    }
  });
});
