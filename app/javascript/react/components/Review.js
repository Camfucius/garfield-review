import React from "react";

const Review = ({ id, rating, body, user, productId }) => {
  const onChangeDelete = event => {
    event.preventDefault()
    fetch(`/api/v1/products/${productId}/reviews/${id}.json`, {
      credentials: "same-origin",
      method: 'DELETE',
      headers: {
        'Accept': 'application.json',
        'Content-Type': 'application.json',
      },
    })
  }
  return (
    <div key={id}>
      <p>User: {user}</p>
      <p>Rating: {rating}</p>
      <p>{body}</p>

      <div className="button" onClick={onChangeDelete}>Delete Review</div>
    </div>
  );
};

export default Review;

