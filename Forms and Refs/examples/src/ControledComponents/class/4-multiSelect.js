import React, {Component} from 'react';

class CarForm extends Component {
  constructor() {
    super();
    this.state = {value: ['ferrari', 'bmw']};
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    alert('Car: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Car:
          <select multiple={true} value={this.state.value} onChange={this.handleChange}>
            <option value="ferrari">Ferrari</option>
            <option value="bmw">BMW</option>
            <option value="lada">Lada</option>
          </select>
        </label>
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default CarForm;
