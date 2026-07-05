const clicker = document.querySelector("#clicker");
const counter = document.querySelector("#counter");

let clickCount = 0;

clicker.addEventListener("click", () => {
    clickCount++;
    counter.innerText = clickCount;
});