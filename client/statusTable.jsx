import React from 'react';
import ReactDOM from 'react-dom';

class StatusTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: 'the man must ache'
    };
  }

  render () {
    return (
      <h1>{this.state.quote}</h1>
    );
  }
}

export default StatusTable