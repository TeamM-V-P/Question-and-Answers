/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable import/extensions */
/* eslint-disable import/order */
import React from 'react';
import Answer from './answer.jsx';
import axios from 'axios';
import ReactTimeAgo from 'react-time-ago';
import AnswerButton from './answerButton.jsx';

class Question extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      answers: [],
    };

    this.getAnswers = this.getAnswers.bind(this);
    this.addAnswer = this.addAnswer.bind(this);
  }

  componentDidMount() {
    this.getAnswers();
  }

  getAnswers() {
    const { question } = this.props;
    axios.get(`/api/q&a/answers/${question.questionId}`)
      .then((result) => {
        this.setState({
          answers: result.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  addAnswer(answer, name) {
    const answers = this.state.answers;
    const QID = this.props.question.questionId;
    console.log(QID)
    const date = new Date();
    const answerObj = {
      answer: answer,
      author: name,
      helpful: 0,
      notHelpful: 0,
      reported: 0,
      expertSupport: false,
      dateWritten: date.toString(),
      questionId: QID,
      answerId: 0,
    };

    axios.post(`/api/q&a/answers/0`, answerObj)
      .then((result) => {
        console.log(result)
        this.getAnswers();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    const { question } = this.props;
    const { answers } = this.state;
    return (
      <div style={{ borderBottom: '1px solid gray', marginBottom: 15 }}>
        <b>
          {'Q: '}
          {question.question}
        </b>
        <h5 style={{ color: 'grey', marginTop: 5 }}>
          {question.author}
          {'— '}
          <ReactTimeAgo date={question.dateWritten} locale="en-US" />
        </h5>
        {answers.map((answer) => <Answer answer={answer} />)}
        <AnswerButton addAnswer={this.addAnswer} />
      </div>
    );
  }
}

export default Question;
