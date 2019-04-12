import React from 'react';
import { Link } from 'gatsby';

export default function HeroLinks() {
  return (
    <div className="hero__links">
      <Link to="/deals" className="hero__links--text">Deals!!</Link>
      <Link to="/about/" className="hero__links--text">About</Link>
      <Link to="/contact/" className="hero__links--text">Contact</Link>
    </div>
  );
}
