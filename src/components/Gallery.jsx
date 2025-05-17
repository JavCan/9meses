import React from 'react';
import Card from './Card';
import { cardsData, relationshipStartDate } from '../data';
import { getUnlockDate, isCardUnlocked } from '../utils/dateUtils';
import './Gallery.css'; // Crearemos este archivo para los estilos de la galería

const Gallery = () => {
  return (
    <div className="gallery-container" id="gallery-section"> {/* Added id here */}
      <h2 className="gallery-title">Nuestros Mesesotes :]</h2>
      <div className="gallery-grid">
        {cardsData.map((card) => {
          const unlockDate = getUnlockDate(relationshipStartDate, card.monthToUnlock);
          const unlocked = isCardUnlocked(unlockDate);

          return (
            <Card
              key={card.id}
              cardData={card}
              isUnlocked={unlocked}
              // onClick={(id) => console.log(`Card ${id} clicked`)} // Opcional: para manejar clics
            />
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;