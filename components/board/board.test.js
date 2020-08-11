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

    // board.spaces is array
    expect(Array.isArray(board.spaces)).toBeTruthy();

    // board.spaces matches expected length
    expect(board.spaces.length).toBe(expected);

    // board.spaces contains array of objects
    // TODO: check object type
    for (const space of board.spaces) {
      expect(typeof space).toBe('object');
    }
  });
});
