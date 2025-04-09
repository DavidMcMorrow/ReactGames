"use client";

import { useState, useEffect } from "react";
import Board from "./components/board";
import Status from "./components/status";
import GameModeSelection from "./components/gameModeSelection";

export default function Home() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winningFormation, setWinningFormation] = useState([]);
  const [status, setStatus] = useState("");
  const [gameMode, setGameMode] = useState(null);
  const [resetHovered, setResetHovered] = useState(false);
  const [isAIMoving, setIsAIMoving] = useState(false);

  function handleClick(index) {
    if(board[index] || calculateWinner(board).winner || isAIMoving) return

    let newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    
    setBoard(newBoard);
    setIsXNext(false);

    determineGameMode(newBoard);
  }

  function calculateWinner(board) {
    const winningLines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    for (let [a, b, c] of winningLines) {
      if(board[a] && board[a] === board[b] && board[a] === board[c]){
        return { winner: board[a], line: [a, b, c] };
      }
    }
    return { winner: null, line: [] };
  }

  function determineGameMode(newBoard){
    if(gameMode === "2P"){
      setIsXNext(true)
      setIsXNext(!isXNext);
    } else {
      setIsAIMoving(true);
      if(gameMode === "Easy"){
        setTimeout(() => {
          makeAIMoveEasy(newBoard)
        }, 500);
      } else if(gameMode === "Medium"){
        setTimeout(() => {
          makeAIMoveMedium(newBoard)
        }, 500);
      } else if(gameMode === "Hard"){
        setTimeout(() => {
          makeAIMoveHard(newBoard)
        }, 500);
      }
    }
  }

  function makeAIMoveEasy(newBoard) {
    if(calculateWinner(newBoard).winner) return
    console.log(calculateWinner(board));
    
    const emptySquares = newBoard.map((value, idx) => (value === null ? idx : null)).filter((idx) => idx !== null);

    if(emptySquares.length === 0) return
    
    const randomIndex = emptySquares[Math.floor(Math.random() * emptySquares.length)];
    
    newBoard[randomIndex] = "O";
    
    setBoard([...newBoard]);
    setIsXNext(true);
    setIsAIMoving(false);
  }

  function makeAIMoveMedium(newBoard){
    if(calculateWinner(newBoard).winner) return

    const emptySquares = newBoard.map((value, idx) => (value === null ? idx : null)).filter((idx) => idx !== null);
    
    if(emptySquares.length === 0) return

    for(let move of emptySquares){
      let testBoard = [...newBoard];
      testBoard[move] = 'O';
      if(calculateWinner(testBoard).winner === 'O'){
        newBoard[move] = 'O';
        setBoard([...newBoard]);
        setIsXNext(true);
        setIsAIMoving(false);
        return
      }
    }

    for(let move of emptySquares){
      let testBoard = [...newBoard];
      testBoard[move] = 'X';
      if(calculateWinner(testBoard).winner === 'X'){
        newBoard[move] = 'O';
        setBoard([...newBoard]);
        setIsXNext(true);
        setIsAIMoving(false);
        return
      }
    }

    const randomIndex = emptySquares[Math.floor(Math.random() * emptySquares.length)];
    newBoard[randomIndex] = "O";
    
    setBoard([...newBoard]);
    setIsXNext(true);
    setIsAIMoving(false);
  }

  function makeAIMoveHard(newBoard){
    if(calculateWinner(newBoard).winner) return

    const bestMove = findBestMove(newBoard);
    console.log("bestMove", bestMove);
    
    if (bestMove !== -1) {
      newBoard[bestMove] = "O";
      setBoard([...newBoard]);
      setIsXNext(true);
      setIsAIMoving(false);
    }
  }

  function findBestMove(board){
    let bestScore = -Infinity;
    let move = -1;

    for (let i = 0; i < board.length; i++) {
      if (board[i] === null) {
        board[i] = "O";
        let score = minimax(board, 0, false);
        board[i] = null;
        if (score > bestScore) {
          bestScore = score;
          move = i;
        }
      }
    }
  
    return move;
  }

  function minimax(board, depth, isMaximizing) {
    const result = calculateWinner(board).winner;
  
    if (result === "O") return 10 - depth;
    if (result === "X") return depth - 10;
    if (board.every(cell => cell !== null)) return 0;
  
    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < board.length; i++) {
        if (board[i] === null) {
          board[i] = "O";
          const score = minimax(board, depth + 1, false);
          board[i] = null;
          bestScore = Math.max(score, bestScore);
        }
      }
      return bestScore;
  
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < board.length; i++) {
        if (board[i] === null) {
          board[i] = "X";
          const score = minimax(board, depth + 1, true);
          board[i] = null;
          bestScore = Math.min(score, bestScore);
        }
      }
      return bestScore;
    }
  }

  function resetGame(){
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinningFormation([]);
    setGameMode(null);
    setIsAIMoving(false);
  }

  useEffect(() => {
    const { winner, line } = calculateWinner(board);
    if (winner) {
      setStatus(`Winner: ${winner}`);
      setWinningFormation(line)
    } else {
      setStatus(`Next Player: ${isXNext ? 'X' : 'O'}`);
    }
  }, [board]);
    
  return (
    <main style={styles.container}>
      <h1 style={styles.title}>Tic-Tac-Toe</h1>
      <div style={gameMode ? styles.boardContainer : styles.boardContainerBlur}>
        <Board board={board} onSquareClick={gameMode ? handleClick : () => {}} winningFormation={winningFormation} />
        <Status status={status} />
      </div>

      {!gameMode && <GameModeSelection setGameMode={setGameMode} />}

      {
        gameMode && (
          <button onClick={resetGame} onMouseEnter={() => setResetHovered(true)}
          onMouseLeave={() => setResetHovered(false)} style={{
            ...styles.resetButton,
            ...(resetHovered === true ? styles.resetButtonHover : {})
          }}>Reset Game</button>
      )}
    </main>
  )
}


const styles = {
  container: {
    position: "relative",
    textAlign: "center",
    marginTop: "1.5rem",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "1rem",
    fontWeight: "bold",
  },
  boardContainer: {
    pointerEvents: "auto", // Board is interactive when game starts
  },
  boardContainerBlur: {
    pointerEvents: "none", // Prevents clicking before selecting mode
    opacity: 0.3,
    filter: "blur(0.25rem)", // Adds a slight blur
    transition: "opacity 0.5s ease, filter 0.5s ease",
  },
  resetButton: {
    width: "13.75rem",
    margin: "0.625rem auto",
    padding: "0.75rem",
    fontSize: "1.2rem",
    cursor: "pointer",
    borderRadius: "0.5rem",
    border: "none",
    background: "linear-gradient(135deg, #6e8efb, #1c429c)",
    color: "white",
    transition: "0.3s",
  },
  resetButtonHover: {
    transform: "scale(1.05)",
    boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
  }
}