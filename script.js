// // scraping some questions from the internet that is the sanfoundary

// // import { launch } from 'puppeteer';
// const puppeteer = require('puppeteer');

// // creating an async function that scrapes data
// async function scrape(url) {
//     const browser = await launch(); // await here waits for the browser to open
//     const page = await browser.newPage(); // here await is used to create delay until a empty web page is opened
//     await page.goto(url);

//     const [questions] = await page.$x('//*[@id="post-241135"]/div/div[2]/p[2]/text()[1]');
//     const src = await questions.getProperty('src');
//     const srcTxt = await src.jsonValue();

//     console.log(srcTxt);
// }

// scrape('https://www.sanfoundry.com/cplusplus-programming-questions-answers-oops-concept-4/');

const questions = [
    {
        question: 'What is a view',
        a: 'An brief description of the schema diagram testing added extra text',
        b: 'A relation that is not a part of the schema',
        c: 'Any relation that is a part of the schema',
        d: 'None',
        correct: 'b',
    },
    {
        question: 'What is a transaction',
        a: 'An brief description of the schema diagram',
        b: 'A relation that is not a part of the schema',
        c: 'Any relation that is a part of the schema',
        d: 'None',
        correct: 'b',
    },
    {
        question: 'What is a trigger',
        a: 'An brief description of the schema diagram',
        b: 'A relation that is not a part of the schema',
        c: 'Any relation that is a part of the schema',
        d: 'None',
        correct: 'b',
    },
    {
        question: 'What is a java',
        a: 'An brief description of the schema diagram',
        b: 'A relation that is not a part of the schema',
        c: 'Any relation that is a part of the schema',
        d: 'None',
        correct: 'b',
    },
    {
        question: 'What is a python',
        a: 'An brief description of the schema diagram',
        b: 'A relation that is not a part of the schema',
        c: 'Any relation that is a part of the schema',
        d: 'None',
        correct: 'b',
    }
]

const question = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitButton = document.getElementById('submitButton')

let currentQuestionNumber = 0;
let score = 0;
let answer = '';

loadQuiz();

function loadQuiz() {
    const currentQuestion = questions[currentQuestionNumber];
    question.innerText = currentQuestion.question;
    a_text.innerText = currentQuestion.a;
    b_text.innerText = currentQuestion.b;
    c_text.innerText = currentQuestion.c;
    d_text.innerText = currentQuestion.d;

}

submitButton.addEventListener('click', () => {

    if (currentQuestionNumber < questions.length) {
        if (document.getElementById('a').checked && questions[currentQuestionNumber].correct == 'a') {
            score++;
        } else if (document.getElementById('b').checked && questions[currentQuestionNumber].correct == 'b') {
            score++;
        } else if (document.getElementById('c').checked && questions[currentQuestionNumber].correct == 'c') {
            score++;
        } else if (document.getElementById('d').checked && questions[currentQuestionNumber].correct == 'd') {
            score++;
        }
        currentQuestionNumber++;
        if (currentQuestionNumber == questions.length) {
            alert(`Quiz Finsihed!\nYour Final Score is : ${score}`)
        }
        loadQuiz();
    }
})