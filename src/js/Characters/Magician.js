import Character from "../Character";

export default class Magician extends Character {
  constructor(level) {
    super(level);
    this.attack = 10;
    this.defence = 40;
    this.health = 50;
    this.maxRange = 1;
    this.maxAttack = 4;
    this.type = "Magician";
  }
}
