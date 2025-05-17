import React, { useState, useEffect } from 'react';
import { anniversaryDate, relationshipStartDate } from '../data';
import { getTimeRemaining, getProgressPercentage } from '../utils/dateUtils';
import './Timeline.css'; // Crearemos este archivo para los estilos

const Timeline = () => {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining(anniversaryDate));
  const [progress, setProgress] = useState(getProgressPercentage(relationshipStartDate, anniversaryDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(getTimeRemaining(anniversaryDate));
      setProgress(getProgressPercentage(relationshipStartDate, anniversaryDate));
    }, 1000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(timer);
  }, []);

  if (!timeRemaining) {
    return (
      <section className="timeline-container glass-effect">
        <h2 className="timeline-title">¡Feliz Aniversario!</h2>
        <p className="anniversary-message">El día especial ha llegado. ¡Espero que disfrutes de todos los recuerdos!</p>
      </section>
    );
  }

  return (
    <section className="timeline-container glass-effect">
      <h2 className="timeline-title">Tiempo hasta Nuestro Aniversario</h2>
      <div className="countdown">
        <div className="countdown-item">
          <span className="countdown-value">{timeRemaining.days}</span>
          <span className="countdown-label">Días</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-value">{timeRemaining.hours}</span>
          <span className="countdown-label">Horas</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-value">{timeRemaining.minutes}</span>
          <span className="countdown-label">Minutos</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-value">{timeRemaining.seconds}</span>
          <span className="countdown-label">Segundos</span>
        </div>
      </div>
      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{ width: `${progress}%` }}
        >
          {Math.round(progress)}%
        </div>
      </div>
      <p className="progress-label">Cada vez falta menos :)</p>
    </section>
  );
};

export default Timeline;