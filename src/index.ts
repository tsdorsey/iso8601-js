import { buildISOStringWithOffset } from './calculator';

export const toISOStringWithOffset = (date?: Date) => {
  if (date === undefined) {
    date = new Date();
  }

  const offsetTotalMinutes = date.getTimezoneOffset();
  return buildISOStringWithOffset(date, offsetTotalMinutes);
};
