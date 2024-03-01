const router = require('express').Router();
const Question = require('../models/Question');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

router.get('/allQuestions', async (req, res) => {
    try {
        const questions = await Question.find();
        res.json(questions);
        console.log(questions);
    } catch (error) {
        // console.log(error);
        res.status(500).send('An error occurred while fetching questions.');
    }
});

module.exports = router;