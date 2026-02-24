import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function RecommendationPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { bmi = 0, gender = 'male', category = '' } = location.state || {};

  let recommendation = '';
  if (category === 'Underweight') {
    recommendation = gender === 'male'
      ? 'As a man who is underweight, focus on a nutrient-rich diet and strength training to build muscle and reach a healthier weight.'
      : 'As a woman who is underweight, focus on a nutrient-rich diet and strength training to build muscle and reach a healthier weight.';
  } else if (category === 'Normal') {
    recommendation = gender === 'male'
      ? 'Your BMI is in the normal range. Maintain your healthy lifestyle with balanced nutrition and regular exercise.'
      : 'Your BMI is in the normal range. Maintain your healthy lifestyle with balanced nutrition and regular exercise.';
  } else if (category === 'Overweight') {
    recommendation = gender === 'male'
      ? 'As a man who is overweight, consider incorporating more physical activity and a balanced diet to achieve weight loss.'
      : 'As a woman who is overweight, consider incorporating more physical activity and a balanced diet to achieve weight loss.';
  } else if (category === 'Obese') {
    recommendation = gender === 'male'
      ? 'Obesity can lead to serious health issues. Consult a healthcare provider to develop a weight-loss plan tailored for you.'
      : 'Obesity can lead to serious health issues. Consult a healthcare provider to develop a weight-loss plan tailored for you.';
  } else {
    recommendation = 'No recommendations available.';
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Health Recommendations</h2>
      <p>BMI: {bmi.toFixed(1)} ({category})</p>
      <p>{recommendation}</p>
      <div style={{ marginTop: '20px' }}>
        <button onClick={() => navigate(-1)} style={{ marginRight: '10px' }}>Back</button>
        <button onClick={() => navigate('/')}>Start Over</button>
      </div>
    </div>
  );
}

export default RecommendationPage;
