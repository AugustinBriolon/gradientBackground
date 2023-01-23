import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import cards from './cards.json';

export default function Cards() {

  let card = cards.cards;
  let cardText = document.querySelectorAll('.card');

  function copyCardText() {
    navigator.clipboard.writeText(this.innerText);
    console.log(this.innerText);
  }

  cardText.forEach(cardText => {
    cardText.onclick = copyCardText;
  });

  return (
    <>
      {card.map((card) => (
        <div key={uuidv4()} className="cards" >
          <div className="bgGardient" style={{ backgroundImage: `linear-gradient(90deg, ${card.from}, ${card.to})` }}>
          </div>
          background-image: linear-gradient(90deg, {card.from}, {card.to})
          <div className="describ">
            <hr />
            <p>background-image: linear-gradient(90deg, {card.from}, {card.to})</p>
          </div>
        </div>
      ))}
    </>
  )
}