import { calcTileType } from "../utils";

test.each([
  [1, 8, "top", "top edge"],
  [6, 8, "top", "top edge"],
  [1, 7, "top", "top edge"],
  [5, 7, "top", "top edge"],
  [57, 8, "bottom", "bottom edge"],
  [62, 8, "bottom", "bottom edge"],
  [43, 7, "bottom", "bottom edge"],
  [47, 7, "bottom", "bottom edge"],
  [8, 8, "left", "left edge"],
  [48, 8, "left", "left edge"],
  [7, 7, "left", "left edge"],
  [35, 7, "left", "left edge"],
  [15, 8, "right", "right edge"],
  [55, 8, "right", "right edge"],
  [13, 7, "right", "right edge"],
  [41, 7, "right", "right edge"],
  [0, 8, "top-left", "top-left edge"],
  [7, 8, "top-right", "top-right edge"],
  [0, 7, "top-left", "top-left edge"],
  [6, 7, "top-right", "top-right edge"],
  [56, 8, "bottom-left", "bottom-left edge"],
  [63, 8, "bottom-right", "bottom-left edge"],
  [42, 7, "bottom-left", "bottom-right edge"],
  [48, 7, "bottom-right", "bottom-right edge"],
  [35, 8, "center", "center edge"],
  [25, 7, "center", "center edge"],
])(
  "should return %s for index %i with board size %i",
  (index, boardSize, expected) => {
    const result = calcTileType(index, boardSize);

    expect(result).toBe(expected);
  }
);
