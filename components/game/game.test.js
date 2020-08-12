import Game from './game';
import Player from '../../models/player/player';

describe('Game', () => {
  const game = new Game();
  const players = [{ name: 'Player 1' }, { name: 'Player 2' }];

  game.addPlayer(Player(players[0]));
  game.addPlayer(Player(players[1]));

  test('starts with players on initial position', () => {
    game.startGame();

    expect(game.getPlayers()).toEqual(
      expect.arrayContaining([
        { name: 'Player 1', position: 0 },
        { name: 'Player 2', position: 0 },
      ])
    );
  });
});
