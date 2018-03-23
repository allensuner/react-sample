import React, { Component } from 'react';
import Pokemon from './Pokemon';

class PokemonTable extends Component {
    render() {
        const { pokemons } = this.props;        
        return (
            <table>
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Image</th>
                        <th>Actions</th>
                    </tr>
                </thead>    
                <tbody>            
                    {
                        pokemons.map(pokemon => {
                            return (
                                <Pokemon key = {pokemon.name} mon = {pokemon} toggleShowForm = {this.props.toggleShowForm} />
                            )
                        })
                    }
                </tbody>                
            </table>
        );
    }

}

export default PokemonTable;
