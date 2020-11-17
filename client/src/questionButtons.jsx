import React from 'react';

function QuestionButtons() {
  return (
    <div style={{ boxSizing: 'border-box', display: 'flex' }}>
      <div style={{
        maxWidth: '50%',
        flexBasis: '50%',
        textAlign: 'center',
        border: 'solid',
        borderWidth: 1,
        padding: 12,
        borderRadius: 3,
        margin: 6,
      }}
      >
        See all questions
      </div>
      <div style={{
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
      >
        Ask a question
      </div>
    </div>
  );
}

export default QuestionButtons;
