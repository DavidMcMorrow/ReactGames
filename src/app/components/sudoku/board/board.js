import './board.css';
import Cell from '../cell/cell';

export default function Board({board, boardRef, originalBoard, selectedCell, cellSelected, selectedNumber}) {
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
                cellSelected={cellSelected}
                selectedNumber={selectedNumber}
              />
            ))
          )
        }
    </div>
  );
}