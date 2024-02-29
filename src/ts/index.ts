import {setQuestion} from './database';

const newQuestionBtn = document.getElementById('newQuestionBtn');

if (newQuestionBtn !== null) {
    newQuestionBtn.addEventListener('click', setQuestion);
}