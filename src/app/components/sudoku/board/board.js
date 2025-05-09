import './board.css';

export default function Board({board}) {
  return (
    <div className="grid">
        {
          board.map((row, rowIndex) => 
            row.map((cell, colIndex) => (
              <input className="cell" key={`${rowIndex}-${colIndex}`} value={cell || ''} maxLength={1} readOnly/>
            ))
          )
        }
    </div>
  );
}