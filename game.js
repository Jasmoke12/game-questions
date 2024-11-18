const questions = {
    1: [
      { question: "What is the correct form of the verb 'to be' in the first person?", answer: "I am" },
      { question: "How do you say 'ella es' in English?", answer: "She is" },
      { question: "How do you say 'ellos son' in English?", answer: "They are" },
      { question: "How do you say 'tú eres' in English?", answer: "You are" },
      { question: "How do you say 'él es' in English?", answer: "He is" }
    ],
    2: [
      { question: "How do you say 'él no es' in English?", answer: "He isn't" },
      { question: "How do you say 'nosotros no somos' in English?", answer: "We aren't" },
      { question: "How do you say 'ella no tiene' in English?", answer: "She doesn't have" },
      { question: "How do you say 'yo no voy' in English?", answer: "I don't go" },
      { question: "How do you say 'tú no eres' in English?", answer: "You aren't" }
    ],
    3: [
      { question: "How do you form the plural of 'baby'?", answer: "babies" },
      { question: "How do you form the plural of 'city'?", answer: "cities" },
      { question: "How do you form the plural of 'party'?", answer: "parties" },
      { question: "How do you form the plural of 'puppy'?", answer: "puppies" },
      { question: "How do you form the plural of 'lady'?", answer: "ladies" },
      { question: "How do you form the plural of 'boy'?", answer: "boys" }
    ],
    4: [
      { question: "What is the comparative form of 'good'?", answer: "better" },
      { question: "What is the superlative form of 'bad'?", answer: "the worst" },
      { question: "What is the comparative form of 'big'?", answer: "bigger" },
      { question: "What is the superlative form of 'small'?", answer: "the smallest" },
      { question: "What is the comparative form of 'happy'?", answer: "happier" },
      { question: "What is the superlative form of 'easy'?", answer: "the easiest" }
    ],
    5: [
      { question: "How do you say 'yo como' in English?", answer: "I eat" },
      { question: "How do you say 'ella camina' in English?", answer: "She walks" },
      { question: "How do you say 'nosotros jugamos' in English?", answer: "We play" },
      { question: "How do you say 'ellos escriben' in English?", answer: "They write" },
      { question: "How do you say 'tú corres' in English?", answer: "You run" }
    ]
  };

const levelImages = {
    1: {
        backgroundImage: 'background1.jpeg',
        enemyImage: 'enemy1.png'
    },
    2: {
        backgroundImage: 'background2.jpeg',
        enemyImage: 'enemy2.png'
    },
    3: {
        backgroundImage: 'background3.jpeg',
        enemyImage: 'enemy3.png'
    },
    4: {
        backgroundImage: 'background4.jpeg',
        enemyImage: 'enemy4.png'
    }
};

let currentLevel = 1;
let currentQuestionIndex = 0;
let enemyHealth = 100;
let playerHealth = 100;

function startLevel(level) {
    currentLevel = level;
    currentQuestionIndex = 0;
    enemyHealth = 100;
    playerHealth = 100;
    document.getElementById('enemyHealth').style.width = '100%';
    document.getElementById('enemyStatus').innerText = "Vida: " + enemyHealth;
    document.getElementById('playerHealth').style.width = '100%';
    document.getElementById('playerStatus').innerText = "Vida: " + playerHealth;
    document.getElementById('questionSection').style.display = 'block';
    document.getElementById('backgroundImage').style.backgroundImage = `url(${levelImages[level].backgroundImage})`;
    document.getElementById('enemyImage').src = levelImages[level].enemyImage;
    displayQuestion();
}

function displayQuestion() {
    const currentQuestion = questions[currentLevel][currentQuestionIndex];
    document.getElementById('question').innerText = currentQuestion.question;
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.trim().toLowerCase();
    const correctAnswer = questions[currentLevel][currentQuestionIndex].answer.toLowerCase();
    if (userAnswer === correctAnswer) {
        enemyHealth -= 20;
        document.getElementById('enemyHealth').style.width = `${enemyHealth}%`;
        document.getElementById('enemyStatus').innerText = "Vida: " + enemyHealth;
        if (enemyHealth <= 0) {
            alert("You win! Go to the next level!");
            currentLevel++;
            startLevel(currentLevel);
        }
    } else {
        playerHealth -= 20;
        document.getElementById('playerHealth').style.width = `${playerHealth}%`;
        document.getElementById('playerStatus').innerText = "Vida: " + playerHealth;
        if (playerHealth <= 0) {
            alert("You lost! Game over!");
            // Reinicia el juego aquí
        }
    }
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions[currentLevel].length) {
        currentQuestionIndex = 0;
    }
    displayQuestion();
    document.getElementById('answer').value = '';
}

// Inicia el juego automáticamente en el nivel 1
startLevel(currentLevel);