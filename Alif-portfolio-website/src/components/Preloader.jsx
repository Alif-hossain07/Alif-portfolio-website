import React from 'react';

export default function Preloader({ loading }) {
  if (!loading) return null;

  return (
    <div className="preloader">
      <div className="preloader-inner">
        <div className="preloader-name">Alif.</div>
        <div className="preloader-bar">
          <div className="preloader-bar-fill"></div>
        </div>
      </div>
    </div>
  );
}
