import React from 'react';
import ReactTimeAgo from 'react-time-ago';
import Feedback from './feedback.jsx';
import axios from 'axios';



class Answer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      feedback: <div/>
    }

    this.renderExertSupport = this.renderExertSupport.bind(this)
    this.handleHelpfulClick = this.handleHelpfulClick.bind(this)
    this.handleNotHelpfulClick = this.handleNotHelpfulClick.bind(this)
    this.handleReportClick = this.handleReportClick.bind(this)
  }

  componentDidMount() {
    this.setState({
      feedback: <Feedback
        answer={this.props.answer}
        handleHelpfulClick={this.handleHelpfulClick}
        handleNotHelpfulClick={this.handleNotHelpfulClick}
        handleReportClick={this.handleReportClick}
      />
    })
  }

  renderExertSupport() {
    if(this.props.answer.expertSupport){
      return <h6 style={{color: 'rgb(204, 0, 0)', marginTop: 0, marginBottom: 15}}>Target Expert Support</h6>
    }
  }


  handleHelpfulClick() {
    axios.put(`/api/answers/${this.props.answer._id}`, {helpful: this.props.answer.helpful + 1})
      .then(() => {
        this.setState({
          feedback: <span style={{color: 'black', fontWeight: 'bold', marginLeft: 10}}>{`Helpful (${this.props.answer.helpful + 1})`}</span>
        })
      })
      .catch((err) => {
        console.error(err);
      })
  }

  handleNotHelpfulClick() {
    axios.put(`/api/answers/${this.props.answer._id}`, {notHelpful: this.props.answer.notHelpful + 1})
      .then(() => {
        this.setState({
          feedback: <span style={{color: 'black', fontWeight: 'bold', marginLeft: 10}}>{`Not helpful (${this.props.answer.notHelpful + 1})`}</span>
        })
      })
      .catch((err) => {
        console.error(err);
      })
  }

  handleReportClick() {
    axios.put(`/api/answers/${this.props.answer._id}`, {reported: this.props.answer.reported + 1})
      .then(() => {
        this.setState({
          feedback: <span style={{color: 'black', fontWeight: 'bold', marginLeft: 10}}>{`Reported`}</span>
        })
      })
      .catch((err) => {
        console.error(err);
      })
  }


  render() {
    return <div style={{margin: 20}}>
    <b>A: </b>
    {this.props.answer.answer}
    <h5 style={{
        color: 'grey',
        marginTop: 4,
        marginBottom: 7
      }}>{this.props.answer.author}— {<ReactTimeAgo date={this.props.answer.dateWritten}  locale='en-US'/>}
      {this.state.feedback}
    </h5>
    {this.renderExertSupport()}
    </div>
  }
}

export default Answer;