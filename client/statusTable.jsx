import React from 'react';
import ReactDOM from 'react-dom';
// import logo from '../public/kizenLogo.png';

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
        <img src="https://static1.squarespace.com/static/5b078144f8370af3f2b20e0b/t/5b0e075d575d1f5bd35fdc33/1527646049706/Screen+Shot+2018-05-29+at+10.06.58+PM.png?format=750w" alt="Logo"></img>
        {/* temporary 3rd party logo, need to install imageloader later for webpack */}
        <h1>{this.state.quote}</h1>
      </div>
    );
  }
}

export default StatusTable