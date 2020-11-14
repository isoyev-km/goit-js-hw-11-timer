const refs = {
  seconds: document.querySelector(`span[data-value="secs"]`),
  minutes: document.querySelector(`span[data-value="minutes"]`),
  hours: document.querySelector(`span[data-value="hours"]`),
  days: document.querySelector(`span[data-value="days"]`),
  timer: document.querySelector(".timer"),
};

const timer = {
  start() {
    const targetDate = new Date("Jan 31, 2021");
    setInterval(() => {
      const currentTime = Date.now();
      const timeLeft = targetDate - currentTime;
      updateTimer(timeLeft);
    }, 1000);
  },
};
timer.start();

function updateTimer(time) {
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((time % (1000 * 60)) / 1000);

  refs.timer.textContent = `Time left: ${days} days ${hours} hours ${mins} mins ${secs} seconds`;
}
