import React from "react";
import { useState } from "react";


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
        <div className="option-selection">
          <h2 className="option-section-title">Choose Your Game Mode</h2>
          {["2P", "Easy", "Medium", "Hard"].map((mode) => (
            <button
              key={mode}
              onClick={() => setGameMode(mode)}
              onMouseEnter={() => setHovered(mode)}
              onMouseLeave={() => setHovered(null)}
              className={`option-button ${hovered === mode ? "option-button-hover" : ""}`}
            >
              {displayText(mode)}
            </button>
          ))}
        </div>
      );
}