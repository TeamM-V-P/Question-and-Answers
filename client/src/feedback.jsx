/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

function Feedback(props) {
  const {
    handleHelpfulClick,
    handleNotHelpfulClick,
    handleReportClick,
    answer,
  } = props;
  return (
    <span>
      <span
        style={{ textDecoration: 'underline', marginLeft: 10 }}
        onClick={handleHelpfulClick}
        onMouseEnter={(e) => { e.target.style = 'color: black; margin-left: 10px; cursor: pointer;'; }}
        onMouseLeave={(e) => { e.target.style = 'text-decoration: underline; color: gray; margin-left: 10px;'; }}
      >
        {`Helpful (${answer.helpful})`}
      </span>
      <span
        style={{ textDecoration: 'underline', marginLeft: 10 }}
        onClick={handleNotHelpfulClick}
        onMouseEnter={(e) => { e.target.style = 'color: black; margin-left: 10px; cursor: pointer;'; }}
        onMouseLeave={(e) => { e.target.style = 'text-decoration: underline; color: gray; margin-left: 10px;'; }}
      >
        {`Not helpful (${answer.notHelpful})`}
      </span>
      <span
        style={{ textDecoration: 'underline', marginLeft: 10 }}
        onClick={handleReportClick}
        onMouseEnter={(e) => { e.target.style = 'color: black; margin-left: 10px; cursor: pointer;'; }}
        onMouseLeave={(e) => { e.target.style = 'text-decoration: underline; color: gray; margin-left: 10px;'; }}
      >
        Report
      </span>
    </span>
  );
}

export default Feedback;
