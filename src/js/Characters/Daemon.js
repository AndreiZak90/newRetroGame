import Character from "../Character";

export default class Daemon extends Character {
  constructor(level) {
    super(level);
    this.attack = 10;
    this.defence = 10;
    this.health = 50;
    this.maxRange = 1;
    this.maxAttack = 4;
    this.type = "Daemon";
  }
}
