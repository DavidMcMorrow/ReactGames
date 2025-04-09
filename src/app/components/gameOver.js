import { useState } from "react";

  export default function GameOver({ winner }) {
    const [hovered, setHovered] = useState(null);

    function displayTitle(){
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
                onMouseEnter={() => setHovered("Rematch")}
                onMouseLeave={() => setHovered(null)}
                className={`option-button ${hovered === "Rematch" ? "option-button-hover" : ""}`}
            >
            Rematch
            </button>
            <button
                onClick={() => setGameMode(null)}
                onMouseEnter={() => setHovered("Rematch Same Mode")}
                onMouseLeave={() => setHovered(null)}
                className={`option-button ${hovered === "Rematch Same Mode" ? "option-button-hover" : ""}`}
            >
            Rematch Same Mode
            </button>
        </div>
      );
  }