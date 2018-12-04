import test from 'tape';
import { internationalize, formatDate } from '../dist/timeUtils.esm.js'; 
import formatterAssertions from './lib/formatterAssertions';

const daysOfWeek = [
  'Domingo',
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado'
];
const monthsOfYear = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre'
];


test('Date formatter w/ internationalization tests: ', (t) => {
  t.plan(formatterAssertions.length); 
  internationalize({
    daysOfWeek,
    monthsOfYear
  });
  formatterAssertions.forEach(assertion => { 
    let val = formatDate(assertion.date,assertion.format); 
    t.equal(val,assertion.formattedSpanish,`Expected ${val} to equal ${assertion.formattedSpanish}`);
  });
});