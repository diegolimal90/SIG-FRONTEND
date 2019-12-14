import React from 'react';


function Horario() {
    return <Hora/>;
  }
  
  class Hora extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
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
          <span>{this.state.date.toLocaleTimeString()}</span>
      );
    }
  }
  

export default Horario;