import React from 'react';
import Answer from './answer.jsx';
import axios from 'axios';
import ReactTimeAgo from 'react-time-ago';

class Question extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      answers: []
    }

    this.getAnswers = this.getAnswers.bind(this);
  }

  componentDidMount() {
    this.getAnswers();
  }

  getAnswers() {
    axios.get(`/api/answers/${this.props.question.questionId}`)
      .then((result) => {
        this.setState({
          answers: result.data
        })
      })
      .catch((err) => {
        console.error(err);
      })
  }

  render() {
    return <div style={{borderBottom: '1px solid gray', marginBottom: 15}}>
      <b>Q: {this.props.question.question}</b>
  <h5 style={{color: 'grey', marginTop: 5}}>{this.props.question.author}— {<ReactTimeAgo date={this.props.question.dateWritten} locale='en-US'/>}</h5>
      {this.state.answers.map((answer) => {
        return <Answer answer={answer}/>
      })}
      <input type='submit' value='Answer it' style={{margin: '0px 0px 15px 20px'}}/>
    </div>
  }
}


export default Question;