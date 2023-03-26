let delay = 5000;

function displayCountdown(seconds) {
    console.log(`Generating random number in ${seconds} seconds...`);
}

function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(`Generated random number: ${randomNumber}`);
}


let Rseconds = Math.floor(delay / 1000);
let countdownInterval = setInterval(() => {
    displayCountdown(Rseconds);
    Rseconds--;
    if (Rseconds < 0) {
        clearInterval(countdownInterval);
        generateRandomNumber();
    }
}, 1000);
