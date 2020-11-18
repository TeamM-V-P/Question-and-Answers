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
      show: 2,
    };

    this.getItemQuestions = this.getItemQuestions.bind(this);
    this.handleShowAll = this.handleShowAll.bind(this);
  }

  componentDidMount() {
    this.getItemQuestions();
  }

  handleShowAll() {
    const { questions } = this.state;
    this.setState({
      show: questions.length,
    });
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
    const { questions, show } = this.state;
    return (
      <div style={{ fontFamily: 'Helvetica, sans-serif', backgroundColor: 'rgb(249,249,249)', padding: 30 }}>
        <About amount={questions.length} />
        {questions.map((question) => <Question question={question} />).slice(0, show)}
        <QeustionButtons showAll={this.handleShowAll} />
      </div>
    );
  }
}

export default App;
