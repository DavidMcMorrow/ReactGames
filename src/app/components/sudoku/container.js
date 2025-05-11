'use client'
import Board from "./board/board";
import NumberOptions from "./number-options/number-options"
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
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [gameWon, setGameWon] = useState(false);

  const boardRef = useRef();
  const clueRef = useRef();
  const optionsRef = useRef();

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

  function cellSelected(position){
    const {row, col} = position;
    setSelectedCell(position);
    if(selectedNumber != 0){
      updateBoard(row, col, selectedNumber);
    }
  }

  function updateBoard(row, col, value){
    const updated = board.map(r => [...r]);
    updated[row][col] = value;
    setBoard(updated);
  }

  function giveClue(){
    const { row, col } = selectedCell;
    if(row == null || col == null) return;
    
    const actualValue = solution[selectedCell.row][selectedCell.col];
    updateBoard(selectedCell.row, selectedCell.col, actualValue)
  }

  function resolveBoard(){
    setBoard(solution)
  }

  function handleDelete(row, col, entry){
    if (entry === 'Backspace' || entry === 'Delete') {
      updateBoard(row, col, 0);
      return true;
    }
  }

  function handleEntry(row, col, entry){
    if (/^[1-9]$/.test(entry)) {
      updateBoard(row, col, parseInt(entry, 10));
      return true;
    }
  }

  function handleArrowKeys(row, col, entry){
    if (entry === 'ArrowUp') {setSelectedCell({ row: Math.max(0, row - 1), col }); return true;};
    if (entry === 'ArrowDown') {setSelectedCell({ row: Math.min(8, row + 1), col }); return true;};
    if (entry === 'ArrowLeft') {setSelectedCell({ row, col: Math.max(0, col - 1) }); return true;};
    if (entry === 'ArrowRight') {setSelectedCell({ row, col: Math.min(8, col + 1) }); return true;};
  }

  function numberOptionSelected(optionSelected){
    setSelectedNumber(optionSelected);
    
    const { row, col } = selectedCell;
    
    if(row == null || col == null) return;

    if (originalBoard[row][col] !== 0) return;

    updateBoard(row, col, optionSelected)
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
  }, []);

  // Keydown
  useEffect(() => {
    const handleKeyDown = (e) => {
      const {row, col} = selectedCell;
      
      if(row == null || col == null) return

      if(handleArrowKeys(row, col, e.key)) return

      if (originalBoard[row][col] !== 0) return;

      if(handleDelete(row, col, e.key) || handleEntry(row, col, e.key)) return
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCell, board, originalBoard]);

  // Forget selected Cell
  useEffect(() => {
    const handleClickOutside = (e) => {
      if(!boardRef.current?.contains(e.target) && !clueRef.current.contains(e.target) && !optionsRef.current.contains(e.target)){
        setSelectedCell({row: null, col: null})
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Checking for win
  useEffect(() => {
    if(isLoading) return
    
    const isComplete = board.every((row, rIdx) => 
      row.every((cell, cIdx) => cell === solution[rIdx][cIdx])
    );
    
    if(isComplete){
      setGameWon(true);
    }
  }, [board, solution]);

  if (isLoading || !board || !originalBoard) {
    return <div className="loading-bar">Loading...</div>;
  }

  return (
    <main className="sudoku-container">
      <h1 className={'title'}>Sudoku</h1>
      <Board 
        board={board} 
        boardRef={boardRef} 
        originalBoard={originalBoard} 
        selectedCell={selectedCell}
        cellSelected={cellSelected}
        selectedNumber={selectedNumber}
      />
      {!gameWon && (
        <>
          <NumberOptions optionsRef={optionsRef} selectedNumber={selectedNumber} setSelectedNumber={numberOptionSelected}></NumberOptions>
          <div className="button-container">
            <button className="option-button sudoku" ref={clueRef} onClick={giveClue}>Need a Clue?</button>
            <button className="option-button sudoku" onClick={resolveBoard}>Resolve Board</button>
          </div>
        </>
      )}
      {gameWon && 
      <div>
        <p className="game-over-title">Puzzle Solved Correctly!</p>
        <p className="game-over-sub-title">Refresh the page for a new puzzle!</p>
      </div>
      }
    </main>
 );
}