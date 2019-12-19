export const buildISOStringWithOffset = (date: Date, offsetTotalMinutes: number) => {
  const offsetMilliseconds = offsetTotalMinutes * 60 * 1000;
  const offsetMinutes = Math.abs(offsetTotalMinutes) % 60;
  const offsetHours = Math.floor(Math.abs(offsetTotalMinutes) / 60);

  let offsetSign = '+';
  if (offsetTotalMinutes > 0) {
    offsetSign = '-';
  }

  // So we can ignore what timezone javascript is running in, shift the time by the
  // offset so we can query the UTC values.
  const shiftedMilliseconds = date.getTime() - offsetMilliseconds;
  const offsetDate = new Date(shiftedMilliseconds);

  const dateString = [
    `${offsetDate.getUTCFullYear()}`,
    '-',
    `${leftPad(offsetDate.getUTCMonth() + 1, '0', 2)}`,
    '-',
    `${leftPad(offsetDate.getUTCDate(), '0', 2)}`,
    'T',
    `${leftPad(offsetDate.getUTCHours(), '0', 2)}`,
    ':',
    `${leftPad(offsetDate.getUTCMinutes(), '0', 2)}`,
    ':',
    `${leftPad(offsetDate.getUTCSeconds(), '0', 2)}`,
    '.',
    `${leftPad(offsetDate.getUTCMilliseconds(), '0', 3)}`,
    offsetSign,
    leftPad(offsetHours, '0', 2),
    ':',
    leftPad(offsetMinutes, '0', 2),
  ].join('');

  return dateString;
};

const leftPad = (value: any, pad: string, length: number) => {
  value = `${value}`;

  while (value.length < length && pad.length > 0) {
    value = `${pad}${value}`;
  }

  return value;
};
