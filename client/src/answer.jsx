/* eslint-disable consistent-return */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from 'react';
import ReactTimeAgo from 'react-time-ago';
import axios from 'axios';
import Feedback from './feedback.jsx';

class Answer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      feedback: <div />,
    };

    this.renderExpertSupport = this.renderExpertSupport.bind(this);
    this.handleHelpfulClick = this.handleHelpfulClick.bind(this);
    this.handleNotHelpfulClick = this.handleNotHelpfulClick.bind(this);
    this.handleReportClick = this.handleReportClick.bind(this);
  }

  componentDidMount() {
    const { answer } = this.props;
    this.setState({
      feedback: <Feedback
        answer={answer}
        handleHelpfulClick={this.handleHelpfulClick}
        handleNotHelpfulClick={this.handleNotHelpfulClick}
        handleReportClick={this.handleReportClick}
      />,
    });
  }

  handleHelpfulClick() {
    const { answer } = this.props;
    axios.put(`/api/q&a/answer/${answer._id}`, { helpful: answer.helpful + 1 })
      .then(() => {
        this.setState({
          feedback: <span style={{ color: 'black', fontWeight: 'bold', marginLeft: 10 }}>{`Helpful (${answer.helpful + 1})`}</span>,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  handleNotHelpfulClick() {
    const { answer } = this.props;
    axios.put(`/api/q&a/answer/${answer._id}`, { notHelpful: answer.notHelpful + 1 })
      .then(() => {
        this.setState({
          feedback: <span style={{ color: 'black', fontWeight: 'bold', marginLeft: 10 }}>{`Not helpful (${answer.notHelpful + 1})`}</span>,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  handleReportClick() {
    const { answer } = this.props;
    axios.put(`/api/q&a/answer/${answer._id}`, { reported: answer.reported + 1 })
      .then(() => {
        this.setState({
          feedback: <span style={{ color: 'black', fontWeight: 'bold', marginLeft: 10 }}>Reported</span>,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  renderExpertSupport() {
    const { answer } = this.props;
    if (answer.expertSupport) {
      return <h6 style={{ color: 'rgb(204, 0, 0)', marginTop: 0, marginBottom: 15 }}>Target Expert Support</h6>;
    }
  }

  render() {
    const { answer } = this.props;
    const { feedback } = this.state;
    return (
      <div style={{ margin: 20 }}>
        <b>A: </b>
        {answer.answer}
        <h5 style={{
          color: 'grey',
          marginTop: 4,
          marginBottom: 7,
        }}
        >
          {answer.author}
          {'— '}
          <ReactTimeAgo date={answer.dateWritten} locale="en-US" />
          {feedback}
        </h5>
        {this.renderExpertSupport()}
      </div>
    );
  }
}

export default Answer;
