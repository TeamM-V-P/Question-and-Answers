/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import enhanceWithClickOutside from 'react-click-outside';

class QuestionButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 0,
    };
  }

  handleClickOutside() {
    this.setState({
      opacity: 0,
    });
    // document.getElementsByClassName('p-tooltip-arrow')
  }

  render() {
    const { opacity } = this.state;
    const { showAll } = this.props;
    return (
      <div style={{ boxSizing: 'border-box', display: 'flex' }}>
        <div
          style={{
            maxWidth: '50%',
            flexBasis: '50%',
            textAlign: 'center',
            border: 'solid',
            borderWidth: 1,
            padding: 12,
            borderRadius: 3,
            margin: 6,
            backgroundColor: 'white',
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'rgb(244, 244, 244)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'white';
          }}
          onClick={showAll}
        >
          See all questions
        </div>
        <div
          className="p-tooltip"
          style={{
            maxWidth: '50%',
            flexBasis: '50%',
            textAlign: 'center',
            border: 'solid',
            borderWidth: 1,
            padding: 12,
            borderRadius: 3,
            margin: 6,
            backgroundColor: 'rgb(204, 0, 0)',
            borderColor: 'rgb(204, 0, 0)',
            color: 'white',
          }}
          onClick={() => {
            this.setState({
              opacity: 1,
            });
          }}
          onMouseEnter={(e) => {
            if (e.target.children.length >= 2) {
              e.target.style.borderColor = 'rgb(170, 0, 0)';
              e.target.style.backgroundColor = 'rgb(170, 0, 0)';
            }
          }}
          onMouseLeave={(e) => {
            if (e.target.children.length >= 2) {
              e.target.style.borderColor = 'rgb(204, 0, 0)';
              e.target.style.backgroundColor = 'rgb(204, 0, 0)';
            }
          }}
        >
          <div className="p-tooltip-content" style={{ opacity }}>
            <div style={{ margin: 10 }}>sign in to ask a question</div>
          </div>
          <div className="p-tooltip-arrow" style={{ opacity }} />
          Ask a question
        </div>
      </div>
    );
  }
}

export default enhanceWithClickOutside(QuestionButtons);
