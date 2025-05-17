import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Card.css'; // Crearemos este archivo para los estilos específicos de la tarjeta

// Array para mapear monthToUnlock al nombre del mes correspondiente a la relación
// Asumiendo que relationshipStartDate es '2024-08-18', monthToUnlock: 1 es Septiembre 2024, etc.
const relationshipMonths = [
  "Septiembre", "Octubre", "Noviembre", "Diciembre", // Meses restantes de 2024
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto" // Meses de 2025 hasta el aniversario
];

const Card = ({ cardData, isUnlocked, onClick }) => {
  // const [isFlipped, setIsFlipped] = useState(false); // Ya no se necesita
  const [isHovered, setIsHovered] = useState(false);

  /* Ya no se necesita la lógica de volteo
  const handleCardClick = () => {
    if (isUnlocked) {
      setIsFlipped(!isFlipped);
      if (onClick) {
        onClick(cardData.id);
      }
    }
  };
  */

  const handleMouseEnter = () => {
    if (isUnlocked) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (isUnlocked) {
      setIsHovered(false);
    }
  };

  // const cardVariants = { // Ya no se necesita
  //   front: { rotateY: 0 },
  //   back: { rotateY: 180 },
  // };

  const lockedOverlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  // Determinar el texto del mes para el hover
  const monthText = cardData.monthToUnlock > 0 && cardData.monthToUnlock <= relationshipMonths.length
    ? relationshipMonths[cardData.monthToUnlock - 1]
    : `Mes ${cardData.monthToUnlock}`;

  return (
    <div
      className={`card-container ${!isUnlocked ? 'locked' : ''}`}
      // onClick={handleCardClick} // Ya no se voltea al hacer clic
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '1000px' /* Necesario para el efecto 3D del flip, aunque ya no voltea, puede mantenerse por si se añaden otras transformaciones 3D */ }}
    >
      <motion.div
        className="card-inner glass-effect"
        initial={false}
        // animate={isFlipped && isUnlocked ? 'back' : 'front'} // Ya no se anima el volteo
        // variants={cardVariants} // Ya no se necesitan variantes de volteo
        transition={{ duration: 0.6 }} // Puede eliminarse o mantenerse si hay otras animaciones en card-inner
      >
        {/* Cara Frontal (Imagen) */}
        <motion.div className="card-face card-front">
          {/* Renderizar la imagen solo si la tarjeta está desbloqueada */}
          {isUnlocked && (
            <img 
              src={cardData.image} 
              alt={`Recuerdo ${cardData.id}`} 
              className={isHovered ? 'blurred' : ''} 
            />
          )}
          {/* Mostrar el texto del mes y la frase en hover si está desbloqueada y hovereada */}
          {isUnlocked && isHovered && ( // Eliminado !isFlipped ya que no existe
            <div className="hover-month-text-wrapper">
              <motion.div
                className="hover-month-text-content"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                <p className="hover-month">{monthText}</p>
                <p className="hover-phrase">{cardData.phrase}</p>
              </motion.div>
            </div>
          )}
          {/* Overlay de bloqueo si no está desbloqueada */}
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

        {/* Cara Trasera (Frase) - ELIMINADA */}
        {/* 
        <motion.div className="card-face card-back">
          <div className="phrase-content">
            <p>{cardData.phrase}</p>
          </div>
        </motion.div> 
        */}
      </motion.div>
    </div>
  );
};

export default Card;