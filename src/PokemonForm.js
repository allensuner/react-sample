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
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
          console.log(JSON.stringify(event, null, 2));
          console.log(JSON.stringify(event.target, null, 2));
        // this.setState({ name: event.target.name });
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
                Number:<input type="text" value={this.state.number} name="number" onChange={this.handleChange} />
                </label>
            </div>
            <div>            
                <label>
                Name:<input type="text" value={this.state.name} name="name" onChange={this.handleChange} />
                </label>
            </div> 
            <div>     
                <label>
                Type:<input type="text" value={this.state.type} name="type" onChange={this.handleChange} />
                </label>
            </div>
            <div>
                <label>
                Image:<input type="text" value={this.state.image} name="image" onChange={this.handleChange} />
                </label>
            </div>
            <input type="submit" value="Submit" />
          </form>
        );
      }
}

export default PokemonForm;
