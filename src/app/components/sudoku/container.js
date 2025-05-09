'use client'
import Board from "./board";
import { useState, useEffect } from "react";

export default function container() {
  
  const [board, setBoard] = useState(
    Array.from({ length: 9 }, () => Array(9).fill('1'))
  );

  function test(){
    console.log("board", board);
  }

  return ( 
    <main style={styles.container}>
      <button onClick={() => test()}> test</button>
      <h1 className={'title'}>Sudoku</h1>
      <Board board={board}/>
    </main>
    // <div style={{
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     height: "100vh",
    //     fontSize: "2rem",
    //     fontWeight: "bold"
    //   }}>
    //     Under Development
    // </div>
    
 );
}

const styles = {
  container: {
    position: "relative",
    textAlign: "center",
    marginTop: "1.5rem",
  },
}