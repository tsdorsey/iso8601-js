export const buildISOStringWithOffset = function(date: Date, offsetTotalMinutes: number) {
  let offsetMilliseconds = offsetTotalMinutes * 60 * 1000;
  let offsetMinutes = Math.abs(offsetTotalMinutes) % 60;
  let offsetHours = Math.floor(Math.abs(offsetTotalMinutes) / 60);

  let offsetSign = '+';
  if (offsetTotalMinutes > 0) {
    offsetSign = '-';
  }

  let offsetDate = new Date(date.getTime() - offsetMilliseconds);

  let dateString = [
    `${offsetDate.getFullYear()}`,
    '-',
    `${leftPad(offsetDate.getMonth() + 1, '0', 2)}`,
    '-',
    `${leftPad(offsetDate.getDate(), '0', 2)}`,
    'T',
    `${leftPad(offsetDate.getHours(), '0', 2)}`,
    ':',
    `${leftPad(offsetDate.getMinutes(), '0', 2)}`,
    ':',
    `${leftPad(offsetDate.getSeconds(), '0', 2)}`,
    '.',
    `${leftPad(offsetDate.getMilliseconds(), '0', 3)}`,
    offsetSign,
    leftPad(offsetHours, '0', 2),
    ':',
    leftPad(offsetMinutes, '0', 2),
  ].join('');

  return dateString;
};

function leftPad(value: any, pad: string, length: number) {
  value = `${value}`;

  while (value.length < length && pad.length > 0) {
    value = `${pad}${value}`;
  }

  return value;
}
