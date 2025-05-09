'use client'
import Board from "./board/board";
import { useState, useEffect } from "react";

export default function Sudoku() {
  
  const [board, setBoard] = useState(
    Array.from({ length: 9 }, () => Array(9).fill('1'))
  );

  function createMatrix(boardState){
    
  }

  useEffect(() => {
    fetch("/api/sudoku")
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setBoard(data.puzzle)
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