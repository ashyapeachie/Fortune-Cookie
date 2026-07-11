const fortunes = [
    "You are full of love",
    "You are rich in all areas of life",
    "You are a magnet for miracles, success, and positivity!",
    "There is always more than enough money",
    "The money you spend comes back x3!",
    "The desire has already manifested",
    "More money, more power, more abundance",
    "Your talents will be recognized and rewarded",
    "Savings Account: $10,000",
    "Trust your gut feeling",
    "Your hard work will be rewarded",
    "Healthy mind, body, and soul!",
    "You are becoming the best version of yourself!",
    "Success is inevitable!",
    "As you close a door, more will open for you with ease",
    "The love you give will return to you tenfold!"
];
// fortune array

const button = document.getElementById("fortuneButton");
const fortuneText = document.getElementById("fortuneText");
const cookie = document.querySelector(".cookie");

button.addEventListener("click", () => {
    const randomIndex = Math.floor(
        Math.random() * fortunes.length
    );

    fortuneText.style.opacity = 0;

    setTimeout(() => {
        fortuneText.textContent = fortunes[randomIndex];
        fortuneText.style.opacity = 1;
    }, 300);
    
    button.textContent = "Open Another Cookie";
    //button's txt changes after first click
    cookie.textContent = "📜";
    // change cookie emoji to scroll after first click
});
