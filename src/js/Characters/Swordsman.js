import Character from "../Character";

export default class Swordsman extends Character {
  constructor(level) {
    super(level);
    this.attack = 40;
    this.defence = 10;
    this.health = 50;
    this.maxRange = 4;
    this.maxAttack = 1;
    this.type = "Swordsman";
  }
}
