import Space from './space';

describe('Space', () => {
  const space = Space({
    index: 7,
  });

  test('is an object', () => {
    expect(typeof space).toBe('object');
  });

  test('has index set', () => {
    expect(space.index).toBe(7);
  });
});
