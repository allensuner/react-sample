import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios'
import './App.css';
import pokemen from './pokemen';

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
    const pokemon = this.state.pokemon;
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
