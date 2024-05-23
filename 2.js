const allQuestions = [
    {
        question: "In che ambito era il lavoro di Stephen Hawking?",
        choices: ["Fisica Teorica e Cosmologia", "Scienze Biologiche (Primatologia)", "Tecnologia", "Informatica", "Fisica"],
        correctAnswer: "Fisica Teorica e Cosmologia"
    },
    {
        question: "In che ambito era il lavoro di Jane Goodall?",
        choices: ["Fisica Teorica e Cosmologia", "Scienze Biologiche (Primatologia)", "Tecnologia", "Informatica", "Fisica"],
        correctAnswer: "Scienze Biologiche (Primatologia)"
    },
    {
        question: "In che ambito era il lavoro di Bill Gates?",
        choices: ["Fisica Teorica e Cosmologia", "Scienze Biologiche (Primatologia)", "Tecnologia", "Informatica", "Fisica"],
        correctAnswer: "Tecnologia"
    },
    {
        question: "In che ambito era il lavoro di Tim Berners-Lee?",
        choices: ["Fisica Teorica e Cosmologia", "Scienze Biologiche (Primatologia)", "Tecnologia", "Informatica", "Fisica"],
        correctAnswer: "Informatica"
    },
    {
        question: "In che ambito era il lavoro di Richard Feynman?",
        choices: ["Fisica Teorica e Cosmologia", "Scienze Biologiche (Primatologia)", "Tecnologia", "Informatica", "Fisica"],
        correctAnswer: "Fisica"
    },
    {
        question: "Cosa ha fatto Grace Hopper?",
        choices: ["Ha sviluppato il primo compilatore per un linguaggio di programmazione.", "Ha inventato il telefono.", "Ha vinto il Premio Nobel per i suoi studi sul sistema nervoso.", "È noto per le sue opere pittoriche post-impressioniste.", "Ha lavorato per lo sviluppo del software per il programma Apollo della NASA."],
        correctAnswer: "Ha sviluppato il primo compilatore per un linguaggio di programmazione."
    },
    {
        question: "Cosa ha fatto Margaret Hamilton?",
        choices: ["Ha lavorato per lo sviluppo del software per il programma Apollo della NASA.", "Ha sviluppato il primo compilatore per un linguaggio di programmazione.", "Ha vinto il Premio Nobel per i suoi studi sul sistema nervoso.", "Ha inventato il telefono.", "È noto per le sue opere pittoriche post-impressioniste."],
        correctAnswer: "Ha lavorato per lo sviluppo del software per il programma Apollo della NASA."
    },
    {
        question: "Cosa ha fatto Santiago Ramón y Cajal?",
        choices: ["Ha vinto il Premio Nobel per i suoi studi sul sistema nervoso.", "Ha sviluppato il primo compilatore per un linguaggio di programmazione.", "Ha lavorato per lo sviluppo del software per il programma Apollo della NASA.", "Ha inventato il telefono.", "È noto per le sue opere pittoriche post-impressioniste."],
        correctAnswer: "Ha vinto il Premio Nobel per i suoi studi sul sistema nervoso."
    },
    {
        question: "Cosa ha fatto Vincent van Gogh?",
        choices: ["È noto per le sue opere pittoriche post-impressioniste.", "Ha sviluppato il primo compilatore per un linguaggio di programmazione.", "Ha vinto il Premio Nobel per i suoi studi sul sistema nervoso.", "Ha lavorato per lo sviluppo del software per il programma Apollo della NASA.", "Ha inventato il telefono."],
        correctAnswer: "È noto per le sue opere pittoriche post-impressioniste."
    },
    {
        question: "Cosa ha fatto Alexander Graham Bell?",
        choices: ["Ha inventato il telefono.", "Ha sviluppato il primo compilatore per un linguaggio di programmazione.", "Ha vinto il Premio Nobel per i suoi studi sul sistema nervoso.", "Ha lavorato per lo sviluppo del software per il programma Apollo della NASA.", "È noto per le sue opere pittoriche post-impressioniste."],
        correctAnswer: "Ha inventato il telefono."
    },
    {
        question: "Quando è nato Albert Einstein?",
        choices: ["Nel 1879", "Nel 1815", "Nel 1452", "Nel 1867", "Nel 1856"],
        correctAnswer: "Nel 1879"
    },
    {
        question: "Quando è nata Ada Lovelace?",
        choices: ["Nel 1815", "Nel 1879", "Nel 1452", "Nel 1867", "Nel 1856"],
        correctAnswer: "Nel 1815"
    },
    {
        question: "Quando è nato Leonardo da Vinci?",
        choices: ["Nel 1452", "Nel 1879", "Nel 1815", "Nel 1867", "Nel 1856"],
        correctAnswer: "Nel 1452"
    },
    {
        question: "Quando è nata Marie Curie?",
        choices: ["Nel 1867", "Nel 1879", "Nel 1815", "Nel 1452", "Nel 1856"],
        correctAnswer: "Nel 1867"
    },
    {
        question: "Quando è nato Nikola Tesla?",
        choices: ["Nel 1856", "Nel 1879", "Nel 1815", "Nel 1452", "Nel 1867"],
        correctAnswer: "Nel 1856"
    },
    {
        question: "Di quale nazionalità è Isaac Newton?",
        choices: ["Britannico", "Statunitense", "Italiano", "Francese", "Tedesco"],
        correctAnswer: "Britannico"
    },
    {
        question: "Di quale nazionalità è Steve Jobs?",
        choices: ["Britannico", "Statunitense", "Italiano", "Francese", "Tedesco"],
        correctAnswer: "Statunitense"
    },
    {
        question: "Di quale nazionalità è Alan Turing?",
        choices: ["Britannico", "Statunitense", "Italiano", "Francese", "Tedesco"],
        correctAnswer: "Britannico"
    },
    {
        question: "Di quale nazionalità è Galileo Galilei?",
        choices: ["Britannico", "Statunitense", "Italiano", "Francese", "Tedesco"],
        correctAnswer: "Italiano"
    },
    {
        question: "Di quale nazionalità è Charles Babbage?",
        choices: ["Britannico", "Statunitense", "Italiano", "Francese", "Tedesco"],
        correctAnswer: "Britannico"
    }
];

