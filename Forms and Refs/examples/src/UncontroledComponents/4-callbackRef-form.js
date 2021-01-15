import React, {Component} from 'react';

class CarForm extends Component {

  handleSubmit = (event) => {
    alert('Car: ' + this.form.car.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} ref={form => this.form = form}>
        <label>
          Car:
          <input type="text" name="car" />
        </label>
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default CarForm;
