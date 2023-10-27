import { generateTeam } from "./generators";
import Bowman from "./Characters/Bowman";
import Daemon from "./Characters/Daemon";
import Magician from "./Characters/Magician";
import Swordsman from "./Characters/Swordsman";
import Undead from "./Characters/Undead";
import Vampire from "./Characters/Vampire";
import PositionedCharacter from "./PositionedCharacter";

/**
 * Класс, представляющий персонажей команды
 *
 * @todo Самостоятельно продумайте хранение персонажей в классе
 * Например
 * @example
 * ```js
 * const characters = [new Swordsman(2), new Bowman(1)]
 * const team = new Team(characters);
 *
 * team.characters // [swordsman, bowman]
 * ```
 * */
export default class Team {
  constructor(characters) {
    this.characters = characters;
  }

  // TODO: write your logic here
  static playersTeam() {
    const playersClass = [Bowman, Swordsman, Magician]; // классы игрока
    const playerGenerator = generateTeam(playersClass, 1, 2);
    const playerPosition = Team.getRandomPosition([0, 1], 3);
    const playerTeamPosition = playerGenerator.characters.map(
      (el) => new PositionedCharacter(el, playerPosition.pop())
    );
    return new Team(playerTeamPosition);
  }

  static opposingTeam() {
    const opposingClass = [Daemon, Undead, Vampire]; // классы соперника
    const opposingGenerator = generateTeam(opposingClass, 1, 2);
    const opposingPosition = Team.getRandomPosition([6, 7], 3);

    const opposingTeamPosition = opposingGenerator.characters.map(
      (el) => new PositionedCharacter(el, opposingPosition.pop())
    );
    return new Team(opposingTeamPosition);
  }

  static getRandomPosition(arr, count) {
    const res = [];
    const availablePos = [];

    for (const ind of arr) {
      for (let i = 0; i < 8; i += 1) {
        availablePos.push(i * 8 + ind);
      }
    }
    for (let j = 0; j < count; j += 1) {
      const index = Math.floor(Math.random() * availablePos.length);
      res.push(Math.floor(availablePos.splice(index, 1)));
    }
    return res;
  }
}
