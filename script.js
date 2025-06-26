let score = 0;
let highScore = 0;
let isCooldown = false; // Cooldown flag to prevent rapid clicks

const storyTextElement = document.getElementById('story-text');
const choicesElement = document.getElementById('choices');
const startButton = document.getElementById('start-button');
const restartButton = document.getElementById('restart-button');
const scoreElement = document.getElementById('score');
const highScoreElement = document.getElementById('highScore');

startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', restartGame);

function startGame() {
    startButton.style.display = 'none';
    restartButton.style.display = 'inline-block';
    score = 0;
    isCooldown = false; // Reset cooldown on new game start
    updateScoreDisplay();
    showStoryNode('start');
}

function restartGame() {
    score = 0;
    isCooldown = false; // Reset cooldown on restart
    updateScoreDisplay();
    showStoryNode('start');
}

function showStoryNode(nodeKey) {
    const node = story[nodeKey];
    storyTextElement.innerText = node.text;
    choicesElement.innerHTML = '';

    Object.keys(node.choices).forEach(choiceText => {
        const choiceButton = document.createElement('button');
        choiceButton.innerText = choiceText;
        choiceButton.addEventListener('click', () => handleChoice(node.choices[choiceText]));
        choicesElement.appendChild(choiceButton);
    });
}

function handleChoice(choice) {
    if (isCooldown) return; // Prevent spamming
    isCooldown = true;

    setTimeout(() => {
        isCooldown = false; // Re-enable choices after cooldown
    }, 800); // 800ms cooldown

    // Update score based on choice
    score += choice.score;

    // Update high score if necessary
    if (score > highScore) {
        highScore = score;
        localStorage.setItem('highScore', highScore);
    }

    // Save the current score in local storage
    localStorage.setItem('playerScore', score);

    // Continue story
    showStoryNode(choice.nextNode);

    // Display updated score and high score
    updateScoreDisplay();
}

function updateScoreDisplay() {
    scoreElement.innerText = `Score: ${score}`;
    highScoreElement.innerText = `High Score: ${highScore}`;
}

// Function to load score and high score from local storage
function loadScores() {
    const savedScore = localStorage.getItem('playerScore');
    const savedHighScore = localStorage.getItem('highScore');
    if (savedScore) {
        score = parseInt(savedScore, 10);
        scoreElement.innerText = `Score: ${score}`;
    }
    if (savedHighScore) {
        highScore = parseInt(savedHighScore, 10);
        highScoreElement.innerText = `High Score: ${highScore}`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadScores(); // Load scores when the page is loaded
});
