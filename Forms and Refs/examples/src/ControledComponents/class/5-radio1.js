import React, {Component} from 'react';

class RadioForm extends Component {  
  constructor() {
    super();
    this.state = {pet: ''};
  }

  handleChange = (event) => {
    this.setState({
      pet: event.target.value
    });
  }

  handleSubmit = (event) => {
    alert('Pet: ' + this.state.pet);
    event.preventDefault();
  }

  render() {
    const {pet} = this.state;
    return (
      <form onSubmit={this.handleSubmit} >
        <label>
          Tiger
          <input
            type="radio"
            value="tiger"
            name="pet" 
            checked={pet === 'tiger'}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Dog
          <input
            type="radio"
            value="dog"
            name="pet"
            checked={pet === 'dog'}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Cat
          <input
            type="radio"
            value="cat"
            name="pet"
            checked={pet === 'cat'}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default RadioForm;
