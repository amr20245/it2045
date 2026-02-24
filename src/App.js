import React from 'react';
import { Routes, Route } from 'react-router-dom';
import InputPage from './pages/InputPage';
import ResultPage from './pages/ResultPage';
import RecommendationPage from './pages/RecommendationPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<InputPage />} />
      <Route path="/result" element={<ResultPage />} />
      <Route path="/recommendations" element={<RecommendationPage />} />
    </Routes>
  );
}

export default App;
