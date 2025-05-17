import dayjs from 'dayjs';
import 'dayjs/locale/es'; // Importar el idioma español
import relativeTime from 'dayjs/plugin/relativeTime'; // Para "hace x tiempo" o "en x tiempo"
import duration from 'dayjs/plugin/duration'; // Para manejar duraciones

dayjs.locale('es'); // Usar español globalmente para dayjs
dayjs.extend(relativeTime);
dayjs.extend(duration);

/**
 * Calcula la fecha de desbloqueo para una tarjeta.
 * @param {Date} startDate - La fecha de inicio de la relación.
 * @param {number} monthsToAdd - El número de meses después del inicio para desbloquear.
 * @returns {dayjs.Dayjs} - La fecha de desbloqueo como objeto dayjs.
 */
export const getUnlockDate = (startDate, monthsToAdd) => {
  return dayjs(startDate).add(monthsToAdd, 'month');
};

/**
 * Verifica si una tarjeta está desbloqueada basado en la fecha actual.
 * @param {dayjs.Dayjs} unlockDate - La fecha de desbloqueo de la tarjeta.
 * @returns {boolean} - True si está desbloqueada, false si no.
 */
export const isCardUnlocked = (unlockDate) => {
  return dayjs().isAfter(unlockDate) || dayjs().isSame(unlockDate, 'day');
};

/**
 * Calcula el tiempo restante hasta una fecha objetivo.
 * @param {Date} targetDate - La fecha del aniversario.
 * @returns {object | null} - Objeto con días, horas, minutos, segundos restantes, o null si la fecha ya pasó.
 */
export const getTimeRemaining = (targetDate) => {
  const now = dayjs();
  const anniversary = dayjs(targetDate);

  if (now.isAfter(anniversary)) {
    return null; // El aniversario ya pasó
  }

  const diff = anniversary.diff(now);
  const d = dayjs.duration(diff);

  return {
    days: Math.floor(d.asDays()), // Cambiado de d.days() para mostrar el total de días
    hours: d.hours(),
    minutes: d.minutes(),
    seconds: d.seconds(),
  };
};

/**
 * Calcula el progreso total hacia el aniversario.
 * @param {Date} startDate - Fecha de inicio de la relación.
 * @param {Date} anniversaryDate - Fecha del aniversario.
 * @returns {number} - Porcentaje de progreso (0-100).
 */
export const getProgressPercentage = (startDate, anniversaryDate) => {
  const now = dayjs();
  const start = dayjs(startDate);
  const end = dayjs(anniversaryDate);

  if (now.isAfter(end)) return 100; // Si ya pasó el aniversario, progreso completo
  if (now.isBefore(start)) return 0; // Si aún no ha comenzado el "periodo" de conteo

  const totalDuration = end.diff(start);
  const elapsedDuration = now.diff(start);

  if (totalDuration <= 0) return 0; // Evitar división por cero o negativo

  const percentage = (elapsedDuration / totalDuration) * 100;
  return Math.min(Math.max(percentage, 0), 100); // Asegurar que esté entre 0 y 100
};