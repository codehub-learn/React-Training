import React, {useState} from 'react';

function RadioForm() { 
  const [pet, setPet] = useState(''); 

  const handleChange = (event) => {
    setPet(event.target.value);
  }

  const handleSubmit = (event) => {
    alert('Pet: ' + pet);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} >
      <RadioSet
        name="pet"
        options={['tiger', 'dog', 'cat']}
        value={pet}
        onChange={handleChange}
      />
      <input type="submit" value="submit" />
    </form>
  );
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
