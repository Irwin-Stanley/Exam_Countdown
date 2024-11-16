// Set Target Date
const targetDate = new Date("February 15, 2025 00:00:00").getTime();

// DOM Elements
const countdownElement = document.getElementById("countdown");
const fluidElement = document.getElementById("fluid");
const daysLeftElement = document.getElementById("days-left");

// Calculate Total Duration
const startDate = new Date().getTime();
const totalDuration = targetDate - startDate;

// Update Countdown Every Second
setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
        countdownElement.textContent = "00:00:00:00";
        daysLeftElement.textContent = "EXAM DAY!";
        fluidElement.style.transform = "translateY(100%)";
        return;
    }

    // Calculate Time Left
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Update Countdown and Days Left
    countdownElement.textContent = `${days.toString().padStart(2, '0')}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    daysLeftElement.textContent = `${days} DAYS LEFT FOR BOARD EXAM`;

    // Update Fluid Level Gradually
    const percentage = (1 - timeLeft / totalDuration) * 100;
    fluidElement.style.transform = `translateY(${percentage}%)`;
}, 1000);
