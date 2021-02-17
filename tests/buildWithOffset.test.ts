import { buildISOStringWithOffset, buildISOString } from '../src/calculator';

describe('buildISOString', function() {
  test('Zulu in original date but no offset in output', function() {
    expect(buildISOString(new Date('2020-01-01T12:13:14.015Z'))).toBe('2020-01-01T12:13:14.015');
  });

  test('00:00 offset in original date but no offset in output', function() {
    expect(buildISOString(new Date('2020-01-01T12:13:14.015+00:00'))).toBe('2020-01-01T12:13:14.015');
  });

  test('-08:00 Offset in original date but no offset in output', function() {
    expect(buildISOString(new Date('2020-01-01T12:13:14.015-08:00'))).toBe('2020-01-01T20:13:14.015');
  });
});

describe('buildISOStringWithOffset', function() {
  test('Negative offset', function() {
    expect(buildISOStringWithOffset(new Date('2020-01-01T12:13:14.015Z'), -90)).toBe('2020-01-01T13:43:14.015+01:30');
  });

  test('Positive offset', function() {
    expect(buildISOStringWithOffset(new Date('2020-01-01T12:13:14.015Z'), 480)).toBe('2020-01-01T04:13:14.015-08:00');
  });

  test('No offset', function() {
    expect(buildISOStringWithOffset(new Date('2020-01-01T12:13:14.015Z'), 0)).toBe('2020-01-01T12:13:14.015+00:00');
  });

  test('Offset in original date but no offset in output', function() {
    expect(buildISOStringWithOffset(new Date('2020-01-01T12:13:14.015-08:00'), 0)).toBe(
      '2020-01-01T20:13:14.015+00:00',
    );
  });

  test('Offset in original date and differnt offset in output', function() {
    expect(buildISOStringWithOffset(new Date('2020-01-01T12:13:14.015-08:00'), 60)).toBe(
      '2020-01-01T19:13:14.015-01:00',
    );
  });

  test('The same offset in and out', function() {
    expect(buildISOStringWithOffset(new Date('2020-01-01T12:13:14.015-08:00'), 480)).toBe(
      '2020-01-01T12:13:14.015-08:00',
    );
  });
});
