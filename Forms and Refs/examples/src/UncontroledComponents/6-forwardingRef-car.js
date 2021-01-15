import React, {Component, createRef, forwardRef} from 'react';  
  
const Input = forwardRef((props, ref) => (
  <input type="text" ref={ref} />
));

const inputRef = createRef();

class TextInput extends Component {

  handleSubmit = (event) => {
    alert('Car: ' + inputRef.current.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Car:
          <Input ref={inputRef} />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default TextInput; 