import React from 'react';
import ReactTimeAgo from 'react-time-ago';



class Answer extends React.Component {
  constructor(props) {
    super(props)
    this.renderExertSupport = this.renderExertSupport.bind(this)
  }

  renderExertSupport() {
    if(this.props.answer.expertSupport){
      return <h6 style={{color: 'rgb(204, 0, 0)', marginTop: 0, marginBottom: 15}}>Target Expert Support</h6>}
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
      <span style={{textDecoration: 'underline', marginLeft: 10}}>{`Helpful (${this.props.answer.helpful})`}</span>
      <span style={{textDecoration: 'underline', marginLeft: 10}}>{`Not helpful (${this.props.answer.notHelpful})`}</span>
      <span style={{textDecoration: 'underline', marginLeft: 10}}>{`Report`}</span>
    </h5>
    {this.renderExertSupport()}
    </div>
  }
}

export default Answer;