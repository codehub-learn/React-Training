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
      <label>
        Tiger
        <input
          type="radio"
          value="tiger"
          name="pet" 
          checked={pet === 'tiger'}
          onChange={handleChange}
        />
      </label>
      <label>
        Dog
        <input
          type="radio"
          value="dog"
          name="pet"
          checked={pet === 'dog'}
          onChange={handleChange}
        />
      </label>
      <label>
        Cat
        <input
          type="radio"
          value="cat"
          name="pet"
          checked={pet === 'cat'}
          onChange={handleChange}
        />
      </label>
      <input type="submit" value="submit" />
    </form>
  );
}

export default RadioForm;
