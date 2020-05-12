import React, { Component } from 'react';

class Horario extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <p className="white-text texto-sigma" >{this.state.date.toLocaleTimeString(navigator.language, {
        hour: '2-digit', 
        minute:'2-digit'
      })}</p>
    );
  }
}


export default Horario;