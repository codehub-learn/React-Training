import React, {Component} from 'react';

class RefsForm extends Component {  
  handleSubmit = (event) => {
    const { pet } = this.form;
    console.log(pet, pet.value);
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          ref={form => this.form = form}>
          <RadioSet
            name={'pet'}
            options={['tiger', 'cat', 'dog']}
          />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

function RadioSet({name, options}) {  
  return (
    <div>
      {options.map(option => {
        return (
          <label
            key={option}
            style={{textTransform: 'capitalize'}}>
            {option}
            <input
              type="radio"
              value={option}
              name={name} />
          </label>
        )
      })}
    </div>
  );
}

export default RefsRadiosForm;
