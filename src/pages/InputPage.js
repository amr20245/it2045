import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function InputPage() {
  const [weight, setWeight] = useState(90);
  const [height, setHeight] = useState(50);
  const [gender, setGender] = useState('male');
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/result', { state: { weight, height, gender } });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>BMI Calculator</h2>
      <div style={{ marginBottom: '20px' }}>
        <label>Weight (lbs): {weight}</label>
        <br />
        <input
          type="range"
          min="0"
          max="300"
          value={weight}
          onChange={(e) => setWeight(parseInt(e.target.value))}
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label>Height (inches): {height}</label>
        <br />
        <input
          type="range"
          min="0"
          max="100"
          value={height}
          onChange={(e) => setHeight(parseInt(e.target.value))}
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label>Select Gender:</label>
        <br />
        <img
          src="https://cdn-icons-png.flaticon.com/512/236/236832.png"
          alt="Male"
          onClick={() => setGender('male')}
          style={{
            width: '80px',
            cursor: 'pointer',
            border: gender === 'male' ? '3px solid blue' : '1px solid gray',
            borderRadius: '5px',
            marginRight: '10px'
          }}
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/236/236839.png"
          alt="Female"
          onClick={() => setGender('female')}
          style={{
            width: '80px',
            cursor: 'pointer',
            border: gender === 'female' ? '3px solid pink' : '1px solid gray',
            borderRadius: '5px'
          }}
        />
      </div>
      <button onClick={handleSubmit}>Next</button>
    </div>
  );
}

export default InputPage;
