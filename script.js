const fortunes = [
    "The best is yet to come.",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
];

const button = document.getElementById("fortuneButton");
const fortuneText = document.getElementById("fortuneText");

button.addEventListener("click", () => {
    const randomIndex = Math.floor(
        Math.random() * fortunes.length
    );

    fortuneText.textContent = fortunes[randomIndex];
});