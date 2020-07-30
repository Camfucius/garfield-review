import React, { useState } from "react";

const ReviewFormContainer = (props) => {
  const [review, setReview] = useState({
    rating: "",
    body: "",
  });

  const [errors, setErrors] = useState("");

  let errorMessage = <p></p>;
  if (errors !== "") {
    errorMessage = <p>{errors}</p>;
  }

  const handleInputChange = (event) => {
    setReview({
      ...review,
      [event.currentTarget.id]: event.currentTarget.value,
    });
  };

  const onSubmitHandeler = (event) => {
    event.preventDefault();
    addNewReview(review);
  };

  const clearForm = () => {
    setReview({
      rating: "",
      body: "",
    });
  };

  const addNewReview = (review) => {
    fetch(`/api/v1/products/${props.productId}/reviews`, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((response) => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then((response) => response.json())
      .then((body) => {
        if (body.review) {
          props.addReview(body.review);
          clearForm();
        } else if (body.errors[1] === "User must exist") {
          setErrors("Please sign in to make reviews");
        } else {
          setErrors(body.errors[0]);
        }
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  };

  return (
    <form className="callout secondary" onSubmit={onSubmitHandeler}>
      {errorMessage}
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
