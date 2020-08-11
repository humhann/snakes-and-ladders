const Board = ({ columns, rows }) => ({
  fields: Array(columns * rows).fill(),
});

export default Board;
