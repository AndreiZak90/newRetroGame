import { generateTeam } from "../generators";
import Bowman from "../Characters/Bowman";
import Daemon from "../Characters/Daemon";
import Magician from "../Characters/Magician";
import Swordsman from "../Characters/Swordsman";
import Undead from "../Characters/Undead";
import Vampire from "../Characters/Vampire";

test.each([
  [[Bowman, Swordsman, Magician], 1, 4, 4],
  [[Daemon, Undead, Vampire], 1, 3, 3],
])(
  "checking the number of characters in a team",
  (allowedTypes, maxLevel, characterCount, expected) => {
    const result = generateTeam(allowedTypes, maxLevel, characterCount);
    expect(result.characters.length).toBe(expected);
  }
);

test.each([[[Bowman, Swordsman, Magician], 4, 10, true]])(
  "should be character with the fourth level in Team",
  (allowedTypes, maxLevel, characterCount, expected) => {
    const { characters } = generateTeam(allowedTypes, maxLevel, characterCount);
    const char = characters.find((el) => el.level === 4);
    let result = false;
    if (char) {
      result = true;
    }
    expect(result).toBe(expected);
  }
);
