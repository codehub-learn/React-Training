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
        <CheckboxSet
          name="pet"
          options={['tiger', 'dog', 'cat']}
        />
        <input type="submit" value="submit" />
      </form>
    );
  }
}

function CheckboxSet({options, name}) {  
  return (
    <div>
      {options.map(option => {
        return (
          <label
            key={option}
            style={{textTransform: 'capitalize'}}>
            {option}
            <input
              type="checkbox"
              value={option}
              name={name}
            />
          </label>
        )
      })}
    </div>
  );
}

export default CheckboxForm;
