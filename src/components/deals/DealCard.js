import React from 'react';
import productsArray from '../../deals/deals';


export default function DealCards() {
  return (
    <div className="card-container">
      {productsArray.map(item => (
        <div className="card" key={item.id}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsd8ejIFidbeyvFK-Ods7XbnQb8HgkaBLlxiGa-ifmp3ZDvbRw" alt="item" className="card__image" />
          <p className="card__desctiption">{item.description}</p>
          <a href={item.link}>Buy Now</a>
        </div>
      ))}
    </div>
  );
}
