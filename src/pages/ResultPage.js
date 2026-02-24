import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { weight = 0, height = 0, gender = 'male' } = location.state || {};
  // Calculate BMI: weight (lbs), height (inches)
  const bmi = height > 0 ? (weight / (height * height)) * 703 : 0;
  let category = '';
  if (bmi < 18.5) {
    category = 'Underweight';
  } else if (bmi < 25) {
    category = 'Normal';
  } else if (bmi < 30) {
    category = 'Overweight';
  } else {
    category = 'Obese';
  }

  const handleNext = () => {
    navigate('/recommendations', { state: { bmi, gender, category } });
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>BMI Result</h2>
      <p>Your BMI: {bmi.toFixed(1)}</p>
      <p>Category: {category}</p>
      <div style={{ marginTop: '20px' }}>
        <button onClick={handleBack} style={{ marginRight: '10px' }}>Back</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default ResultPage;
