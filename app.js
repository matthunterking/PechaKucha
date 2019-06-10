window.addEventListener("DOMContentLoaded", () => {
  const $startButton = document.querySelector("#startButton");
  const $timerDisplay = document.querySelector("#timerDisplay");
  const $slideNumberDisplay = document.querySelector("#slideNumberDisplay");
  const $body = document.querySelector("body");
  const $audio = document.querySelector("audio");

  let slideNumber = 1;
  let isRunning = false;
  let timerInterval;

  const startClock = () => {
    let timer = 21;
    $timerDisplay.innerHTML = timer;
    timerInterval = setInterval(function() {
      timer--;
      $timerDisplay.innerHTML = timer;
      if (timer === 0) {
        clearInterval(timerInterval);
        updateSlideNumber();
      }
    }, 1000);
  };

  const reset = () => {
    $startButton.innerHTML = "Start";
    slideNumber = 1;
    $slideNumberDisplay.innerHTML = slideNumber;
    clearInterval(timerInterval);
    timer = 21;
    $timerDisplay.innerHTML = timer;
    $body.style.backgroundColor = "rgb(152, 216, 236)";
    $audio.src = "./ding.mp3";
    isRunning = false;
  };

  const updateSlideNumber = () => {
    slideNumber++;
    $slideNumberDisplay.innerHTML = slideNumber;
    $audio.play();
    if (slideNumber < 21) {
      startClock($timerDisplay, $slideNumberDisplay);
    } else {
      $body.style.backgroundColor = "red";
      $audio.src = "./gong.mp3";
      $audio.play();
    }
  };
  $startButton.addEventListener("click", e => {
    e.preventDefault();
    if (!isRunning) {
      isRunning = true;
      $startButton.innerHTML = "Stop and Reset";
      startClock();
    } else {
      reset();
    }
  });
});
