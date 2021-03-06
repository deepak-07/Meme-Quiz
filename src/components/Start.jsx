import React from "react";

export default function Start({ setStartPlay }) {
  const handleClick = () => {
    setStartPlay(true);
  };
  return (
    <div className="start">
      <h2>Welcome to the MEME-TRIVIA</h2>
      <p>
        If you believe you are good at Memes. <br />
        Dare to take the quiz!!
      </p>
      <button className="startButton" onClick={handleClick}>
        Start
      </button>
    </div>
  );
}
