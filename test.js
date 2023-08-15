const questions = [
  {
    question: '<img class="image-question" src="img/test1.jpg" alt="test1"/>',
    choices: ["A", "B", "C", "D", "E", "F"],
    correctAnswer: 2,
  },
  {
    question: '<img class="image-question" src="img/test2.jpg" alt="test2"/>',
    choices: ["A", "B", "C", "D", "E", "F"],
    correctAnswer: 4,
  },
  {
    question: '<img class="image-question" src="img/test3.jpg" alt="test3"/>',
    choices: ["A", "B", "C", "D", "E", "F"],
    correctAnswer: 0,
  },
  {
    question: '<img class="image-question" src="img/test4.jpg" alt="test4"/>',
    choices: ["A", "B", "C", "D", "E", "F"],
    correctAnswer: 3,
  },
  {
    question: '<img class="image-question" src="img/test5.jpg" alt="test5"/>',
    choices: ["A", "B", "C", "D", "E", "F"],
    correctAnswer: 1,
  },
  {
    question: '<img class="image-question" src="img/test6.jpg" alt="test6"/>',
    choices: ["A", "B", "C", "D", "E", "F"],
    correctAnswer: 2,
  },
  {
    question: '<img class="image-question" src="img/test7.jpg" alt="test7"/>',
    choices: ["A", "B", "C", "D", "E", "F"],
    correctAnswer: 1,
  },
  {
    question: '<img class="image-question" src="img/test8.jpg" alt="test8"/>',
    choices: ["A", "B", "C", "D", "E", "F"],
    correctAnswer: 4,
  },
  {
    question: '<img class="image-question" src="img/test9.jpg" alt="test9"/>',
    choices: ["A", "B", "C", "D", "E", "F"],
    correctAnswer: 0,
  },
  {
    question: '<img class="image-question" src="img/test10.jpg" alt="test10"/>',
    choices: ["A", "B", "C", "D", "E", "F"],
    correctAnswer: 4,
  },
];

const questions2 = [
  {
    question:
      '<img class="image-question" src="img/test100.jpg" alt="test100"/>',
    choices: ["A", "B", "C", "D", "E", "F"],
    correctAnswer: 5,
  },
  {
    question:
      '<img class="image-question" src="img/test101.jpg" alt="test101"/>',
    choices: ["A", "B", "C", "D", "E", "F"],
    correctAnswer: 3,
  },
  {
    question:
      '<img class="image-question" src="img/test102.jpg" alt="test102"/>',
    choices: ["A", "B", "C", "D", "E", "F"],
    correctAnswer: 5,
  },
  {
    question:
      '<img class="image-question" src="img/test103.jpg" alt="test103"/>',
    choices: ["A", "B", "C", "D", "E", "F"],
    correctAnswer: 3,
  },
  {
    question:
      '<img class="image-question" src="img/test104.jpg" alt="test104"/>',
    choices: ["A", "B", "C", "D", "E", "F"],
    correctAnswer: 1,
  },
  {
    question:
      '<img class="image-question" src="img/test105.jpg" alt="test105"/>',
    choices: ["A", "B", "C", "D", "E", "F"],
    correctAnswer: 0,
  },
  {
    question:
      '<img class="image-question" src="img/test106.jpg" alt="test106"/>',
    choices: ["A", "B", "C", "D", "E", "F"],
    correctAnswer: 2,
  },
  {
    question:
      '<img class="image-question" src="img/test107.jpg" alt="test107"/>',
    choices: ["A", "B", "C", "D", "E", "F"],
    correctAnswer: 4,
  },
  {
    question:
      '<img class="image-question" src="img/test108.jpg" alt="test108"/>',
    choices: ["A", "B", "C", "D", "E", "F"],
    correctAnswer: 5,
  },
  {
    question:
      '<img class="image-question" src="img/test109.jpg" alt="test109"/>',
    choices: ["A", "B", "C", "D", "E", "F"],
    correctAnswer: 0,
  },
];

const numberOfQuestionsToDisplay = 20;
let shuffledQuestions;
let currentQuestion = 0;
let xQuestions = 20;
let score = 108;
let intervalId;
quizInProgress = true;

let userAnswers = [];

const questionElement = document.getElementById("question");
const questionNumberElement = document.getElementById("question-number");
const choicesElement = document.getElementById("choices");
const submitButton = document.getElementById("submit");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");

const canvas = document.getElementById("certificateCanvas");
const context = canvas.getContext("2d");

function displayQuestion() {
  const question = shuffledQuestions[currentQuestion];
  questionElement.innerHTML = question.question;
  questionNumberElement.innerHTML =
    "Pytanie " + (currentQuestion + 1) + " z " + shuffledQuestions.length;

  choicesElement.innerHTML = "";

  question.choices.forEach(function (choice, index) {
    const choiceElement = document.createElement("button");
    choiceElement.textContent = choice;

    if (userAnswers[currentQuestion] === index) {
      choiceElement.classList.add("selected");
    }

    choiceElement.addEventListener("click", function () {
      checkAnswer(index);
    });
    choicesElement.appendChild(choiceElement);
  });

  if (currentQuestion === shuffledQuestions.length - 1) {
    submitButton.style.display = "block";
  } else {
    submitButton.style.display = "none";
  }
}

