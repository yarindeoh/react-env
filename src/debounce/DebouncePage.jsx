import { useRef, useState } from 'react';

export const DebouncePage = () => {
  const [data, setData] = useState('');
  const [error, setError] = useState('');
  const [touched, setTouched] = useState(false);
  const timerRef = useRef();

  const debounced = (fn, delay) => {
    return (...args) => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(() => {
        fn(...args); // Executes and stores result
      }, delay);
    };
  };

  const validateData = (data) => {
    console.log('Validating data:', data);
    return data.length > 5;
  };

  const handleSend = debounced(() => {
    const dataIsValid = validateData(data);
    if (!dataIsValid) {
      setError('Data must be at least 5 characters long');
    } else {
      setError('');
    }
  }, 1000);

  const handleReset = () => {
    setData('');
    setError('');
  };

  const handleChange = (e) => {
    setData(e.target.value);
    setTouched(true);
  };

  return (
    <div>
      <h1>Debounce</h1>
      <div>
        <input onChange={handleChange} value={data} />
        {error && touched && <div>{error}</div>}
      </div>
      <button onClick={handleSend}>Send</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};
