"use client"

import React from "react";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css';

const Dashboard = () => {
    const router = useRouter();
    const [hovered, setHovered] = useState(null);

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
        flexDirection: "column",
        height: "100vh",
      }}>
       <div className={'title'}>Home Page</div>
        <button onClick={goToTicTacToe}
        onMouseEnter={() => setHovered("TicTacToe")}
        onMouseLeave={() => setHovered(null)}
        className={`option-button ${hovered === "TicTacToe" ? "option-button-hover" : ""}`}>
            Go to TicTacToe
        </button>
      
        <button 
        data-tooltip-id="sudoku-tip" data-tooltip-content="Under Development"
        onClick={goToSudoku}
        onMouseEnter={() => setHovered("Sudoku")}
        onMouseLeave={() => setHovered(null)}
        className={`option-button ${hovered === "Sudoku" ? "option-button-hover" : ""}`}>
            Go to Sudoku
        </button>
        <Tooltip id="sudoku-tip" place="bottom" />
       
      </div>
    );
};

export default Dashboard;