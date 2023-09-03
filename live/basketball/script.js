function redirectToAnotherTab(url, timer) {
  // Redirect to the specified URL in another tab.
  window.open(url, '_blank');

  // Create a countdown timer and display it on the page.
  var countdownTimer = document.getElementById('countdownTimer');
  countdownTimer.innerHTML = timer;

  // Set a timeout to redirect the user to the specified URL after the timer expires.
  setTimeout(function() {
    window.location.href = url;
  }, timer * 1000);
}
