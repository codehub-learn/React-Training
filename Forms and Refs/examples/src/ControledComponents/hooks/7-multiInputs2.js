import React, { useState } from 'react';

function CarForm() {
  const [car, setCar] = useState(true);
  const [tiger, setTiger] = useState(5);

  const handleSubmit = (event) => {
    alert(`Car: ${car}, Tiger: ${tiger}`);
    event.preventDefault();
  }

  const handleInput = (event, setState) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setState(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Car:
        <input
          name="car"
          type="checkbox"
          checked={car}
          onChange={(e) => handleInput(e, setCar)} />
      </label>
      <br />
      <label>
        Tiger:
        <input
          name="tiger"
          type="number"
          value={tiger}
          onChange={(e) => handleInput(e, setTiger)} />
      </label>
      <input type="submit" value="submit" />
    </form>
  );
}

export default CarForm;
