import React, {useState} from 'react';

function CheckboxForm() {
  const [pet, setPet] = useState([]); 

  const handleChange = (event) => {
    const value = event.target.value;
    const checked = event.target.checked;
    setPet((prevState) => {
      let newPet = [...prevState];
      if (checked) {
        newPet = newPet.concat(value);
      } else {
        const index = newPet.indexOf(value);
        if (index > -1) {
          newPet.splice(index, 1);
        }
      }

      return newPet;
    });
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
          type="checkbox"
          value="tiger"
          name="pet" 
          checked={pet.includes('tiger')}
          onChange={handleChange}
        />
      </label>
      <label>
        Dog
        <input
          type="checkbox"
          value="dog"
          name="pet"
          checked={pet.includes('dog')}
          onChange={handleChange}
        />
      </label>
      <label>
        Cat
        <input
          type="checkbox"
          value="cat"
          name="pet"
          checked={pet.includes('cat')}
          onChange={handleChange}
        />
      </label>
      <input type="submit" value="submit" />
    </form>
  );
}

export default CheckboxForm;
