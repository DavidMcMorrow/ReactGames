import './board.css';
import Cell from '../cell/cell';

export default function Board({board, boardRef, originalBoard, selectedCell, setSelectedCell}) {
  return (
    <div ref={boardRef} className="grid">
        {
          board.map((row, rowIndex) => 
            row.map((cell, colIndex) => (
              <Cell
                key={`${rowIndex}-${colIndex}`}
                rowIndex={rowIndex}
                colIndex={colIndex}
                value={cell}
                originalBoard={originalBoard[rowIndex][colIndex]}
                selectedCell={selectedCell}
                onClick={setSelectedCell} 
              />
            ))
          )
        }
    </div>
  );
}