import React, {Component} from 'react';

class CarForm extends Component {
  constructor() {
    super();
    this.state = {value: ''};
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
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default CarForm;
