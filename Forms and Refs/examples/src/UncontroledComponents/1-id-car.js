import React, {Component} from 'react';

class CarForm extends Component {

  handleSubmit = (event) => {
    alert('Car: ' + document.getElementById('car').value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Car:
          <input type="text" id="car" />
        </label>
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default CarForm;
