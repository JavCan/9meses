import React from 'react';
import { motion } from 'framer-motion';
import './Landing.css';
// Corrige la ruta a la imagen. Asegúrate que 'foto.jpg' esté en 'src/assets/images/'
import landingBgImage from '../assets/images/foto.jpg'; 

const Landing = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren", // Asegura que el contenedor anime antes que los hijos
        staggerChildren: 0.3, // Animación escalonada para los hijos
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const scrollToGallery = () => {
    const galleryElement = document.getElementById('gallery-section');
    if (galleryElement) {
      galleryElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section
      className="landing-container glass-effect"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ backgroundImage: `url(${landingBgImage})` }} // Añade el estilo aquí
    >
      <motion.h1 className="landing-title" variants={itemVariants}>
        ¡HOLA MI DANNA HERMOSA!
      </motion.h1>
      <motion.p className="landing-subtitle" variants={itemVariants}>
        Mira, te hice una galería de recuerdotes para que te acuerdes de algo bonito cada mes 🐄
      </motion.p>
      <motion.button
        className="scroll-to-gallery-button"
        onClick={scrollToGallery}
        variants={itemVariants} // You can reuse itemVariants or create specific ones
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        ▼ CLICKEAME ▼
      </motion.button>
    </motion.section>
  );
};

export default Landing;