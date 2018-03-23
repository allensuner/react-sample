import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pokemon: null
    };
  }

  componentDidMount() {
    // fetch items list(s)
    axios.get('https://pokeapi.co/api/v2/pokemon/')
      .then((data) => {
        this.setState({ pokemon: data.data.results });
      })
      .catch((error) => {
        console.log(`Something broke! ${error}`);
      });
  }

  render() {
    const pokemon = this.state.pokemon;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          { 
            this.state.pokemon && 
            (
              <ul>
                {
                  pokemon.map(mon => (
                    <li key = {mon.name}>
                      {mon.name}
                    </li>
                  ))
                }
              </ul>
            )
          }
          {
            !this.state.pokemon && (<p>no poke yet</p>)
          }
        </div>
      </div>
    );
  }
}

export default App;
