
let x = Math.floor((Math.random() * 20) + 1);
let score = 20;
let highscore = 0;
const changeMessage = (message) => {
    document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener('click', () => {
    const guess = Number(document.querySelector(".guess").value);
    if (!guess) {
        changeMessage("⛔️ No number!");
    }
    if (guess === x) {
        changeMessage("🎉 Correct Number!");
        document.querySelector('.number').textContent = guess;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (highscore < score) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    console.log(score);
    if (guess !== x) {
        if (score > 1) {
            changeMessage((guess > x) ? '📈 Too high!' : '📉 Too low!');
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('.guess').value = '';
        } else {
            changeMessage('💥 You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }
})
document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    x = Math.floor((Math.random() * 20) + 1);
    changeMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});