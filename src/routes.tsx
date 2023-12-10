import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GeolocationResults from './components/GeolocationResults';

const RoutesConfig: React.FC = () => {
  return (
    <Routes>
      <Route  path="/" element={<Home />} />
      <Route path="/geolocation-results" element={<GeolocationResults/>} />
    </Routes>
  );
};

export default RoutesConfig;
