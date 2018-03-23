import React, { Component } from 'react';

class Pokemon extends Component {
  render(){
    const { mon } = this.props;
    return (
      <tr>
        <td>{mon.name}</td>
        <td>{mon.type}</td>
        <td>{mon.number}</td>
        <td>todo: image: {mon.image}</td>
      </tr>
    )
  }
}

export default Pokemon;
