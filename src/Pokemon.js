import React, { Component } from 'react';

// const pokemen = [
//   {
//       name: 'bulbasaur',
//       type: 'GRASS',
//       number: 1,
//       image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
//   },
//   {
//       name: 'charmander',
//       type: 'FIRE',
//       number: 4,
//       image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'
//   },
//   {
//       name: 'squirtle',
//       type: 'WATER',
//       number: 7,
//       image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'
//   }
// ];

class Pokemon extends Component {
  // constructor(props){
  //   super(props)
  // }
  render(){
    const { mon } = this.props;
    return (
      <div>
        <span>{mon.name}</span>
        <span>{mon.type}</span>
        <span>{mon.number}</span>
        <span>todo: image: {mon.image}</span>
      </div>
    )
  }
}

export default Pokemon;
