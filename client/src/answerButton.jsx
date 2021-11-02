/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
import React from 'react';
import enhanceWithClickOutside from 'react-click-outside';
import TextBox from './textBox.jsx'

class AnswerButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      opacity: 0,
      show: false,
    };
  }

  handleClickOutside() {
    this.setState({
      opacity: 0,
      show: false,
    });
  }

  render() {
    const { opacity } = this.state;
    return (
      <div>
        <div
          className="p-tooltip"
          style={{
            margin: '0px 0px 15px 20px',
            padding: 5,
            border: '1px solid black',
            textAlign: 'center',
            width: 70,
            backgroundColor: 'white',
            borderRadius: 4,
          }}
          onClick={(e) => {
            this.setState({
              // opacity: 1,
              show: true,
            });
          }}
          onMouseEnter={(e) => {
            if (e.target.children.length >= 2) {
              e.target.style.backgroundColor = 'inherit';
            }
          }}
          onMouseLeave={(e) => {
            if (e.target.children.length >= 2) {
              e.target.style.backgroundColor = 'white';
            }
          }}
        >
          <div className="p-tooltip-content" style={{ opacity }}>
            <div style={{ margin: 10, color: 'white', width: 130 }}>sign in to answer</div>
          </div>
          <div className="p-tooltip-arrow" style={{ opacity }} />
          Answer it
        </div>
        {this.state.show ? <TextBox addAnswer={this.props.addAnswer}/> : undefined}
      </div>
    );
  }
}

export default enhanceWithClickOutside(AnswerButton);
