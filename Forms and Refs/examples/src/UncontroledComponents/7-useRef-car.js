import React, {useRef} from 'react';  

function useRefExample() {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    alert('Car: ' + inputRef.current.value);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Car:
        <input type="text" ref={inputRef} />
      </label>
      <input type="submit" value="submit" />
    </form>
  );
}

export default useRefExample;
