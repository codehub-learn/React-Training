import React, {Component} from 'react';

class CheckboxForm extends Component {  
  constructor() {
    super();
    this.state = {pet: []};
  }

  handleChange = (event) => {
    const value = event.target.value;
    const checked = event.target.checked;
    this.setState(({pet}) => {
      let newPet = [...pet];
      if (checked) {
        newPet = newPet.concat(value);
      } else {
        const index = newPet.indexOf(value);
        if (index > -1) {
          newPet.splice(index, 1);
        }
      }

      return {pet: newPet};
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
            type="checkbox"
            value="tiger"
            name="pet" 
            checked={pet.includes('tiger')}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Dog
          <input
            type="checkbox"
            value="dog"
            name="pet"
            checked={pet.includes('dog')}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Cat
          <input
            type="checkbox"
            value="cat"
            name="pet"
            checked={pet.includes('cat')}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default CheckboxForm;
