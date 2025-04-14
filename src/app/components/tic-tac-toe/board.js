import Square from "./square";

const styles = {
  board: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "0",
    width: "360px",
    margin: "auto",
  }
};

export default function Board({ board, onSquareClick, winningFormation }) {
  return (
    <div style={styles.board}>
      {board.map((value, index) => (
        <Square
          key={index}
          value={value}
          onClick={() => onSquareClick(index)}
          isWinning={winningFormation.includes(index)}
        >
        </Square>
      ))}
    </div>
  );
}