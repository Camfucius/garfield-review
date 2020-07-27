import React from "react";
import Review from "./Review";

const ProductShow = ({ id, name, description, url, image_url, reviews }) => {
  const productReviews = reviews.map((review) => {
    return (
      <div key={id}>
        <Review
          key={review.id}
          id={review.id}
          rating={review.rating}
          body={review.body}
          user={review.username.username}
        />
      </div>
    );
  });
  return (
    <div className="">
      <h2>{name}</h2>
      <div>
        <p>{description} </p>
        <a href={url}> Buy Here! </a>
        <img src={image_url} />
      </div>
      <h2>Reviews</h2>
      {productReviews}
    </div>
  );
};

export default ProductShow;
