/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

class TextBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      answer: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(option, event) {
    this.setState({[option]: event.target.value});
  }

  handleSubmit(event) {

    this.props.addAnswer(this.state.answer, this.state.name);
    this.setState({
      name: '',
      answer: '',
    });
    event.preventDefault();
  }

  render() {
    return (
      <form className="textBox" onSubmit={this.handleSubmit}>
        <label>
          Name
          <br />
          <input className="nameInput" type="text" value={this.state.name} onChange={(event) => this.handleChange('name', event)} />
        </label>
        <label>
          Answer
          <br />
          <textarea className="answerInput" type="textarea" value={this.state.answer} onChange={(event) => this.handleChange('answer', event)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default TextBox;
