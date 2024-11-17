// Set Target Date to February 14, 2025
const targetDate = new Date("February 14, 2025 00:00:00");

// DOM Elements
const countdownElement = document.getElementById("countdown");
const fluidElement = document.getElementById("fluid");
const daysLeftElement = document.getElementById("days-left");
const countDaysElement = document.getElementById("count-days");
const countHoursElement = document.getElementById("count-hours");
const countMinutesElement = document.getElementById("count-minutes");

// Calculate Total Duration
const startDate = new Date().getTime();
const totalDuration = targetDate.getTime() - startDate;

// Update Countdown Every Second
setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = targetDate.getTime() - now;

    if (timeLeft <= 0) {
        countDaysElement.textContent = "00";
        countHoursElement.textContent = "00";
        countMinutesElement.textContent = "00";
        daysLeftElement.textContent = "EXAM DAY!";
        fluidElement.style.transform = "translateY(100%)";
        return;
    }

    // Calculate Time Left
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

    // Update Countdown
    countDaysElement.textContent = days.toString().padStart(2, '0');
    countHoursElement.textContent = hours.toString().padStart(2, '0');
    countMinutesElement.textContent = minutes.toString().padStart(2, '0');

    // Update Days Left Message
    daysLeftElement.textContent = `${days} Days Left For Board Exam`;

    // Update Fluid Level Gradually
    const percentage = (1 - timeLeft / totalDuration) * 100;
    fluidElement.style.transform = `translateY(${percentage}%)`;
}, 1000);
