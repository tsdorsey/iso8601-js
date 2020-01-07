import { toISOStringWithOffset } from '../src/interface';
import { buildISOStringWithOffset } from '../src/calculator';

test('buildISOStringWithOffset', () => {
  let now = new Date();
  let offset = now.getTimezoneOffset();

  // Local offset should be used as the default value.
  expect(toISOStringWithOffset(now)).toBe(buildISOStringWithOffset(now, offset));
});
