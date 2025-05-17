// Importa tus imágenes aquí
import imagenSeptiembre from './assets/images/sept.PNG';
import imagenOctubre from './assets/images/oct.jpg';
import imagenNoviembre from './assets/images/nov.jpg';
import imagenDiciembre from './assets/images/dec.JPG';
import imagenEnero from './assets/images/jan.JPG';
import imagenFebrero from './assets/images/feb.jpg';
import imagenMarzo from './assets/images/mar.jpg';
import imagenAbril from './assets/images/abr.JPG';
import imagenMayo from './assets/images/may.JPG';
// ... y así sucesivamente para junio, julio, agosto

export const relationshipStartDate = '2024-08-18'; // AAAA-MM-DD
export const anniversaryDate = '2025-08-18'; // AAAA-MM-DD - Primer aniversario

export const cardsData = [
  {
    id: 1,
    monthToUnlock: 1, // Septiembre (asumiendo que la relación empezó en septiembre)
    title: 'Recuerdo 1',
    image: imagenSeptiembre, // Usa la variable importada
    phrase: 'El comienzo de nuestra aventura juntos. ¡Qué emoción!',
  },
  {
    id: 2,
    monthToUnlock: 2, // Octubre
    title: 'Recuerdo 2',
    image: imagenOctubre, // Usa la variable importada
    phrase: 'Nuestro primer [evento especial] juntos. Inolvidable.',
  },
  {
    id: 3,
    monthToUnlock: 3, // Noviembre
    title: 'Recuerdo 3',
    image: imagenNoviembre, // Usa la variable importada
    phrase: 'Las risas y los momentos compartidos este mes fueron únicos.',
  },
  {
    id: 4,
    monthToUnlock: 4, // Diciembre
    title: 'Recuerdo 4',
    image: imagenDiciembre, // Usa la variable importada
    phrase: 'Celebrando las fiestas y creando nuevas tradiciones.',
  },
  {
    id: 5,
    monthToUnlock: 5, // Enero
    title: 'Recuerdo 5',
    image: imagenEnero, // Usa la variable importada
    phrase: 'Empezando un nuevo año a tu lado, lleno de sueños.',
  },
  {
    id: 6,
    monthToUnlock: 6, // Febrero
    title: 'Recuerdo 6',
    image: imagenFebrero, // Usa la variable importada
    phrase: 'El mes del amor, ¡y cada día te quiero más!',
  },
  {
    id: 7,
    monthToUnlock: 7, // Marzo
    title: 'Recuerdo 7',
    image: imagenMarzo, // Cambiado para usar la imagen de Marzo
    phrase: 'Aventuras de primavera y momentos soleados.',
  },
  {
    id: 8,
    monthToUnlock: 8, // Abril
    title: 'Recuerdo 8',
    image: imagenAbril, // Correcto según tu lista
    phrase: 'Descubriendo nuevos lugares y creciendo juntos.',
  },
  {
    id: 9,
    monthToUnlock: 9, // Mayo
    title: 'Recuerdo 9',
    image: imagenMayo, // Usa la variable importada
    phrase: 'Casi un año y cada recuerdo es un tesoro.',
  },
  // Tarjetas bloqueadas inicialmente
  {
    id: 10,
    monthToUnlock: 10, // Junio
    title: 'Recuerdo 10',
    image: null, // O una imagen placeholder para las bloqueadas si lo deseas, o la imagen real
    phrase: '¡Un recuerdo especial te espera aquí!',
  },
  {
    id: 11,
    monthToUnlock: 11, // Julio
    title: 'Recuerdo 11',
    image: null,
    phrase: 'Casi llegamos al año, ¡qué emoción!',
  },
  {
    id: 12,
    monthToUnlock: 12, // Agosto
    title: 'Recuerdo 12',
    image: null,
    phrase: '¡Feliz Aniversario! Un año de amor y felicidad.',
  },
  // ... puedes añadir más si es necesario, o ajustar los meses
];