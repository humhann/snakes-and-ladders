import Space from '../space/space';

const Board = ({ columns, rows }) => {
  const spacesLength = columns * rows;

  return {
    spaces: Array(spacesLength)
      .fill()
      .map((_value, index) =>
        Space({
          index,
          isFirst: index === 0,
          isLast: index === spacesLength - 1,
        })
      ),
  };
};

export default Board;
