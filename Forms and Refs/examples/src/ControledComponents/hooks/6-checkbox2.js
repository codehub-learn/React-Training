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
      <CheckboxSet
        name="pet"
        options={['tiger', 'dog', 'cat']}
        array={pet}
        onChange={handleChange}
      />
      <input type="submit" value="submit" />
    </form>
  );
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
