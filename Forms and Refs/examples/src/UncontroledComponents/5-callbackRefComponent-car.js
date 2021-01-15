import React, {Component} from 'react';

function CustomTextInput(props) {
  return (<input ref={props.inputRef} />);
}

class Wrapper extends Component {
  constructor() {
    super();
    this.input = null;
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
          <CustomTextInput inputRef={el => this.input = el} />
        </label>
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default Wrapper;
