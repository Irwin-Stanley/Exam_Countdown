/* General Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Body Styling */
body {
    background: linear-gradient(to bottom, #001f3f, #005f73);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;
    font-family: 'Arial', sans-serif;
    color: white;
}

/* Hourglass Container */
#hourglass-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}

/* Bowl */
#bowl {
    position: relative;
    width: 300px; /* Increased width */
    height: 180px; /* Increased height */
    background: radial-gradient(circle at center, #4fa8af, #005f73);
    border-radius: 50% 50% 0 0;
    overflow: hidden;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
}

/* Fluid Inside Bowl */
#fluid {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: #00b4d8;
    transform: translateY(0%);
    transition: transform 1s linear;
}

/* Countdown Display */
#countdown {
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
    text-align: center;
    font-size: 1.5rem; /* Reduced font size */
    font-weight: bold;
    color: #ffffff;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
}

#time-values span {
    display: inline-block;
    width: 40px;
    text-align: center;
}

#time-labels {
    margin-top: 5px;
    font-size: 0.8rem;
    display: flex;
    justify-content: space-between;
}

#time-labels span {
    width: 40px;
    text-align: center;
}

/* Floor */
#floor {
    position: relative;
    width: 320px; /* Increased width */
    height: 35px; /* Increased height */
    background: #004f5f;
    border-radius: 50%;
    box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.5);
    margin-top: 10px;
}

/* Splash Animation */
.splash {
    position: absolute;
    top: -30px;
    left: 50%;
    width: 10px;
    height: 10px;
    background: #00b4d8;
    border-radius: 50%;
    animation: splash 1.5s infinite ease-in-out; /* Slower fade */
    transform: translateX(-50%);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
}

@keyframes splash {
    0% {
        opacity: 1;
        transform: translate(-50%, 0) scale(1);
    }
    100% {
        opacity: 0;
        transform: translate(-50%, 20px) scale(1.5);
    }
}

/* Message Box Below */
#message {
    margin-top: 15px;
}

#days-left-box {
    padding: 10px 20px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 15px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
    text-align: center;
    color: #b2ebf2;
    font-size: 1.5rem;
    text-transform: capitalize; /* Capitalize first letter of each word */
}
