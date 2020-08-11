const Board = ({ columns, rows }) => {
  const spacesLength = columns * rows;

  return {
    spaces: Array(spacesLength)
      .fill()
      .map(() => ({})),
  };
};

export default Board;
