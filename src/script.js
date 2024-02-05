// Variables to store the start time, elapsed time, and interval ID
let startTime = 0;
let elapsedTime = 0;
let interval;

// Function to start the timer
function startTimer() {
  // Check if the timer is not already running
  if (!interval) {
    // Calculate the start time by subtracting the elapsed time from the current time
    startTime = Date.now() - elapsedTime;
    // Start the interval to update the display every second
    interval = setInterval(updateDisplay, 10);
  }
}

// Function to stop the timer
function stopTimer() {
  // Check if the timer is running
  if (interval) {
    // Calculate the elapsed time by subtracting the start time from the current time
    elapsedTime = Date.now() - startTime;
    // Clear the interval to stop updating the display
    clearInterval(interval);
    interval = null;
  }
}

// Function to reset the timer
function resetTimer() {
  // Clear the interval and reset the elapsed time and start time to zero
  clearInterval(interval);
  interval = null;
  elapsedTime = 0;
  startTime = 0;
  // Update the display to show the reset time
  updateDisplay();
}

// Function to update the display with the current time
function updateDisplay() {
  let currentTime = elapsedTime;
  // If the timer is running, calculate the current time by subtracting the start time from the current time
  if (interval) {
    currentTime = Date.now() - startTime;
  }
  // Calculate the hours, minutes, and seconds from the current time
  let milliseconds = Math.floor((currentTime % 1000) / 10);
  let seconds = Math.floor(currentTime / 1000) % 60;
  let minutes = Math.floor(currentTime / (1000 * 60)) % 60;
  let hours = Math.floor(currentTime / (1000 * 60 * 60));
  // Update the stopwatch element with the formatted time
  document.getElementById("stopwatch").textContent = `${hours
    .toString()
    .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}.${milliseconds.toString().padStart(2, "0")}`;
}

// Add event listeners to the start, stop, and reset buttons
document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("stop").addEventListener("click", stopTimer);
document.getElementById("reset").addEventListener("click", resetTimer);

// Time Now Function
function timeNow() {
  document.getElementById("timeNow").textContent = new Date().toLocaleString();
}
setInterval(timeNow, 1000);

