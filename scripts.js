//countdown timer

let secondsRemaining = 16;

function increment() {
        secondsRemaining--
        // document.getElementById("countdown").innerHTML = secondsRemaining;
        console.log(secondsRemaining);
        if (secondsRemaining == -1) {
            console.log("TIME'S UP!");
            return;
        }
}

setInterval(increment, 1000)



// touching card starts timer

// at begin of timer display 15
// after 1s display 14
// after 2nd 1s display 13
// after 3rd 1s display 12
// after 4th 1s display 11
// after 5th 1s display 10
// after 6th 1s display 9
// after 7th 1s display 8
// after 8th 1s display 7
// after 9th 1s display 6
// after 10th 1s display 5
// after 11th 1s display 4
// after 12th 1s display 3
// after 13th 1s display 2
// after 14th 1s display 1
// after 15th 1s display 0
// after 15th 1s display "TIME'S UP!"

// i=15 and is >= 0, run loop and decrease by 1

// let secondsRemaining = 15;

// function timeLoop() {
//     if (secondsRemaining >= 0) {
//         document.getElementById("timer").innerHTML = secondsRemaining;
//         secondsRemaining--
//     }else if (secondsRemaining = -1) {
//         document.getElementById("timer").innerHTML = "TIME'S UP!"
//         return;
//     }
// }

// // setInterval

// timeLoop();

// for (let i = 15; i >= 0; i--) {
    
// }

// if i= -1 then display "TIME'S UP!"

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

// const startingMinutes = .25;

// let time = startingMinutes * 60;

// const countdownTimer = document.getElementById("countdown");

// setInterval(updateCountdown, 1000);

// function updateCountdown() {
//     const minutes = Math.floor(time / 60);
//     let seconds = time % 60;

//     countdownTimer.innerHTML = `$(seconds)`;
//     time--;
// }

// const endTimer = {
//     if (time === 0) {
//         clearInterval(updateCountdown)
//         console.log("Time's Up!");
//     }
// }

//cardflip

