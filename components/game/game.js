import Board from '../../models/board/board';

class Game {
  constructor() {
    this.players = [];
    this.board = Board({
      columns: 10,
      rows: 10,
    });
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
    for (const player of this.players) {
      this.movePlayer(player, 0);
    }
  }
}

export default Game;
