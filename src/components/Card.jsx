import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Card.css'; // Crearemos este archivo para los estilos específicos de la tarjeta

const Card = ({ cardData, isUnlocked, onClick }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    if (isUnlocked) {
      setIsFlipped(!isFlipped);
      if (onClick) {
        onClick(cardData.id); // Puedes usar esto si necesitas manejar el clic en el padre
      }
    }
  };

  const cardVariants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 },
  };

  const lockedOverlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div
      className={`card-container ${!isUnlocked ? 'locked' : ''}`}
      onClick={handleCardClick}
      style={{ perspective: '1000px' /* Necesario para el efecto 3D del flip */ }}
    >
      <motion.div
        className="card-inner glass-effect"
        initial={false}
        animate={isFlipped && isUnlocked ? 'back' : 'front'}
        variants={cardVariants}
        transition={{ duration: 0.6 }}
      >
        {/* Cara Frontal (Imagen) */}
        <motion.div className="card-face card-front">
          <img src={cardData.imagePlaceholder} alt={`Recuerdo ${cardData.id}`} />
          {!isUnlocked && (
            <AnimatePresence>
              <motion.div
                className="locked-overlay"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={lockedOverlayVariants}
                transition={{ duration: 0.3 }}
              >
                <span className="lock-icon">🔒</span>
                <p>Bloqueado</p>
              </motion.div>
            </AnimatePresence>
          )}
        </motion.div>

        {/* Cara Trasera (Frase) */}
        <motion.div className="card-face card-back">
          <div className="phrase-content">
            <p>{cardData.phrase}</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Card;