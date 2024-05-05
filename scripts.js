//countdown timer

// const seconds = 

// function startCountdown(seconds) {
//     let counter = seconds;

//     const interval = setInterval(() => {
//         counter--;

//         if (counter < 0) {
//             clearInterval(interval);
//         }
//     }, 1000);
// }

// startCountdown(15);



// document.getElementById("timer").innerHTML = seconds;

const startingMinutes = .25;

let time = startingMinutes * 60;

const countdownTimer = document.getElementById("countdown");

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    countdownTimer.innerHTML = `$(seconds)`;
    time--;
}

const endTimer = {
    if (time === 0) {
        clearInterval(updateCountdown)
        console.log("Time's Up!");
    }
}

//cardflip

