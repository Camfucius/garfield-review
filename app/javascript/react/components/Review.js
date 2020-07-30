import React from "react";
import Vote from "./Vote"
const Review = ({ id, rating, body, user, vote_count }) => {
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

    //built state where fetch was being made 

      return (
    <div key={id}>
      <div className="column is-one-third">
        <div className="card is-shady">
          <div className="card-content">
            <div className="content">
              <h4>
                {user} - Rating: {rating} <Vote vote_count={vote_count}/>
              </h4>
              <p>{body}</p>
              <div className="button" onClick={onChangeDelete}>Delete Review</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
