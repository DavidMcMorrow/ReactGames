'use client'
import Board from "./board/board";
import { useState, useEffect } from "react";

export default function container() {
  
  const [board, setBoard] = useState(
    Array.from({ length: 9 }, () => Array(9).fill('1'))
  );

  return ( 
    <main className="sudoku-container">
      <h1 className={'title'}>Sudoku</h1>
      <Board board={board}/>
    </main>
 );
}