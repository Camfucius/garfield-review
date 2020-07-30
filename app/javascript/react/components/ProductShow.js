import React from "react";
import Review from "./Review";
import { Link } from "react-router-dom";

const ProductShow = ({ id, name, description, url, image_url, reviews }) => {
  const productReviews = reviews.map((review) => {
    return (
      <div key={review.id}>
        <Review
          id={review.id}
          rating={review.rating}
          body={review.body}
          user={review.commenter_name}
          vote_count={review.vote_count}
        />
      </div>
    );
  });
  return (
    <div>
    <div className="column is-one-third">
      <div className="card is-shady">
        <div className="card-image">
          <figure className="image">
            <img src={image_url} alt="item image" />
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            <h4>{name}</h4>
            <p>{description}</p>
            <div className="buttons">
              <a href={url}>
                <button className="button is-primary has-text-dark">
                  <b>Buy Here</b>
                </button>

              </a>
              <Link to="/LINK_TO_SOMETHING">
                <button className="button is-purple is-6">
                  <b>Add Review</b>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
    </div>
    {productReviews}
    </div>
  );
};

export default ProductShow;
