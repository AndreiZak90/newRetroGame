import Team from "../js/Team";

/**
 * Формирует экземпляр персонажа из массива allowedTypes со
 * случайным уровнем от 1 до maxLevel
 *
 * @param allowedTypes массив классов
 * @param maxLevel максимальный возможный уровень персонажа
 * @returns генератор, который при каждом вызове
 * возвращает новый экземпляр класса персонажа
 *
 */
export function* characterGenerator(allowedTypes, maxLevel) {
  while (true) {
    const randomLevel = Math.floor(Math.random() * maxLevel + 1); //формируеться уровень
    const RandomClass =
      allowedTypes[Math.floor(Math.random() * allowedTypes.length)]; //формируеться класс
    yield new RandomClass(randomLevel); //останаливает генератор при появлении значений
  }
  // TODO: write logic here
}

/**
 * Формирует массив персонажей на основе characterGenerator
 * @param allowedTypes массив классов
 * @param maxLevel максимальный возможный уровень персонажа
 * @param characterCount количество персонажей, которое нужно сформировать
 * @returns экземпляр Team, хранящий экземпляры персонажей. Количество персонажей в команде - characterCount
 * */
export function generateTeam(allowedTypes, maxLevel, characterCount) {
  const characters = [];
  const charGenerator = characterGenerator(allowedTypes, maxLevel);
  for (let i = 0; i < characterCount; i += 1) {
    characters.push(charGenerator.next().value); // добавляет в массив персонажей
  }
  return new Team(characters);
  // TODO: write logic here
}
