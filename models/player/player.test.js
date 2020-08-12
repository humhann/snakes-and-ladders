import Player from './player';

describe('Player', () => {
  const player = Player({ name: 'Player 1' });

  test('has a name', () => {
    expect(player.name).toBe('Player 1');
  });
});
