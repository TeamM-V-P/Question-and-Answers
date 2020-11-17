/* eslint-disable no-console */
/* eslint-disable import/extensions */
import React from 'react';
import axios from 'axios';
import Question from './question.jsx';
import QeustionButtons from './questionButtons.jsx';
import About from './aboutBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [],
    };

    this.getItemQuestions = this.getItemQuestions.bind(this);
  }

  componentDidMount() {
    this.getItemQuestions();
  }

  getItemQuestions() {
    axios.get(`/api/questions/${Math.floor(Math.random() * 100)}`)
      .then((result) => {
        this.setState({
          questions: result.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    const { questions } = this.state;
    return (
      <div style={{ fontFamily: 'Helvetica, sans-serif', backgroundColor: 'rgb(249,249,249)', padding: 30 }}>
        <About />
        {questions.map((question) => <Question question={question} />)}
        <QeustionButtons />
      </div>
    );
  }
}

export default App;
