import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useCallback } from 'react';
import { anniversaryDate, relationshipStartDate } from '../data';
import { getTimeRemaining, getProgressPercentage } from '../utils/dateUtils';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import './Timeline.css';
// Importa el archivo de audio
import songFile from '../assets/music/loco.mp3'; // Ajusta la ruta según donde guardes el archivo

const Timeline = () => {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining(anniversaryDate));
  const [progress, setProgress] = useState(getProgressPercentage(relationshipStartDate, anniversaryDate));
  const [showConfetti, setShowConfetti] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [buttonPressed, setButtonPressed] = useState(false); // Nuevo estado para controlar si el botón ya fue presionado
  const audioRef = useRef(null);
  
  // Función para inicializar tsparticles
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  // Configuración del confeti
  const confettiConfig = {
    particles: {
      number: {
        value: 100,  // Cambiado de 0 a 100 para generar partículas
      },
      color: {
        value: ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF"]
      },
      shape: {
        type: ["circle", "square", "triangle"]
      },
      opacity: {
        value: { min: 0.3, max: 0.8 }
      },
      size: {
        value: { min: 1, max: 5 }
      },
      move: {
        enable: true,
        speed: 3,
        direction: "bottom",
        straight: false,
        outModes: "out"
      }
    },
    emitters: {
      direction: "top",
      rate: {
        delay: 0.1,
        quantity: 5
      },
      position: {
        x: 50,
        y: 0
      },
      size: {
        width: 100,
        height: 0
      }
    },
    fullScreen: {
      enable: false  // Añadido para asegurar que el confeti se muestre dentro del contenedor
    }
  };

  // Función para reproducir música
  const playMusic = async () => {
    if (audioRef.current && songFile) {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        // Captura el AbortError y otros errores de reproducción
        if (error.name === "AbortError") {
          console.warn("La reproducción de audio fue interrumpida:", error);
        } else {
          console.error("Error al reproducir música:", error);
        }
        setIsPlaying(false); // Asegúrate de que el estado sea consistente
      }
    }
  };

  // Función para detener música
  const stopMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Función para activar confeti y música
  const activateCelebration = async () => {
    if (!buttonPressed) {
      setButtonPressed(true);
      setShowConfetti(true);
      
      try {
        audioRef.current.currentTime = 0;
        await playMusic(); // Esperar a que la reproducción comience
      } catch (error) {
        console.error("Error al activar celebración:", error);
      }
    }
  };

  // Función para probar la celebración
  const testCelebration = () => {
    activateCelebration();
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const remaining = getTimeRemaining(anniversaryDate);
      setTimeRemaining(remaining);
      setProgress(getProgressPercentage(relationshipStartDate, anniversaryDate));
      
      // Si el contador llega a cero, activar la celebración
      if (!remaining && !showConfetti) {
        activateCelebration();
      }
    }, 1000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => {
      clearInterval(timer);
      // No detener la música aquí si se quiere que se reproduzca indefinidamente
    };
  }, [showConfetti]);

  // Renderizado cuando el contador llega a cero
  if (!timeRemaining) {
    return (
      <section className="timeline-container glass-effect">
        {showConfetti && (
          <Particles
            id="confetti"
            init={particlesInit}
            options={confettiConfig}
            className="confetti-container"
          />
        )}
        <h2 className="timeline-title">¡Feliz Aniversario Amorcito Corazón!</h2>
        <p className="anniversary-message">Ya por fin cumplimos 1 año de futuros esposos :3</p>
        
        {/* Reproductor de audio oculto */}
        <audio ref={audioRef} src={songFile || null} loop />
        
        {/* Botón para controlar la música */}
        <button 
          onClick={isPlaying ? stopMusic : playMusic} 
          className="music-button"
        >
          {isPlaying ? "Pausar Música" : "Reproducir Música"}
        </button>
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
      
      {/* Botón para probar la celebración */}
      {timeRemaining === null && (
        <motion.button 
          className="test-button"
          onClick={testCelebration}
          whileHover={{ scale: buttonPressed ? 1 : 1.05 }}
          whileTap={{ scale: buttonPressed ? 1 : 0.95 }}
          disabled={buttonPressed} // Deshabilitar el botón después de presionarlo
          style={{ opacity: buttonPressed ? 0.5 : 1, cursor: buttonPressed ? 'default' : 'pointer' }} // Cambiar estilo visual
        >
          {buttonPressed ? "Celebración Activada" : "Probar Celebración"}
        </motion.button>
      )}
      
      {/* Reproductor de audio oculto */}
      <audio ref={audioRef} src={songFile || null} loop />
      
      {/* Mostrar confeti si está activado */}
      {showConfetti && (
        <Particles
          id="confetti"
          init={particlesInit}
          options={confettiConfig}
          className="confetti-container"
        />
      )}
    </section>
  );
};

export default Timeline;