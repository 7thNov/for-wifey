const questionSets = {
  easy: [
    {
      question: "Where was our first date?",
      choices: ["Fora", "Laiya", "Nuvali", "At home"],
      answer: "Nuvali"
    },
    {
      question: "What is my favorite food?",
      choices: ["Chicken Nuggets", "Peamup Bubber", "Pizza", "Cucumber"],
      answer: "Pizza"
    },
    {
      question: "What is my favourite color?",
      choices: ["Violet", "Purple", "Lavender", "Lilac"],
      answer: "Lavender"
    },
    {
      question: "When is our anniversary?",
      choices: ["June 20", "June 21", "June 22", "June 23"],
      answer: "June 21"
    }
  ],
  medium: [
    {
      question: "When was our first kiss?",
      choices: ["August 21, 2023", "August 22, 2023", "August 23, 2023", "August 24, 2023"],
      answer: "August 21, 2023"
    },
    {
      question: "Where did we go on 05/20/2023?",
      choices: ["Nuvali", "Home", "Beach", "Fora"],
      answer: "Beach"
    },
    {
      question: "Which artist was not present at the Silang Music Festival?",
      choices: ["Cash G & Lil Lusis", "Flow G", "Skusta Clee","Gigi De Lana"],
      answer: "Skusta Clee"
    }
  ],
  hard: [
    {
      question: "What did we watch first?",
      choices: ["WandaVision","Guardians of the Galaxy", "Corpse Bride", "Summer Ghost"],
      answer: "Summer Ghost"
    },
    {
      question: "What my coffee order on our first date?",
      choices: ["Mocha Latte", "Cafe Latte", "Okinawa Espresso", "Hokkaido Espresso"],
      answer: "Okinawa Espresso"
    },
    {
      question: "Who was built first?",
      choices: ["Lego Charmander", "Lego Squirtle", "Both", "(idk what to put here)"],
      answer: "Lego Charmander"
    },
    {
      question: "What is the ramen flavor you ordered for me",
      choices: ["Tonkatsu", "Shoyu ", "Spicy Miso", "Tantanmen"],
      answer: "Shoyu"
    },
    {
      question: "Which among these is the first dish we made together?",
      choices: ["Airfryer Smores", "Coffee Crumble Ice Cream", "Bacon Enoki", "Sharwarma Rice"],
      answer: "Coffee Crumble Ice Cream"
    }
  ]
};

let questions = [];
let currentQuestion = 0;
let score = 0;

// DOM Elements
const questionText = document.getElementById("question");
const choicesContainer = document.getElementById("choices");
const nextButton = document.getElementById("next-btn");
const resultBox = document.getElementById("result");
const quizBox = document.getElementById("quiz-box");
const difficultySelect = document.getElementById("difficulty-select");

function startGame(difficulty) {
  questions = questionSets[difficulty];
  currentQuestion = 0;
  score = 0;

  difficultySelect.classList.add("hidden");
  quizBox.classList.remove("hidden");

  loadQuestion();
}

function loadQuestion() {
  const q = questions[currentQuestion];
  questionText.innerText = q.question;
  choicesContainer.innerHTML = "";

  q.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.innerText = choice;
    btn.onclick = () => selectAnswer(btn, q.answer);
    choicesContainer.appendChild(btn);
  });

  nextButton.disabled = true;
  choicesContainer.classList.remove("disabled-choices");
}

function selectAnswer(button, correctAnswer) {
  const buttons = choicesContainer.querySelectorAll("button");
  buttons.forEach(btn => btn.disabled = true);

  if (button.innerText === correctAnswer) {
    button.style.backgroundColor = "#66bb6a"; // green
    score++;
  } else {
    button.style.backgroundColor = "#a70202ff"; // red
  }

  nextButton.disabled = false;
  choicesContainer.classList.add("disabled-choices");
}

nextButton.onclick = () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }

};

function showResult() {
  quizBox.classList.add("hidden");
  resultBox.classList.remove("hidden");

  const total = questions.length;
  const isHighScore = score >= total / 2;

  const message = isHighScore
    ? "Wow! I'm so lucky to have such an amazing partner!💜"
    : "🥺 That's okay! You're still my favorite person";

  resultBox.innerHTML = `
    🎉 You scored ${score} out of ${total}!<br>
    ${message}
    <br><br>
    <button onclick="location.reload()">Play Again</button>
     <button onclick="window.location.href='index.html'">📸 Go back</button>
  `;
}