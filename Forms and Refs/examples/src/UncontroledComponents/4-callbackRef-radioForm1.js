import React, {Component} from 'react';

class RefsRadiosForm extends Component {  
  handleSubmit = (event) => {
    //  extract the node list from the form
    //  it looks like an array, but lacks array methods
    const { pet } = this.form;

    // a set of radios has value property
    // checkout out the log for proof
    console.log(pet, pet.value);
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <form 
          onSubmit={this.handleSubmit} 
          ref={form => this.form = form}>
          <label>
            Tiger
            <input type="radio" value="tiger" name="pet" />
          </label>
          <label>
            Dog
            <input type="radio" value="dog" name="pet" />
          </label>
          <label>
            Cat
            <input type="radio" value="cat" name="pet" />
          </label>
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default RefsRadiosForm;
