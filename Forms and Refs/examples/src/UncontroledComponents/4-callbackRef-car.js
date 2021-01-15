import React, {Component} from 'react';

class CustomTextInput extends Component {
  constructor() {
    super();
    this.input = null;
    this.setTextInputRef = element => {
      this.input = element;
    };
  }

  handleSubmit = (event) => {
    alert('Car: ' + this.input.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Car:
          <input type="text" ref={this.setTextInputRef} />
        </label>
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default CustomTextInput;
