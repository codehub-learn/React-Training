import React, {Component, createRef} from 'react';

class FileInput extends Component {
  constructor() {
    super();
    this.file = createRef();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `File: ${this.file.current.files[0].name}`
    );
  }
  // button instead of input, same thing
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Upload a file:
          <input type="file" ref={this.file} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default FileInput;
