let startTime = 0;
let elapsedTime = 0;
let interval;

function startTimer() {
    if (!interval) {
        startTime = Date.now() - elapsedTime;
        interval = setInterval(updateDisplay, 1000);
    }
}

function stopTimer() {
    if (interval) {
        elapsedTime = Date.now() - startTime;
        clearInterval(interval);
        interval = null;
    }
}

function resetTimer() {
    clearInterval(interval);
    interval = null;
    elapsedTime = 0;
    startTime = 0;
    updateDisplay();
}

function updateDisplay() {
    let currentTime = elapsedTime;
    if (interval) {
        currentTime = Date.now() - startTime;
    }
    let seconds = Math.floor(currentTime / 1000) % 60;
    let minutes = Math.floor(currentTime / (1000 * 60)) % 60;
    let hours = Math.floor(currentTime / (1000 * 60 * 60));
    document.getElementById('stopwatch').textContent = 
        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
