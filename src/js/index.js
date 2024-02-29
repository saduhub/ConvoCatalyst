"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("../css/style.css");
const database_1 = require("./database");
// @ts-ignore
const ConvoCatalyst_jpg_1 = __importDefault(require("../images/ConvoCatalyst.jpg"));
const newQuestionBtn = document.getElementById('newQuestionBtn');
const homeImage = document.getElementById('home-image');
if (newQuestionBtn !== null) {
    newQuestionBtn.addEventListener('click', database_1.setQuestion);
}
if (homeImage !== null) {
    homeImage.src = ConvoCatalyst_jpg_1.default;
}
