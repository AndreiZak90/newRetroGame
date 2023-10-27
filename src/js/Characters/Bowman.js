import Character from "../Character";

export default class Bowman extends Character {
  constructor(level) {
    super(level);
    this.attack = 25;
    this.defence = 25;
    this.health = 50;
    this.maxRange = 2;
    this.maxAttack = 2;
    this.type = "Bowman";
  }
}
