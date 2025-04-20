"use client"

import React from "react";
import { useRouter } from 'next/navigation';
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css';

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
        flexDirection: "column",
        height: "100vh",
      }}>
       <div className={'title'}>Home Page</div>
        <button onClick={goToTicTacToe}
        className={'option-button'}>
            Go to TicTacToe
        </button>
      
        <button 
        data-tooltip-id="sudoku-tip" data-tooltip-content="Under Development"
        onClick={goToSudoku}
        className={'option-button'}>
            Go to Sudoku
        </button>
        <Tooltip id="sudoku-tip" place="bottom" />
       
      </div>
    );
};

export default Dashboard;