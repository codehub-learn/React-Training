import React, {Component} from 'react';

class CheckboxForm extends Component {  
  constructor() {
    super();
    this.state = {pet: []};
  }

  handleChange = (event) => {
    const value = event.target.value;
    const checked = event.target.checked;
    this.setState(({pet}) => {
      let newPet = [...pet];
      if (checked) {
        newPet = newPet.concat(value);
      } else {
        const index = newPet.indexOf(value);
        if (index > -1) {
          newPet.splice(index, 1);
        }
      }

      return {pet: newPet};
    });
  }

  handleSubmit = (event) => {
    alert('Pet: ' + this.state.pet);
    event.preventDefault();
  }

  render() {
    const {pet} = this.state;
    return (
      <form onSubmit={this.handleSubmit} >
        <CheckboxSet
          name="pet"
          options={['tiger', 'dog', 'cat']}
          array={pet}
          onChange={this.handleChange}
        />
        <input type="submit" value="submit" />
      </form>
    );
  }
}

function CheckboxSet({options, name, array, onChange}) {  
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
              checked={array.includes(option)}
              onChange={onChange}
            />
          </label>
        )
      })}
    </div>
  );
}

export default CheckboxForm;
