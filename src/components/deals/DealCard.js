import React from 'react';
import styled from 'styled-components';

export default function DealCards({ id, description, link }) {
  return (

    <CardWrapper className="card" key={id}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsd8ejIFidbeyvFK-Ods7XbnQb8HgkaBLlxiGa-ifmp3ZDvbRw" alt="item" className="card__image" />
      <p className="card__desctiption">{description}</p>
      <a href={link}>Buy Now</a>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
height: 25rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items:center;
  background: rgb(245, 245, 245);
  border: 1px solid black;
  border-radius: 1rem;
  overflow: hidden;
  opacity: .85;
  transition: all .3s;
  box-shadow: 0 19px 38px rgba(0,0,0,0.60), 0 15px 12px rgba(0,0,0,0.42);
  .card__image {
    padding: 0;
    margin: 0;
    width: 100%;
    border-bottom: 1px solid black;
    opacity: 1;
  }
  .card__description {
    font-size: 1.8rem;
    padding: 0;
    margin: 0;
  }
  & a {
    padding: 0;
    margin: 0;
    text-decoration:none;
    color: inherit;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 2rem;

  }
  &:hover{
    opacity:1;
    transform: scale(1.1);
    z-index: 10;
  }
`;
