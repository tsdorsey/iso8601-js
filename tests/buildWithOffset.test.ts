import { buildISOStringWithOffset } from '../src/calculator';

test('buildISOStringWithOffset', () => {
  // Negative offset.
  expect(buildISOStringWithOffset(new Date('2020-01-01T12:13:14.015Z'), -90)).toBe('2020-01-01T13:43:14.015+01:30');
  // Positive offset.
  expect(buildISOStringWithOffset(new Date('2020-01-01T12:13:14.015Z'), 480)).toBe('2020-01-01T04:13:14.015-08:00');
  // No offset.
  expect(buildISOStringWithOffset(new Date('2020-01-01T12:13:14.015Z'), 0)).toBe('2020-01-01T12:13:14.015+00:00');

  // Offset in original date but no offset in output.
  expect(buildISOStringWithOffset(new Date('2020-01-01T12:13:14.015-08:00'), 0)).toBe('2020-01-01T20:13:14.015+00:00');
  // Offset in original date and differnt offset in output.
  expect(buildISOStringWithOffset(new Date('2020-01-01T12:13:14.015-08:00'), 60)).toBe('2020-01-01T19:13:14.015-01:00');
  // The same offset in and out.
  expect(buildISOStringWithOffset(new Date('2020-01-01T12:13:14.015-08:00'), 480)).toBe(
    '2020-01-01T12:13:14.015-08:00',
  );
});
