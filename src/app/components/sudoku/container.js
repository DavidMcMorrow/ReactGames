'use client'
import Board from "./board/board";
import { useState, useEffect } from "react";

export default function Sudoku() {
  
  const [board, setBoard] = useState(
    Array.from({ length: 9 }, () => Array(9).fill(''))
  );
  const [original, setOriginal] = useState(
    Array.from({ length: 9 }, () => Array(9).fill(''))
  );
  const [solution, setSolution] = useState(
    Array.from({ length: 9 }, () => Array(9).fill(''))
  );

  function createMatrix(boardState){
    let matrix = Array.from({ length: 9 }, () => Array(9).fill(''));
    let line = -1;
    
    for (let index = 0; index < boardState.length; index++) {
      const element = boardState[index];
      if(index % 9 == 0){
        line++;
      }
      if(element == '0'){
        matrix[line][index % 9] = '';
      } else{
        matrix[line][index % 9] = element
      }
    }
    return matrix;
  }

  useEffect(() => {
    fetch("/api/sudoku")
    .then(res => res.json())
    .then(data => {
      setBoard(createMatrix(data.puzzle));
      setOriginal(board);
      setSolution(createMatrix(data.solution));
    })
    .catch(err => console.error(err))
  }, [])

  return ( 
    <main className="sudoku-container">
      <h1 className={'title'}>Sudoku</h1>
      <Board board={board}/>
    </main>
 );
}