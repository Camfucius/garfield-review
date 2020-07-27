import React from "react";

const Review = ({ id, rating, body, user }) => {
  return (
    <div>
      <p>User: {user}</p>
      <p>Rating: {rating}</p>
      <p>Body: {body}</p>
    </div>
  );
};

export default Review;
