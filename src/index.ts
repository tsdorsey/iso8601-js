import { buildISOStringWithOffset } from './calculator';

export const toISOStringWithOffset = function(date?: Date) {
  date = date || new Date();
  let offsetTotalMinutes = date.getTimezoneOffset();

  return buildISOStringWithOffset(date, offsetTotalMinutes);
};
