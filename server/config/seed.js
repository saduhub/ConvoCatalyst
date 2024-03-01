const db = require('./connection');
const Question = require('../models/Question');
const questionList = require('../config/questionList')

const seedQuestions = async () => {
    await Question.deleteMany(); 
    const promises = questionList.map(questionData => {
        const question = new Question(questionData);
        return question.save();
    });
    await Promise.all(promises);
};

seedQuestions()
    .then(() => {
        console.log('Questions seeded successfully.');
        process.exit(0); 
    })
    .catch(error => {
        console.error('Error seeding questions:', error);
        process.exit(1); 
    });