import React, { Children } from 'react';
class Children extends React.Component {
  render() {
    console.log('child component >>>>', this.props.name);
    return <h1>My Namie is {this.props.name}</h1>;
  }
}

export default Child;
