
function updateClock() {
    const now = new Date();

    let hours = String(now.getHours()).padStart(2, "0");
    let minutes = String(now.getMinutes()).padStart(2, "0");
    let seconds = String(now.getSeconds()).padStart(2, "0");

    document.getElementById("clock").textContent =
        `${hours}:${minutes}:${seconds}`;
}

function updateCountdown() {
    const now = new Date();

    // Next New Year
    let newYear = new Date(now.getFullYear() + 1, 0, 1);
    let difference = newYear - now;

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );
    let minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );
    let seconds = Math.floor((difference / 1000) % 60);

    document.getElementById("countdown").textContent =
        `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
}

function updateDisplay() {
    updateClock();
    updateCountdown();
}

updateDisplay();
setInterval(updateDisplay, 1000);
