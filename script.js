const fortunes = [
    "You are full of love",
    "You are rich in all areas of life",
    "You are a magnet for miracles, success, and positivity!",
    "There is always more than enough money",
    "The money you spend comes back x3!",
    "The desire has already manifested",
    "More money, more power, more abundance",
    "Your talents will be recognized and rewarded",
    "Savings Account: $10,000"
];

const button = document.getElementById("fortuneButton");
const fortuneText = document.getElementById("fortuneText");

button.addEventListener("click", () => {
    const randomIndex = Math.floor(
        Math.random() * fortunes.length
    );

    fortuneText.textContent = fortunes[randomIndex];
});