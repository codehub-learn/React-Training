import React, {Component, createRef} from 'react';

class CarForm extends Component {
  constructor() {
    super();
    this.input = createRef();
  }

  handleSubmit = (event) => {
    console.log(this.input);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Car:
          <input type="text" ref={this.input} />
        </label>
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default CarForm;
