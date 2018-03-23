import React, { Component } from 'react';
// import logo from './logo.svg';
// import axios from 'axios'
import './App.css';
import pokemen from './pokemen';
import Pokemon from './Pokemon';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pokemon: null
    };
  }

  componentDidMount() {
    this.setState({ pokemon: pokemen });
    // fetch items list(s)
    // axios.get('https://pokeapi.co/api/v2/pokemon/')
    //   .then((data) => {
    //     this.setState({ pokemon: data.data.results });        
    //   })
    //   .catch((error) => {
    //     console.log(`Something broke! ${error}`);
    //   });
  }

  render() {
    const { pokemon } = this.state;
    
    if (!pokemon){
      return <h1>Loading...</h1>
    }

    return (
      <div className="App">
        {
          pokemon.map(pokemon => {
            return (
              <Pokemon key = {pokemon.name} mon = {pokemon} />
            )
          })
        }
      </div>
    );
  }
}

export default App;
