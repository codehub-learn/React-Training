import React, { useState } from 'react';

function CarForm() {
  const [car, setCar] = useState(true);
  const [tiger, setTiger] = useState(5);

  const handleSubmit = (event) => {
    alert(`Car: ${car}, Tiger: ${tiger}`);
    event.preventDefault();
  }

  const handleCar = event => setCar(event.target.checked);
  const handleTiger = event => setTiger(event.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Car:
        <input
          name="car"
          type="checkbox"
          checked={car}
          onChange={handleCar} />
      </label>
      <br />
      <label>
        Tiger:
        <input
          name="tiger"
          type="number"
          value={tiger}
          onChange={handleTiger} />
      </label>
      <input type="submit" value="submit" />
    </form>
  );
}

export default CarForm;
