import React, { useState } from 'react';

function CarForm() {
  const [value, setValue] = useState('ferrari');

  const handleSubmit = (event) => {
    alert('Car: ' + value);
    event.preventDefault();
  }

  const handleChange = event => setValue(event.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Car:
        <input type="text" value={value} onChange={handleChange} />
      </label>
      <input type="submit" value="submit" />
    </form>
  );
}

export default CarForm;