const totalQuestions = allQuestions.length; 
let remainingQuestions = totalQuestions; 

shuffle(allQuestions);

let currentQuestionIndex = 0;
let correctAnswers = 0;
let wrongAnswers = 0;


function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


function updateRemainingQuestions() {
    const questionNumberElement = document.getElementById('question-number');
    if (remainingQuestions === 1) {
        questionNumberElement.textContent = `Numero delle domande rimanenti: 1`;
    } else {
        questionNumberElement.textContent = `Numero delle domande rimanenti: ${remainingQuestions}`;
    }
}


function loadQuestion() {
    const questionElement = document.getElementById('question');
    const questionNumberElement = document.getElementById('question-number');
    const choicesElements = document.querySelectorAll('.choice');

    questionElement.textContent = allQuestions[currentQuestionIndex].question;
    updateRemainingQuestions(); 

    const choices = shuffle(allQuestions[currentQuestionIndex].choices);
    choicesElements.forEach((choice, index) => {
        choice.textContent = choices[index];
    });
}


function checkAnswer(selectedChoice) {
    const selectedAnswer = selectedChoice.textContent;
    const correctAnswer = allQuestions[currentQuestionIndex].correctAnswer;
    const feedbackElement = document.getElementById('feedback');

    if (selectedAnswer === correctAnswer) {
        feedbackElement.innerHTML = "<strong>Giusto Bravo!</strong>";
        correctAnswers++;
    } else {
        feedbackElement.innerHTML = "<strong>Mi Dispiace Hai Sbagliato</strong>";
        wrongAnswers++;
    }
    document.querySelectorAll('.choice').forEach(choice => {
        choice.disabled = true;
    });

    remainingQuestions--; 
    updateRemainingQuestions(); 

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < allQuestions.length) {
            loadQuestion();
            document.querySelectorAll('.choice').forEach(choice => {
                choice.disabled = false;
            });
            feedbackElement.textContent = "";
        } else {
            showResults();
        }
    }, 1900);
}


function showResults() {
    const questionContainer = document.getElementById('question-container');
    const resultContainer = document.getElementById('result-container');

    questionContainer.style.display = 'none';
    resultContainer.style.display = 'block';

    const correctAnswersElement = document.getElementById('correct-answers');
    const wrongAnswersElement = document.getElementById('wrong-answers');

    correctAnswersElement.textContent = `Risposte corrette: ${correctAnswers}`;
    wrongAnswersElement.textContent = `Risposte sbagliate: ${wrongAnswers}`;
}


function goToSecondPart() {
    window.location.href = "index.html";
}

loadQuestion(); 
