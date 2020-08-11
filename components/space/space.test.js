import Space from './space';

describe('Space', () => {
  const players = [
    { name: 'Player 1' },
    { name: 'Player 2' },
    { name: 'Player 3' },
  ];

  const space = Space({
    index: 7,
    players,
  });

  test('is an object', () => {
    expect(typeof space).toBe('object');
  });

  test('has index set', () => {
    expect(space.index).toBe(7);
  });

  test('has players attached', () => {
    expect(space.players).toEqual(expect.arrayContaining(players));
  });
});
