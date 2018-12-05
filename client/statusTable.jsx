import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../public/kizenLogo.png';
// need to install image loader

class StatusTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: 'the man must ache'
    };
  }

  render () {
    return (
      <div>
        <img src={logo} alt="Logo"></img>
        <h1>{this.state.quote}</h1>
      </div>
    );
  }
}

export default StatusTable