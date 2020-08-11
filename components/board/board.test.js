import Board from './board';

describe('Board', () => {
  test.each([
    [10, 5, 50],
    [12, 12, 144],
    [10, 10, 100],
  ])(`initializes with %i rows and %i columns`, (columns, rows, expected) => {
    const board = Board({
      columns,
      rows,
    });

    expect(Array.isArray(board.fields)).toBeTruthy();
    expect(board.fields.length).toBe(expected);
  });
});
