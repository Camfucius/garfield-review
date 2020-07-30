import React from "react";

const Review = ({ id, rating, body, user }) => {
  return (

      <div key={id} className="column is-one-third">
        <div className="card is-shady">
          <div className="card-content">
            <div className="content">
              <h4>
                {user} - Rating: {rating}
              </h4>
              <p>{body}</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Review;
