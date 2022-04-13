(function(){
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
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

  // Kick things off
  buildQuiz();

  // Event listeners
  submitButton.addEventListener('click', showResults);
})();
