'use client'
import Board from "./board/board";
import { useState, useEffect, useRef } from "react";

export default function Sudoku() {
  
  const [board, setBoard] = useState(
    Array.from({ length: 9 }, () => Array(9).fill(''))
  );
  const [originalBoard, setOriginalBoard] = useState(
    Array.from({ length: 9 }, () => Array(9).fill(''))
  );
  const [solution, setSolution] = useState(
    Array.from({ length: 9 }, () => Array(9).fill(''))
  );
  const [selectedCell, setSelectedCell] = useState({row: null, col: null});
  const [isLoading, setIsLoading] = useState(true);

  const boardRef = useRef();

  function createMatrix(boardState){
    let matrix = Array.from({ length: 9 }, () => Array(9).fill(''));
    let line = -1;
    
    for (let index = 0; index < boardState.length; index++) {
      const element = boardState[index];
      if(index % 9 == 0){
        line++;
      }
      if(element == '0'){
        matrix[line][index % 9] = 0;
      } else{
        matrix[line][index % 9] = element
      }
    }
    return matrix;
  }

  // Calls API
  useEffect(() => {
    fetch("/api/sudoku")
    .then(res => res.json())
    .then(data => {
      setBoard(createMatrix(data.puzzle));
      setOriginalBoard(createMatrix(data.puzzle));
      setSolution(createMatrix(data.solution));
      setIsLoading(false);
    })
    .catch(err => console.error(err))
  }, [])

  // Inputs values
  useEffect(() => {
    const handleKeyDown = (e) => {
      console.log("selectedCell", selectedCell);
      
      const {row, col} = selectedCell;
      
      if(row == null || col == null) return

      if (originalBoard[row][col] !== 0) return;

      if (e.key === 'Backspace' || e.key === 'Delete') {
        const updated = board.map(r => [...r]);
        updated[row][col] = 0;
        setBoard(updated);
        return;
      }

      if (/^[1-9]$/.test(e.key)) {
        const updated = board.map(r => [...r]);
        updated[row][col] = parseInt(e.key, 10);
        setBoard(updated);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCell, board, originalBoard]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if(!boardRef.current?.contains(e.target)){
        setSelectedCell({row: null, col: null})
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (isLoading || !board || !originalBoard) {
    return <p>Loading...</p>;
  }

  return (
    <main className="sudoku-container">
      <h1 className={'title'}>Sudoku</h1>
      <Board 
        board={board} 
        boardRef={boardRef} 
        originalBoard={originalBoard} 
        selectedCell={selectedCell}
        setSelectedCell={setSelectedCell}
      />
    </main>
 );
}