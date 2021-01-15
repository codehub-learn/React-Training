import React, {Component, createRef} from 'react';

class CarForm extends Component {

  handleSubmit = (event) => {
    alert('Car: ' + this.refs.carInput.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Car:
          <input type="text" ref="carInput" />
        </label>
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default CarForm;
