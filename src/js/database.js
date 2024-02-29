"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setQuestion = void 0;
const setQuestion = () => {
    const randomNumber = Math.floor(Math.random() * 5);
    const questions = [
        { id: 1, text: "Is free will real or just an illusion?" },
        { id: 2, text: "Would you rather know the universe's secrets or know every language?" },
        { id: 3, text: "Does technology advance humanity or hinder it?" },
        { id: 4, text: "Is a life that focuses on avoiding pain a good and worthwhile life?" },
        { id: 5, text: "If you could live forever, would you want to?" },
    ];
    const questionCard = document.getElementById('question-card');
    if (questionCard !== null) {
        questionCard.textContent = questions[randomNumber].text;
    }
};
exports.setQuestion = setQuestion;
