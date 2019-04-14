import React from 'react';
import styled from 'styled-components';
import HeroLinks from './HeroLinks';

export default function Hero() {
  return (

    <HeroWrapper className="hero">
      <div className="hero__heading">
        <h1 className="hero__text--main">JD's shoppe</h1>
        <h3 className="hero__text--sub">We have what you want</h3>
      </div>
      <HeroLinks />
    </HeroWrapper>


  );
}

const HeroWrapper = styled.div`
  height: 80%;
  width: 60%;
  margin: 10% auto 15% auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items:center;
  color: whitesmoke;
  @media (max-width: 700px) {
    height: 100%;
    width: 95%;
    justify-content: start;
    margin-top: 8rem;
  }
  .hero__heading{
    width: 100%;
    text-align: center;
    padding-bottom: 2rem;
    @media (max-width: 700px) {
      text-align: center;
      padding-bottom: 2rem;
    }
  }
  .hero__text--main {
    margin:0;
    width: 100%;
    font-weight: 100;
    color: whitesmoke;
    font-size: 5rem;
    letter-spacing: 5px;
    text-transform: uppercase;
    @media (max-width: 700px) {
      font-size: 3rem;
    }
  }

  .hero__text--sub {
    margin:0;
    font-size: 2rem;
  }
`;
