import React from "react";
import { useNavigate } from "react-router-dom"; // If using React Router

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <h1>🎮 React Games Dashboard</h1>
      <div className="button-group">
        <button onClick={() => navigate("/tic-tac-toe")}>Play Tic Tac Toe</button>
        <div className="tooltip-container">
          <button disabled className="disabled-button">Sudoku</button>
          <span className="tooltip">Coming soon!</span>
        </div>
      </div>
    </div>
  );
}