let popup = document.getElementsByClassName("popup-card")[0];
let closeBtn = document.getElementById("close-btn");

function showPopup() {
  setTimeout(() => {
    popup.style.transform = "translate(0)";
  }, 1000);
}

closeBtn.addEventListener("click", (e) => {
  popup.style.transform = "translateY(-100vh)";
});

window.onload = showPopup();
