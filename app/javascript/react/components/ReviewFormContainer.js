import React, { useState } from "react";

const ReviewFormContainer = (props) => {
  const [review, setReview] = useState([
    {
      id: null,
      rating: null,
      body: "",
      product_id: null,
    },
  ]);

  const handleInputChange = (event) => {
    setReview({
      ...review,
      [event.currentTarget.id]: event.currentTarget.value,
    });
  };

  const onSubmitHandeler = (event) => {
    event.preventDefault();
    props.addNewReview(review);
  };

  return (
    <form className="callout secondary" onSubmit={onSubmitHandeler}>
      <h1>New Review Form</h1>
      <div>
        <label htmlFor="rating">Rating:</label>
        <input
          type="integer"
          id="rating"
          name="rating"
          onChange={handleInputChange}
          value={review.rating}
        />
      </div>

      <div>
        <label htmlFor="body">Body:</label>
        <input
          type="text"
          id="body"
          name="body"
          onChange={handleInputChange}
          value={review.body}
        />
      </div>

      <div className="button-group">
        <input type="submit" className="button" value="Submit " />
      </div>
    </form>
  );
};

export default ReviewFormContainer;
