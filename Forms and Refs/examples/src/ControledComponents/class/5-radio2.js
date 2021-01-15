import React, {Component} from 'react';

class RadioForm extends Component {  
  constructor() {
    super();
    this.state = {pet: ''};
  }

  handleChange = (event) => {
    this.setState({
      pet: event.target.value
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
        <RadioSet
          name="pet"
          options={['tiger', 'dog', 'cat']}
          value={pet}
          onChange={this.handleChange}
        />
        <input type="submit" value="submit" />
      </form>
    );
  }
}

function RadioSet({options, name, value, onChange}) {  
  return (
    <div>
      {options.map(option => {
        return (
          <label
            key={option}
            style={{textTransform: 'capitalize'}}
          >
            {option}
            <input
              type="radio"
              value={option}
              name={name}
              checked={value === option}
              onChange={onChange}
            />
          </label>
        )
      })}
    </div>
  );
}

export default RadioForm;
