const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Q&A');
mongoose.Promise = global.Promise;

const questionSchema = new mongoose.Schema({
  question: String,
  author: String,
  dateWritten: Date,
  questionId: Number,
  itemId: Number
});

const answerSchema = new mongoose.Schema({
  answer: String,
  author: String,
  helpful: Number,
  notHelpful: Number,
  reported: Number,
  expertSupport: Boolean,
  dateWritten: Date,
  questionId: Number
});

const question = mongoose.model('Question', questionSchema);
const answer = mongoose.model('Answer', answerSchema);

module.exports.question = question;
module.exports.answer = answer;