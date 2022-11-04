import React from 'react';

class MyClassComp extends React.Component {
  constructor(props) {
    super(props);
    this.names = ['Tyson', 'Rex', 'Mario', 'OG', 'Mila', 'Pepper'];
    this.state = {
      name: '',
      count: 0,
      stateName: this.props.propName, // to use props in constructor it must be passed as parameter
    }
    // used to Scope the 'this' keyword.. arrow functions can be used
    // this.shuffle = this.shuffle.bind(this); 
  }


  //life cycle hooks

  popup() {
    alert('goodBuy World');
  }

  //when not using arrow function, must 'bind' 'this' in the constructor
  // shuffle() {
  //   const i = Math.floor(Math.random() * this.names.length);
  //   this.setState({ name: this.names[i]});
  // }

  shuffle = () => {
    const length = this.names.length;
    const i = Math.floor(Math.random() * length);
    this.setState({ 
      name: this.names[i],
      stateName: this.names[i],
      count: this.state.count + 1,
    });
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }


  render() {
    const { name, count, stateName} = this.state;
    const { anotherProp } = this.props;
    return (
      <div>
        <div> Hello {name} </div>

        <div> {anotherProp} </div>
        <div> {stateName} </div>
        <div> {count} </div>

        <button onClick={this.shuffle}>Shuffle Me</button>
        {/* <button onClick={this.increment}>Counter Me</button> */}
      </div>
    )
  }
}

export default MyClassComp;