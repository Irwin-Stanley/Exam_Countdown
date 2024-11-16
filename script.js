// Set Target Date
const targetDate = new Date("February 14, 2024 00:00:00").getTime();

// DOM Elements
const countdownElement = document.getElementById("countdown");
const fluidElement = document.getElementById("fluid");

// Update Countdown Every Second
setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
        countdownElement.textContent = "00:00:00:00";
        fluidElement.style.transform = "translateY(100%)";
        return;
    }

    // Calculate Time Left
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Update Countdown Display
    countdownElement.textContent = `${days.toString().padStart(2, '0')}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    // Update Fluid Level
    const totalTime = targetDate - new Date("November 16, 2023").getTime();
    const percentage = (1 - timeLeft / totalTime) * 100;
    fluidElement.style.transform = `translateY(${percentage}%)`;
}, 1000);
