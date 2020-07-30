import React, { useState, useEffect } from "react";

const Vote = ({ vote_count }) => {
  const [sessionVote, setSessionVote] = useState(0);
  const voteToggle = (direction) => {
    if (sessionVote === 0 && direction === "up") {
      setSessionVote(1);
    } else if (sessionVote === 1 && direction === "up") {
      setSessionVote(0);
    } else if (sessionVote === 0 && direction === "down") {
      setSessionVote(-1);
    } else if (sessionVote === 1 && direction === "down") {
      setSessionVote(-1);
    } else if (sessionVote === -1 && direction === "up") {
      setSessionVote(1);
    } else if (sessionVote === 1 && direction === "down") {
      setSessionVote(-1);
    }
  };
  vote_count = (sessionVote + vote_count);
  const sendCount = () => {
    event.preventDefault();
    fetch(`/api/v1/products/${productId}/reviews/${id}.json`, {
      credentials: "same-origin",
      method: "UPDATE",
      headers: {
        Accept: "application.json",
        "Content-Type": "application.json",
      },
    });
  };


  return (
    <div>
      <div id="up" onClick={() => voteToggle("up")}>
        Up
      </div>
      <div>{vote_count}</div>
      <div id="down" onClick={() => voteToggle("down")}>
        Down
      </div>
    </div>
  );
};

export default Vote;