function checkAnswer(choiceIndex) {
  const question = shuffledQuestions[currentQuestion];

  if (userAnswers[currentQuestion] !== choiceIndex) {
    if (choiceIndex === question.correctAnswer) {
      score += 2;
    } else {
      score -= 2;
    }
  }

  userAnswers[currentQuestion] = choiceIndex;

  currentQuestion++;

  if (currentQuestion < shuffledQuestions.length) {
    displayQuestion();
  } else {
    displayResult();
  }
}

function displayResult() {
  quizInProgress = false;
  clearInterval(intervalId);

  const firstNameInput = document.getElementById("first-name");
  const lastNameInput = document.getElementById("last-name");
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;

  const timerDisplay = document.getElementById("timer");
  timerDisplay.style.display = "none";

  const container2 = document.querySelector(".container3");
  container2.style.display = "none";

  const containerp = document.querySelector(".containerp");
  containerp.style.display = "none";

  const continueButton = document.getElementById("continue-button");
  continueButton.addEventListener("click", displayResult);

  quiz.style.display = "none";
  resultElement.style.display = "block";
  score -= xQuestions - currentQuestion;
  drawCertificate(score, firstName, lastName);
}

function startTimer(duration, display) {
  let timer = duration,
    minutes,
    seconds;
  intervalId = setInterval(function () {
    minutes = Math.floor(timer / 60);
    seconds = timer % 60;

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      clearInterval(intervalId);
      score -= numberOfQuestionsToDisplay - currentQuestion;
      displayResult();
    }
  }, 1000);
}

function shuffle(array) {
  const questionsLength = questions.length;
  const questions2Length = questions2.length;

  const shuffledQuestions = [];

  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * questionsLength);
    shuffledQuestions.push(questions[randomIndex]);
  }

  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * questions2Length);
    shuffledQuestions.push(questions2[randomIndex]);
  }

  return shuffledQuestions;
}

window.addEventListener("DOMContentLoaded", function () {
  const oneHour = 60 * 60;
  const display = document.getElementById("timer");
  shuffledQuestions = shuffleQuestions();
  startTimer(oneHour, display);

  displayQuestion();
});

function shuffleQuestions() {
  const questionsLength = questions.length;
  const questions2Length = questions2.length;

  const shuffledQuestions = [];

  const randomIndices1 = getRandomIndices(questionsLength, 10);
  randomIndices1.forEach((index) => {
    shuffledQuestions.push(questions[index]);
  });

  const randomIndices2 = getRandomIndices(questions2Length, 10);
  randomIndices2.forEach((index) => {
    shuffledQuestions.push(questions2[index]);
  });

  return shuffledQuestions;
}

function getRandomIndices(arrayLength, count) {
  const indices = [];
  for (let i = 0; i < count; i++) {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * arrayLength);
    } while (indices.includes(randomIndex));
    indices.push(randomIndex);
  }
  return indices;
}

function drawCertificate(score, firstName, lastName) {
  // Wyczyść canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Wczytaj obrazek dyplomu
  const image = new Image();
  image.src = "dyplomtest.png";

  // Kiedy obrazek zostanie załadowany, narysuj go na canvasie z oryginalnym rozmiarem
  image.onload = function () {
    canvas.width = image.width;
    canvas.height = image.height;
    context.drawImage(image, 0, 0);

    // Dodaj wynik
    context.font = "bold 150px Josefin Sans";
    context.fillStyle = "#fcba02";
    context.textAlign = "center";
    context.fillText(score + " IQ", canvas.width / 2, canvas.height / 1.65);

    // Dodaj imię i nazwisko
    context.font = "bold 175px Josefin Sans";
    context.fillStyle = "#ffffff";
    context.fillText(
      firstName + " " + lastName,
      canvas.width / 2,
      canvas.height / 2.75
    );
  };
}

const continueButton = document.getElementById("continue-button");
continueButton.addEventListener("click", showResultsSection);

function showResultsSection() {
  const firstNameInput = document.getElementById("first-name");
  const lastNameInput = document.getElementById("last-name");
  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();

  if (firstName === "" || lastName === "") {
    alert("Proszę wprowadzić wszystkie dane.");
    return;
  }

  const nameInputContainer = document.getElementById("name-input-container");
  nameInputContainer.style.display = "none";

  const titleName = document.getElementById("title-name");
  titleName.style.display = "none";

  const resultSection = document.getElementById("result");
  resultSection.style.display = "block";

  const resultButton = document.getElementById("result-button");
  resultButton.style.display = "block";

  const certificateCanvas = document.getElementById("certificateCanvas");
  certificateCanvas.style.display = "none";

  drawCertificate(score, firstName, lastName);
}

const resultButton = document.getElementById("result-button");
resultButton.addEventListener("click", showCertificate);

function showCertificate() {
  window.onload = function () {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://buy.stripe.com/fZe14s6cjbz54KY8wy");
    xhr.onload = function () {
      if (xhr.status === 200) {
        {
          const certificateCanvas =
            document.getElementById("certificateCanvas");
          certificateCanvas.style.display = "block";

          const resultButton = document.getElementById("result-button");
          resultButton.style.display = "none";
        }
      } else {
        // Wyświetl komunikat o błędzie.
        alert("Wystąpił błąd podczas pobierania wyniku testu.");
      }
    };
    xhr.send();
  };
}
