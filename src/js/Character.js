/**
 * Базовый класс, от которого наследуются классы персонажей
 * @property level - уровень персонажа, от 1 до 4
 * @property attack - показатель атаки
 * @property defence - показатель защиты
 * @property health - здоровье персонажа
 * @property type - строка с одним из допустимых значений:
 * swordsman
 * bowman
 * magician
 * daemon
 * undead
 * vampire
 */
export default class Character {
  constructor(level, type = "generic") {
    if (new.target.name === "Character") {
      throw new Error("Invalid class");
    }
    this.level = level;
    this.attack = 0;
    this.defence = 0;
    this.type = type;
    // TODO: выбросите исключение, если кто-то использует "new Character()"
  }
}
