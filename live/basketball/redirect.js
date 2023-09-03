function redirect(url, seconds) {
  setTimeout(() => {
    window.open(url, '_blank');
  }, seconds * 1000);
}

function showTimer(seconds) {
  const timer = document.getElementById('timer');
  timer.innerHTML = seconds;

  const interval = setInterval(() => {
    seconds--;
    timer.innerHTML = seconds;

    if (seconds === 0) {
      clearInterval(interval);
      document.getElementById('button').click();
    }
  }, 1000);
}

const url = 'https://www.example.com';
const seconds = 5;

redirect(url, seconds);
showTimer(seconds);
