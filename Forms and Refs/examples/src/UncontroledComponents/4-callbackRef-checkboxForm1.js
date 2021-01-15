import React, {Component} from 'react';

class CheckboxForm extends Component {  
  handleSubmit = (event) => {
    const { pet } = this.form;
    const checkboxArray = Array.prototype.slice.call(pet);
    const checkedCheckboxes = checkboxArray.filter(input => input.checked);
    console.log('checked array:', checkedCheckboxes);

    const checkedCheckboxesValues = checkedCheckboxes.map(input => input.value);
    console.log('checked array values:', checkedCheckboxesValues);
    event.preventDefault();
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        ref={form => this.form = form}
      >
        <label>
          Tiger
          <input type="checkbox" value="tiger" name="pet" />
        </label>
        <label>
          Dog
          <input type="checkbox" value="dog" name="pet" />
        </label>
        <label>
          Cat
          <input type="checkbox" value="cat" name="pet" />
        </label>
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default CheckboxForm;
