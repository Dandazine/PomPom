const timeChoice = document.getElementById("number");
const saveBtn = document.getElementById("save-btn");

saveBtn.addEventListener("click", () => {
  let timeLimit = timeChoice.value.trim();
  if (
    (timeChoice.value.trim() !== "" || timeChoice.value.trim() === undefined) &&
    typeof timeChoice.value.trim() === "string"
  ) {
    timeLimit = parseInt(timeChoice.value.trim()) * 60;
  } else {
    timeLimit = parseInt(defaultTime) * 60;
  }

  chrome.storage.local.set(
    { timeLimit: timeLimit, timer: timeLimit, isRunning: false },
    () => {
      console.log(`Time limit has been set to ${timeLimit}`);
    }
  );
});
