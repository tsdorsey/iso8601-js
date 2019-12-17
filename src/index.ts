import { buildISOStringWithOffset } from './calculator';

export const toISOStringWithOffset = (date?: Date) => {
  date = date || new Date();
  const offsetTotalMinutes = date.getTimezoneOffset();

  return buildISOStringWithOffset(date, offsetTotalMinutes);
};
