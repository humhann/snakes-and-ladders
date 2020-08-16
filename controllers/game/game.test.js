import Game from './game';
import Player from '../../models/player/player';

describe('Game', () => {
  let game;

  beforeEach(() => {
    game = new Game();

    game.addPlayer(Player({ name: 'Player 1' }));
    game.addPlayer(Player({ name: 'Player 2' }));

    game.startGame();
  });

  test('starts with players on initial position', () => {
    expect(game.getPlayers()).toEqual(
      expect.arrayContaining([
        { name: 'Player 1', position: 0 },
        { name: 'Player 2', position: 0 },
      ])
    );
  });

  test('first turn starts with first player', () => {
    expect(game.getPlayerOnTurn()).toStrictEqual({
      name: 'Player 1',
      position: 0,
    });
  });

  test.todo('turn continues with next player in line');

  test('moves player to correct space after dice rolls onto normal field', () => {
    const playerClone = { ...game.getPlayerOnTurn() };

    playerClone.position += 5;
    game.playerThrowDice(5);
    expect(game.getPlayerOnTurn()).toStrictEqual(playerClone);

    playerClone.position += 3;
    game.playerThrowDice(3);
    expect(game.getPlayerOnTurn()).toStrictEqual(playerClone);
  });

  test.todo('moves player to correct space after dice rolls onto snake field');

  test.todo('moves player to correct space after dice rolls onto ladder field');
});