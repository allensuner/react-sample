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
      pokemons: null,
      showForm: false,
      monToEdit: null
    };
    this.addPokemon = this.addPokemon.bind(this);
    this.toggleShowForm = this.toggleShowForm.bind(this);
  }

  componentDidMount() {
    this.setState({ pokemons: pokemen });
    // fetch items list(s)
    // axios.get('https://pokeapi.co/api/v2/pokemons/')
    //   .then((data) => {
    //     this.setState({ pokemons: data.data.results });        
    //   })
    //   .catch((error) => {
    //     console.log(`Something broke! ${error}`);
    //   });
  }

  addPokemon(newPokemon) {
    this.setState({ pokemons: [...this.state.pokemons, newPokemon] });
  }

  toggleShowForm(monToEdit) {
    this.setState((prevState, props) => { 
      return { 
        showForm: !this.state.showForm ,
        monToEdit: monToEdit
      }
    });
  }

  render() {
    const { pokemons } = this.state;
    
    if (!pokemons){
      return <h1>Loading...</h1>
    }

    return (
      <div className="App">
        <PokemonTable pokemons = {pokemons} toggleShowForm = {this.toggleShowForm} />
        {
          this.state.showForm &&
          <PokemonForm addPokemon = {this.addPokemon} monToEdit = {this.state.monToEdit} />
        }
        <button onClick={() => this.toggleShowForm()}>
          Add
        </button>
      </div>
    );
  }
}

export default App;
