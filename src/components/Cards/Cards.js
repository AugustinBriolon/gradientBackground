import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import cards from './cards.json';

export default function Cards() {

  let card = cards.cards;

  function copyToClipboard(e) {
    let text = e.target.innerText;
    console.log(text);
    navigator.clipboard.writeText(text);
    createNotification();
  }

  // function to create a notification when the user copy the code
  function createNotification() {
    let notification = document.createElement('div');
    notification.classList.add('notification');
    notification.innerHTML = 'Copied to clipboard';
    document.body.appendChild(notification);
    setTimeout(() => {
      notification.remove();
    }, 2000);
  }


  return (
    <>
      {card.map((card) => (
        <div key={uuidv4()} className="cards" onClick={copyToClipboard}>
          <div className="bgGardient" style={{ backgroundImage: `linear-gradient(90deg, ${card.from}, ${card.to})` }}>
            {/* background-image: linear-gradient(90deg, {card.from}, {card.to}) */}
            <div className="describ">
              <hr />
              <p>background-image: linear-gradient(90deg, {card.from}, {card.to})</p>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}