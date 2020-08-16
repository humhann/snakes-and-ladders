import Dice from './dice';

describe('Dice', () => {
  test.each([
    [1, 1],
    [2, 2],
    [3, 3],
    [4, 4],
    [5, 5],
    [6, 6],
  ])(`returns %i when value set manually to %i`, (input, result) => {
    expect(Dice.throw(input)).toBe(result);
  });

  test.each([[-1], [0], [7], [100], ['']])(
    `throws error when value set manually is not within 1-6 (%i)`,
    (input) => {
      expect(() => {
        Dice.throw(input);
      }).toThrowError(new Error('Dice input out of bounds'));
    }
  );

  // TODO: how to test with non-deterministic output?
  // Run x amount of tests to safely conclude all output between 1-6?
  // Save results in an array and analyse for sufficient distribution?
  test.todo('throw random number between 1-6');
});
