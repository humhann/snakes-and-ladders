import Board from './board';

describe('Board', () => {
  const boardOptions = {
    columns: 10,
    rows: 5,
    vectors: [
      { a: 19, b: 3 },
      { a: 17, b: 30 },
      { a: 42, b: 44 },
      { a: 9, b: 18 },
      { a: 15, b: 31 },
      { a: 9, b: 18 },
    ],
  };

  test.each([
    [10, 5, 50],
    [12, 12, 144],
    [10, 10, 100],
  ])(`initializes with %i rows and %i columns`, (columns, rows, expected) => {
    const board = Board({
      columns,
      rows,
    });

    expect(Array.isArray(board.spaces)).toBeTruthy();
    expect(board.spaces.length).toBe(expected);
    // TODO: check object type, use TypeScript?
    for (const space of board.spaces) {
      expect(typeof space).toBe('object');
    }
  });

  test.todo('each space is in a correct row');

  test.todo('first and last space are defined');

  // TODO: check vector type, use some property, or TypeScript?
  // TODO: type should be assigned based on a < b (true: ladder, false: snake)
  test.todo('each vector has correct type assigned to it');

  test('no space has more than one vector point assigned', () => {
    const spaces = new Set();
    const board = Board(boardOptions);

    for (const { a, b } of board.vectors) {
      expect(spaces.has(a)).toBeFalsy();
      expect(spaces.has(b)).toBeFalsy();

      spaces.add(a);
      spaces.add(b);
    }

    expect(spaces.length).toBe(6 * 2);
  });

  test('fails if space has more than one vector point assigned', () => {
    const board = {
      columns: 10,
      rows: 3,
      vectors: [
        { a: 1, b: 5 },
        { a: 6, b: 10 },
        { a: 10, b: 29 },
      ],
    };

    expect(() => {
      Board(board);
    }).toThrowError(
      new Error('Space has more than one vector point assigned to it')
    );
  });
});
