const { Schema, model } = require('mongoose');

const questionSchema = new Schema(
    {
        questionText: {
            type: String,
        }
    }
)

const Question = model('question', questionSchema, 'questions');

module.exports = Question;