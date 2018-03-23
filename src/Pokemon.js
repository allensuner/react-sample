import React, { Component } from 'react';

class Pokemon extends Component {
  render(){
    const { mon } = this.props;
    return (
      <tr>
        <td>{mon.number}</td>
        <td>{mon.name}</td>
        <td>{mon.type}</td>
        <td><img src = {mon.image} alt = {mon.name}/></td>
      </tr>
    )
  }
}

export default Pokemon;
