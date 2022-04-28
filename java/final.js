(function(){
  function buildQuiz(){
    const output = [];

    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        const answers = [];

        for(letter in currentQuestion.answers){

          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );

    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    const answerContainers = quizContainer.querySelectorAll('.answers');

    let numCorrect = 0;

    myQuestions.forEach( (currentQuestion, questionNumber) => {

      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      if(userAnswer === currentQuestion.correctAnswer){
        numCorrect++;

        answerContainers[questionNumber].style.color = "#83C760";
      }
      else{
        answerContainers[questionNumber].style.color = "#CC128C";
      }
    });

    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;

    if (numCorrect == 0){
      alert("Friendship Score - 0/5: Huh, looks like you aren't even close to being my best friend. But hey, there is still a chance...right?")
    }
    if (numCorrect == 1){
      alert("Friendship Score - 1/5: Okay... you didn't completely fail, but also didn't do well. Like at all. We probably can't be friends just yet.")
    }
    if (numCorrect == 2){
      alert("Friendship Score - 2/5: We don't really have much in common. We -might- find each other at the same (insert name here) convention.")
    }
    if (numCorrect == 3){
      alert("Friendship Score - 3/5: I will call you my acquaintance. Not a stranger, yet not a friend. Just -Acquaintance-")
    }
    if (numCorrect == 4){
      alert("Friendship Score - 4/5: Not too bad! You have guaranteed a birthday party invite (if this were 5th grade).")
    }
    if (numCorrect == 5){
      alert("Friendship Score - 5/5: Where have you been all my life!? We must be best friends! *Disclaimer: These 5 questions are not at all indicative of our true friendship. You must pass the guantlet to be a true friend...*")
    }
  }

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "Q1: What is your favorite food?",
      answers: {
        a: "Sushi",
        b: "Pizza",
        c: "Hamburger",
        d: "Taco"
      },
      correctAnswer: "a"
    },
    {
      question: "Q2: What is your favorite cartoon show?",
      answers: {
        a: "Spongebob Squarepants",
        b: "Scooby Doo",
        c: "Adventure Time",
        d: "None, cartoons are lame"
      },
      correctAnswer: "c"
    },
    {
      question: "Q3: What is your favorite musician?",
      answers: {
        a: "Ed Sheeran",
        b: "Beyonce",
        c: "Drake",
        d: "Taylor Swift"
      },
      correctAnswer: "d"
    },
    {
      question: "Q4: Where would you like to travel most?",
      answers: {
        a: "France",
        b: "Mexico",
        c: "Japan",
        d: "Spain"
      },
      correctAnswer: "c"
    },
    {
      question: "Q5: If you could have a loyal animal companion of any kind, what would it be?",
      answers: {
        a: "Wolf",
        b: "Koala",
        c: "Tiger",
        d: "Lion"
      },
      correctAnswer: "a"
    }
  ]

  buildQuiz();

  submitButton.addEventListener('click', showResults);
})();
