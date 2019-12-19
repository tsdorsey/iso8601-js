import { buildISOStringWithOffset } from '../src/calculator';

test('buildISOStringWithOffset', () => {
  expect(buildISOStringWithOffset(new Date('2020-01-01T12:13:14.015Z'), -90)).toBe('2020-01-01T13:43:14.015+01:30');
  expect(buildISOStringWithOffset(new Date('2020-01-01T12:13:14.015Z'), 480)).toBe('2020-01-01T04:13:14.015-08:00');
  expect(buildISOStringWithOffset(new Date('2020-01-01T12:13:14.015Z'), 420)).toBe('2020-01-01T05:13:14.015-07:00');
  expect(buildISOStringWithOffset(new Date('2020-01-01T12:13:14.015Z'), 0)).toBe('2020-01-01T12:13:14.015+00:00');
});
