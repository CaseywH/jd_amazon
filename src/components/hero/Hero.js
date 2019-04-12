import React from 'react';
import HeroLinks from './HeroLinks';


export default function Hero() {
  return (

    <div className="hero">
      <div className="hero__heading">
        <h1 className="hero__text--main">JD's Shoppe</h1>
        <h3 className="hero__text--sub">We have what you want</h3>
      </div>
      <HeroLinks />
    </div>


  );
}
