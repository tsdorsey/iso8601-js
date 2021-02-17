import * as Calculator from './calculator';

export const toISOStringWithOffset = (date?: Date, offset?: number) => {
  if (date === undefined) {
    date = new Date();
  }

  if (offset === undefined) {
    offset = date.getTimezoneOffset();
  }

  return Calculator.buildISOStringWithOffset(date, offset);
};

export const toISOStringZulu = (date?: Date) => {
  if (date === undefined) {
    date = new Date();
  }

  return Calculator.buildISOString(date) + 'Z';
};
