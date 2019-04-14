import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

export default function HeroLinks() {
  return (
    <LinksWrapper>
      <Link to="/deals" className="hero__links--text">Deals!!</Link>
      <Link to="/about/" className="hero__links--text">About</Link>
      <Link to="/contact/" className="hero__links--text">Contact</Link>
    </LinksWrapper>
  );
}

const LinksWrapper = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
@media (max-width: 700px) {
      flex-direction:column;
    }
.hero__links--text {
    text-align: center;
    width: 10rem;
    border: 1px solid whitesmoke;
    color: whitesmoke;
    text-decoration: none;
    font-size: 2rem;
    margin: 0 2rem;
    padding: 1rem 1.5rem;
    transition: all 0.8s;
  @media (max-width: 700px) {
      padding: .5rem 1rem;
      margin-bottom: 2rem;
    }

  }
  .hero__links--text:hover {
      color: black;
      background: whitesmoke;
      position: relative;
      top: -3px;
    }
`;
