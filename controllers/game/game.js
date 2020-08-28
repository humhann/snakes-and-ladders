import Board from '../../models/board/board';
import Dice from '../dice/dice';

class Game {
  constructor() {
    this.players = [];
    this.board = Board({
      columns: 10,
      rows: 10,
    });
    this.playerOnTurnIndex = -1;
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

    this.setNextPlayerOnTurn();
  }

  getPlayerOnTurn() {
    return this.players[this.playerOnTurnIndex];
  }

  setNextPlayerOnTurn() {
    const nextPlayerIndex = this.playerOnTurnIndex + 1;
    this.playerOnTurnIndex =
      nextPlayerIndex < this.players.length ? nextPlayerIndex : 0;
  }

  playerThrowDice(input) {
    const player = this.getPlayerOnTurn();
    const newPosition = player.position + Dice.throw(input);

    this.movePlayer(player, newPosition);
  }
}

export default Game;
