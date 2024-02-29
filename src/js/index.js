"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database");
const newQuestionBtn = document.getElementById('newQuestionBtn');
if (newQuestionBtn !== null) {
    newQuestionBtn.addEventListener('click', database_1.setQuestion);
}
