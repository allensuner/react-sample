import React, { Component } from 'react';
import Pokemon from './Pokemon';

class PokemonTable extends Component {
    render() {
        const { pokemon } = this.props;        
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
                        pokemon.map(pokemon => {
                            return (
                                <Pokemon key = {pokemon.name} mon = {pokemon} />
                            )
                        })
                    }
                </tbody>                
            </table>
        );
    }

}

export default PokemonTable;
