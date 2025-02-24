/**
 * @todo
 * @param index - индекс поля
 * @param boardSize - размер квадратного поля (в длину или ширину)
 * @returns строка - тип ячейки на поле:
 *
 * top-left
 * top-right
 * top
 * bottom-left
 * bottom-right
 * bottom
 * right
 * left
 * center
 *
 * @example
 * ```js
 * calcTileType(0, 8); // 'top-left'
 * calcTileType(1, 8); // 'top'
 * calcTileType(63, 8); // 'bottom-right'
 * calcTileType(7, 7); // 'left'
 * ```
 * */
export function calcTileType(index, boardSize) {
  // TODO: ваш код будет тут
  if (index < boardSize - 1 && index > 0) {
    return "top";
  }
  if (index < boardSize ** 2 - 1 && index > boardSize ** 2 - boardSize) {
    return "bottom";
  }
  for (let i = 1; i < boardSize - 1; i += 1) {
    if (index === boardSize * i) {
      return "left";
    }
    if (index === boardSize * i + (boardSize - 1)) {
      return "right";
    }
  }

  switch (index) {
    case 0:
      return "top-left";
    case boardSize - 1:
      return "top-right";
    case boardSize * (boardSize - 1):
      return "bottom-left";
    case boardSize ** 2 - 1:
      return "bottom-right";
    default:
      return "center";
  }
}

export function calcHealthLevel(health) {
  if (health < 15) {
    return "critical";
  }

  if (health < 50) {
    return "normal";
  }

  return "high";
}
//this.gamePlay.addCellEnterListener(this.onCellEnter.bind(this));
