window.onload = function () {
    var seconds = 0; // Initialize seconds as a number, not a string
    var tens = 0;    // Initialize tens as a number, not a string
    var OutputSeconds = document.getElementById("seconds"); // Corrected ID name
    var OutputTens = document.getElementById("tens");
    var buttonStart = document.getElementById("btn-start");
    var buttonStop = document.getElementById("btn-stop");
    var buttonReset = document.getElementById("btn-reset");
    var Interval;

    buttonStart.addEventListener('click', () => {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10); // Interval for 10 milliseconds
    });

    buttonStop.addEventListener('click', () => {
        clearInterval(Interval);
    });

    buttonReset.addEventListener('click', () => {
        clearInterval(Interval);
        tens = 0;
        seconds = 0;
        OutputSeconds.innerHTML = "00"; // Display leading zeros for single-digit seconds
        OutputTens.innerHTML = "00";
    });

    function startTimer() {
        tens++;
        if (tens <= 9) {
            OutputTens.innerHTML = "0" + tens;
        }

        if (tens > 9) {
            OutputTens.innerHTML = tens;
        }

        if (tens > 99) {
            seconds++;
            OutputSeconds.innerHTML = seconds < 10 ? "0" + seconds : seconds;
            tens = 0;
            OutputTens.innerHTML = "00";
        }

        if (seconds > 9) {
            OutputSeconds.innerHTML = seconds;
        }
    }
}
