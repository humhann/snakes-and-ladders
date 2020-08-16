const throwManual = (input) => {
  if (input < 1 || input > 6) {
    throw new Error('Dice input out of bounds');
  }

  return input;
};

// TODO: implement
const throwRandom = () => {};

const Dice = {
  throw: (input) =>
    input === null || typeof input === 'undefined'
      ? throwRandom(input)
      : throwManual(input),
};

export default Dice;
