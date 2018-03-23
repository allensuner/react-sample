import React, { Component } from 'react';
// import logo from './logo.svg';
// import axios from 'axios'
import './App.css';
import pokemen from './pokemen';
import PokemonTable from './PokemonTable';
import PokemonForm from './PokemonForm';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pokemon: null,
      showForm: false
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
        <PokemonTable pokemon = {pokemon} />
        {
          this.state.showForm &&
          <PokemonForm />
        }
        <button onClick={() => this.setState({ showForm: !this.state.showForm })}>
          Add
        </button>
      </div>
    );
  }
}

export default App;
