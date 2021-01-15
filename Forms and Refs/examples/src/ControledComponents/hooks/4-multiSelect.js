import React, {useState} from 'react';

function CarForm() {
  const [value, setValue] = useState(['ferrari', 'bmw']);

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleSubmit = (event) => {
    alert('Car: ' + value);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Car:
        <select multiple={true} value={value} onChange={handleChange}>
          <option value="ferrari">Ferrari</option>
          <option value="bmw">BMW</option>
          <option value="lada">Lada</option>
        </select>
      </label>
      <input type="submit" value="submit" />
    </form>
  );
}

export default CarForm;
