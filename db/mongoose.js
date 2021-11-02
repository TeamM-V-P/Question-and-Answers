const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/Q&A', { useNewUrlParser: true, useUnifiedTopology: true })
  .catch((err) => {
    console.error(err);
  });
mongoose.Promise = global.Promise;

const questionSchema = new mongoose.Schema({
  question: String,
  author: String,
  dateWritten: Date,
  questionId: Number,
  itemId: Number,
});

const answerSchema = new mongoose.Schema({
  answer: String,
  author: String,
  helpful: Number,
  notHelpful: Number,
  reported: Number,
  expertSupport: Boolean,
  dateWritten: Date,
  questionId: Number,
  answerId: Number,
});

const question = mongoose.model('Question', questionSchema);
const answer = mongoose.model('Answer', answerSchema);

module.exports.question = question;
module.exports.answer = answer;
