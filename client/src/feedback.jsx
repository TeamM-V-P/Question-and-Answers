import React from 'react'

function Feedback(props) {
  return <span>
    <span style={{textDecoration: 'underline', marginLeft: 10}} onClick={props.handleHelpfulClick}>{`Helpful (${props.answer.helpful})`}</span>
    <span style={{textDecoration: 'underline', marginLeft: 10}} onClick={props.handleNotHelpfulClick}>{`Not helpful (${props.answer.notHelpful})`}</span>
    <span style={{textDecoration: 'underline', marginLeft: 10}} onClick={props.handleReportClick}>{`Report`}</span>
  </span>
}

export default Feedback;