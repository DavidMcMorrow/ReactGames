"use client"

import React from "react";
import { useRouter } from 'next/navigation';

const Dashboard = () => {
    const router = useRouter();

    const goToTicTacToe = () => {
      router.push('/tic-tac-toe');
    };

    const goToSudoku = () => {
      router.push('/sudoku');
    };
  
    return (
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}>
        <button onClick={goToTicTacToe}>
            Go to TicTacToe
        </button>
        <button onClick={goToSudoku}>
            Go to Sudoku
        </button>
      </div>
    );
};

export default Dashboard;