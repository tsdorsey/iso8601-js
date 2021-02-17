import { toISOStringZulu } from '../src/interface';

describe('toISOStringZulu', function() {
  test('Zulu in original date ', function() {
    expect(toISOStringZulu(new Date('2020-01-01T12:13:14.015Z'))).toBe('2020-01-01T12:13:14.015Z');
  });

  test('00:00 offset in original date ', function() {
    expect(toISOStringZulu(new Date('2020-01-01T12:13:14.015+00:00'))).toBe('2020-01-01T12:13:14.015Z');
  });

  test('-08:00 Offset in original date ', function() {
    expect(toISOStringZulu(new Date('2020-01-01T12:13:14.015-08:00'))).toBe('2020-01-01T20:13:14.015Z');
  });
});
