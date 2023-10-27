export default class GameState {
  constructor(gamePlay) {
    this.gamePlay = gamePlay;
    this.levelGame = 1;
    this.activeChar = null;
    this.indexSelect = null;
    this.transitionCells = [];
    this.attackCells = [];
  }
}
