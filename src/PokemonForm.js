import React, { Component } from 'react';

class PokemonForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            number: '',
            name: '',
            type: '',
            image: ''
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state);
        event.preventDefault();
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <div>
                <label>
                Number:<input type="text" value={this.state.number} name="number" onChange={this.handleInputChange} />
                </label>
            </div>
            <div>            
                <label>
                Name:<input type="text" value={this.state.name} name="name" onChange={this.handleInputChange} />
                </label>
            </div> 
            <div>     
                <label>
                Type:<input type="text" value={this.state.type} name="type" onChange={this.handleInputChange} />
                </label>
            </div>
            <div>
                <label>
                Image:<input type="text" value={this.state.image} name="image" onChange={this.handleInputChange} />
                </label>
            </div>
            <input type="submit" value="Submit" />
          </form>
        );
      }
}

export default PokemonForm;