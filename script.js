const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const yesImage = document.getElementById("yesImage");

// YES BUTTON
yesBtn.addEventListener("click", function () {
    message.textContent = "Thank you! 💗";
    yesImage.classList.add("show");
});

// Function to move No button
function moveNoButton() {

    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}

// COMPUTER
noBtn.addEventListener("mouseover", moveNoButton);

// CELLPHONE
noBtn.addEventListener("touchstart", function (event) {
    event.preventDefault();
    moveNoButton();
});

// Also prevent the No button from being clicked
noBtn.addEventListener("click", function (event) {
    event.preventDefault();
    moveNoButton();
});