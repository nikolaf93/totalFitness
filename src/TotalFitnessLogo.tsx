import React from 'react';

const TotalFitnessLogo: React.FC<{ size?: number }> = ({ size = 64 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Torso outline */}
    <path
      d="M16 8 Q32 2 48 8 Q56 32 32 60 Q8 32 16 8 Z"
      fill="#4fc3f7"
      stroke="#1976d2"
      strokeWidth="2"
    />
    {/* Chest muscles */}
    <ellipse cx="24" cy="24" rx="6" ry="4" fill="#fff" fillOpacity="0.5" />
    <ellipse cx="40" cy="24" rx="6" ry="4" fill="#fff" fillOpacity="0.5" />
    {/* Abs */}
    <ellipse cx="32" cy="36" rx="3" ry="2" fill="#fff" fillOpacity="0.5" />
    <ellipse cx="32" cy="42" rx="3" ry="2" fill="#fff" fillOpacity="0.5" />
  </svg>
);

export default TotalFitnessLogo; 