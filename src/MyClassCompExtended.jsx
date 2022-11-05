import React from 'react';

class MyClassCompExtended extends React.Component {
  constructor(props) {
    super(props);
    this.names = ['Tyson', 'Rex', 'Mario', 'OG', 'Mila', 'Pepper', 'Kyle', 'Jonathan', 'Bob', 'Jeb'];
    this.state = {
      name: '',
      date: new Date(),
    }

  }

  //life cycle methods

  componentDidMount() {
  //  this.timeId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeId);
  }
   
  tick = () => this.setState({ date: new Date()});

  shuffle = () => {
    const length = this.names.length;
    const i = Math.floor(Math.random() * length);
    this.setState({ 
      name: this.names[i],
      stateName: this.names[i],
      count: this.state.count + 1,
    });
  }

  render() {
    const { name, date } = this.state;
    return (
      <div>
        <div> Hello random person whos name happens to be <strong>{name}</strong></div>
        <h2>it is {date.toLocaleTimeString()} you know</h2>
    
        <button onClick={this.shuffle}>Shuffle Me</button>
      </div>
    )
  }
}

export default MyClassCompExtended;