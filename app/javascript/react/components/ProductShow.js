import React from "react";
import Review from "./Review";
import { Link } from "react-router-dom";

const ProductShow = ({ id, name, description, url, image_url, reviews }) => {
  const productReviews = reviews.map((review) => {
    return (
      <Review
        key={review.id}
        id={review.id}
        rating={review.rating}
        body={review.body}
        user={review.commenter_name}
      />
    );
  });
  return (
    <div className="columns">
      <div className="column is-one-third">
        <section className="section-padding-medium p-t-lg p-l-lg">
          <div className="card is-shady is-4">
            <div className="card-image">
              <figure className="image">
                <img src={image_url} alt="item image" />
              </figure>
            </div>
            <div className="card-content">
              <div className="content">
                <h4 className="title has-text-dark-orange">{name}</h4>
                <p>{description}</p>
                <div className="buttons">
                  <a href={url}>
                    <button className="button is-primary has-text-dark">
                      <b>Buy Here</b>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="column p-t-lg m-t-lg">{productReviews}</div>
    </div>
  );
};

export default ProductShow;
