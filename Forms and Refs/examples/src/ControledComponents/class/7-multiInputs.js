import React, {Component} from 'react';

class CarForm extends Component {
  constructor() {
    super();
    this.state = {
      car: true,
      tiger: 5
    };
  }

  handleInput = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    alert(`Car: ${this.state.car}, Tiger: ${this.state.tiger}`);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Car:
          <input
            name="car"
            type="checkbox"
            checked={this.state.car}
            onChange={this.handleInput} />
        </label>
        <br />
        <label>
          Tiger:
          <input
            name="tiger"
            type="number"
            value={this.state.tiger}
            onChange={this.handleInput} />
        </label>
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default CarForm;
