import { useState } from "react";

  export default function GameOver({ winner, resetGame, setGameMode }) {
    const [hovered, setHovered] = useState(null);
    const REMATCH = "Rematch"
    const REMATCH_DIFF_MODE = "Rematch Different Mode"

    function displayTitle(){
        console.log("winner", winner);
        
        if(winner === "X"){
            return "X Won!"
        } else if(winner === "O"){
            return "O Won!"
        } else{
            return "Its a Draw!"
        }
    }

    return (
        <div className="option-selection">
            <h2 className="option-section-title">{displayTitle()}</h2>
            <button
                onClick={() => resetGame()}
                onMouseEnter={() => setHovered(REMATCH)}
                onMouseLeave={() => setHovered(null)}
                className={`option-button ${hovered === REMATCH ? "option-button-hover" : ""}`}
            >
            {REMATCH}
            </button>
            <button
                onClick={() => {setGameMode(null); resetGame()}}
                onMouseEnter={() => setHovered(REMATCH_DIFF_MODE)}
                onMouseLeave={() => setHovered(null)}
                className={`option-button ${hovered === REMATCH_DIFF_MODE ? "option-button-hover" : ""}`}
            >
            {REMATCH_DIFF_MODE}
            </button>
        </div>
      );
  }