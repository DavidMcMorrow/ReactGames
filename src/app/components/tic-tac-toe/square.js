import React from "react";

const styles = {
  square: {
    width: "7.5rem",
    height: "7.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2rem",
    fontWeight: "bold",
    borderRadius: "0.75rm",
    border: "0.125rem solid #333",
    background: "linear-gradient(145deg, #e0e0e0, #ffffff)",
    boxShadow: "0.2rem 0.2rem 0.625rem rgba(0,0,0,0.1)",
    cursor: "pointer",
    transition: "0.2s",
  },
  squareHover: {
    background: "#ddd",
    transform: "scale(1.05)",
  },
  winningSquare: {
    background: "gold",
    color: "#333",
    boxShadow: "0rem 0rem 1rem rgba(255, 215, 0, 0.7)",
  },
}

export default function Square({ value, onClick, isWinning }) {
    return (
      <button
        onClick={onClick}
        style={{
          ...styles.square,
          ...(isWinning ? styles.winningSquare : {}),
        }}
      >
        {value}
      </button>
    );
  }