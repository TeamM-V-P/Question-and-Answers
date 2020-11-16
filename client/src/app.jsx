import React from 'react';
import axios from 'axios';
import Question from './question.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: []
    };

    this.getItemQuestions = this.getItemQuestions.bind(this);
  }

  componentDidMount() {
    this.getItemQuestions()
  }


  getItemQuestions() {
    axios.get('/api/questions/8')
      .then((result) => {
        this.setState({
          questions: result.data
        })
      })
      .catch((err) => {
        console.error(err);
      })


  }

  render() {
    return <div style={{fontFamily: 'Helvetica, sans-serif', backgroundColor: 'rgb(249,249,249)', padding: 10}}>
      {this.state.questions.map((question) => {
        return <Question question={question}/>
      })}
    </div>
  }
}

export default App;