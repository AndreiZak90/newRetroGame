import themes from "./themes";
import Team from "./Team";
import cursors from "./cursors";
import GameState from "./GameState";

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;

    this.playersTeam = null;
    this.opposingTeam = null;

    this.gameState = new GameState();
  }
  init() {
    // TODO: add event listeners to gamePlay events
    // TODO: load saved stated from stateService

    this.gamePlay.drawUi(themes.prairie);
    if (!this.playersTeam) {
      this.getStartPosition();
    }
    this.gamePlay.redrawPositions([
      ...this.playersTeam.characters,
      ...this.opposingTeam.characters,
    ]);

    this.gamePlay.addCellEnterListener(this.onCellEnter.bind(this));
    this.gamePlay.addCellClickListener(this.onCellClick.bind(this));
    this.gamePlay.addCellLeaveListener(this.onCellLeave.bind(this));
  }

  getStartPosition() {
    this.playersTeam = Team.playersTeam();
    this.opposingTeam = Team.opposingTeam();
    this.currentCharactersPosition = [
      ...this.playersTeam.characters,
      ...this.opposingTeam.characters,
    ];
  }

  onCellClick(index) {
    // TODO: react to click

    const player = this.getPlayer(index);
    const playerTeam = ["Bowman", "Swordsman", "Magician"];
    if (!player) return;

    if (playerTeam.includes(player.character.type)) {
      for (let item of this.gamePlay.cells) {
        item.classList.remove("selected");
      }
      this.gamePlay.selectCell(player.position);
      this.gameState.activeChar = player;
    } else {
      return;
    }
  }

  onCellEnter(index) {
    const player = this.getPlayer(index);
    if (player) {
      this.gamePlay.showCellTooltip(this.getInfo(player.character), index);

      this.gamePlay.setCursor(cursors.pointer);
    }

    if (!this.gameState.activeChar === player) return;

    const isTransitionCell = this.gameState.transitionCells.includes(index);
    const isAttackCell = this.gameState.attackCells.includes(index);
    const isUserCell = this.gameState.playerTeam.some(
      (item) => item.position === index
    );
    const isCompCell = this.gameState.oppoTeam.some(
      (item) => item.position === index
    );

    if (this.gameState.indexSelect) {
      if (isTransitionCell && !isUserCell && !isCompCell) {
        this.gameState.indexSelect.green = index;
        this.gamePlay.selectCell(index, "green");
      }

      if (isAttackCell && isCompCell) {
        this.gameState.indexSelect.red = index;
        this.gamePlay.selectCell(index, "red");
        this.gamePlay.setCursor(cursors.crosshair);
      }
    }
  }

  onCellLeave(index) {
    // TODO: react to mouse leave
    this.gamePlay.hideCellTooltip(index);
    this.gamePlay.setCursor(cursors.auto);
  }

  getPlayer(index) {
    return this.getAllPlayer().find((el) => el.position === index);
  }

  getAllPlayer() {
    if (!this.playersTeam || !this.opposingTeam)
      throw new Error("it must have 2 arguments");
    return [...this.playersTeam.characters, ...this.opposingTeam.characters];
  }

  getInfo(player) {
    return `\u{1F396}${player.level} \u2694${player.attack} \u{1F6E1}${player.defence} \u2764${player.health}`;
  }
}
