import React from 'react';
import styled from 'styled-components';
import DealCards from './DealCard';
import productsArray from '../../deals/deals';

export default function Deals() {
  return (
    <DealsWrapper>
      {productsArray.map(item => <DealCards id={item.id} description={item.description} link={item.link} />)}
    </DealsWrapper>

  );
}

const DealsWrapper = styled.div`

  width: 75vw;
  margin: 10vh 10vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2.5rem;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }

`;
