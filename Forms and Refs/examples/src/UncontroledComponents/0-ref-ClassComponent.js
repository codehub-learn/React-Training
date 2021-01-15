import React, {Component, createRef} from 'react';

class CustomTextInput extends Component {
  render() {
    return (<input type="text" />);
  }
}

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
          <CustomTextInput ref={this.input} />
        </label>
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default CarForm;
