import { buildISOStringWithOffset } from '../src/calculator';

test('buildISOStringWithOffset', () => {
  expect(buildISOStringWithOffset(new Date(2019, 11, 17, 1, 2, 3, 4), -90)).toBe('2019-12-17T02:32:03.004+01:30');
  expect(buildISOStringWithOffset(new Date(2019, 11, 17, 1, 2, 3, 4), 480)).toBe('2019-12-16T17:02:03.004-08:00');
  expect(buildISOStringWithOffset(new Date(2019, 11, 17, 1, 2, 3, 4), 420)).toBe('2019-12-16T18:02:03.004-07:00');
  expect(buildISOStringWithOffset(new Date(2019, 11, 17, 1, 2, 3, 4), 0)).toBe('2019-12-17T01:02:03.004+00:00');
});
