import React from "react";
import "../App.css";

function Button({ button, filter }) {
  return (
    <div className="buttons">
      {["All","Beginner" , "intermediate","Advanced"].map((Level, i) => {
        return (
          <button
            type="button"
            onClick={() => filter(Level)}
            className="Difficulty-filter"
          >
            {Level}
          </button>
        );
      })}
    </div>
  );
}

export default Button;
