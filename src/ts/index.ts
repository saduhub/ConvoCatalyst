import '../css/style.css';
import {setQuestion} from './database';
// @ts-ignore
import convoCatalyst from '../images/ConvoCatalyst.jpg';

const newQuestionBtn = document.getElementById('newQuestionBtn');
const homeImage = document.getElementById('home-image') as HTMLImageElement | null;

if (newQuestionBtn !== null) {
    newQuestionBtn.addEventListener('click', setQuestion);
}
if (homeImage !== null) {
    homeImage.src = convoCatalyst;
}