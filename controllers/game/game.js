import Board from '../../models/board/board';
import Dice from '../dice/dice';

class Game {
  constructor() {
    this.players = [];
    this.board = Board({
      columns: 10,
      rows: 10,
    });
    this.playerOnTurn = null;
  }

  addPlayer(player) {
    this.players.push(player);
  }

  getPlayers() {
    return this.players;
  }

  movePlayer(player, position) {
    player.position = position;
  }

  startGame() {
    // position players to starting space
    for (const player of this.players) {
      this.movePlayer(player, 0);
    }

    // TODO: move to a game loop
    // start player turn
    this.startNextPlayerTurn();
  }

  startNextPlayerTurn() {
    if (!this.playerOnTurn) {
      // TODO: should we use `this.players` directly or `this.getPlayers()`?
      this.playerOnTurn = this.players[0];
    }

    // TODO: assign next player in line
  }

  getPlayerOnTurn() {
    return this.playerOnTurn;
  }

  playerThrowDice(input) {
    this.playerOnTurn.position += Dice.throw(input);
  }
}

export default Game;
