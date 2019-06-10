window.addEventListener("DOMContentLoaded", () => {
  const $startButton = document.querySelector("#startButton");
  const $timerDisplay = document.querySelector("#timerDisplay");
  const $slideNumberDisplay = document.querySelector("#slideNumberDisplay");

  let slideNumber = 1;

  const startClock = () => {
    let timer = 21;
    const timerInterval = setInterval(function() {
      timer--;
      $timerDisplay.innerHTML = timer;
      if (timer === 0) {
        clearInterval(timerInterval);
        updateSlideNumber();
      }
    }, 10);
  };

  const updateSlideNumber = () => {
    slideNumber++;
    $slideNumberDisplay.innerHTML = slideNumber;
    if (slideNumber < 21) startClock($timerDisplay, $slideNumberDisplay);
  };
  $startButton.addEventListener("click", e => {
    e.preventDefault();
    startClock();
  });
});
