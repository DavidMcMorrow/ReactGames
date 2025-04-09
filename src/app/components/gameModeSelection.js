import React from "react";
import { useState } from "react";

const styles = {
    modeSelection: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      background: "rgba(255, 255, 255, 0.95)",
      padding: "30px",
      borderRadius: "12px",
      boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
      textAlign: "center",
      zIndex: 10,
      backdropFilter: "blur(10px)",
      animation: "fadeIn 0.5s ease-in-out",
    },
    modeTitle: {
      fontSize: "1.5rem",
      marginBottom: "1rem",
      fontWeight: "bold",
    },
    modeButton: {
      display: "block",
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
    modeButtonHover: {
      transform: "scale(1.05)",
      boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
      cursor: "pointer",
    },
  };

  export default function GameModeSelection({ setGameMode }) {
    const [hovered, setHovered] = useState(null);

    function displayText(mode){
      if(mode === "2P"){
        return "👫 2 Player";
      } if(mode === "Easy"){
        return "🤖 Easy Mode"
      } else if(mode === "Medium"){
        return "🎯 Medium Mode"
      } else {
        return "🧠 Hard Mode"
      }
    }

    return (
        <div style={styles.modeSelection}>
          <h2 style={styles.modeTitle}>Choose Your Game Mode</h2>
          {["2P", "Easy", "Medium", "Hard"].map((mode) => (
            <button
              key={mode}
              onClick={() => setGameMode(mode)}
              onMouseEnter={() => setHovered(mode)}
              onMouseLeave={() => setHovered(null)}
              style={{
                ...styles.modeButton,
                ...(hovered === mode ? styles.modeButtonHover : {}),
          }}
            >
              {displayText(mode)}
            </button>
          ))}
        </div>
      );
}