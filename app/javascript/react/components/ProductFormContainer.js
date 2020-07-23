import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const ProductFormContainer = (props) => {
  const [productRecord, setProductRecord] = useState({
    name: "",
    url: "",
    image_url: "",
    description: "",
  });

  const [shouldRedirect, setShouldRedirect] = useState(false);

  const handleInputChange = (event) => {
    setProductRecord({
      ...productRecord,
      [event.currentTarget.id]: event.currentTarget.value,
    });
  };

  const onSubmitHandeler = (event) => {
    event.preventDefault();
    addNewProduct(productRecord);
  };

  const addNewProduct = (product) => {
    fetch(`/api/v1/products`, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
  }
  return (
    <form
      className="callout secondary"
      id="shipping-address-form"
      onSubmit={onSubmitHandeler}
    >
      <h1>New Garfield Product Form</h1>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleInputChange}
          value={productRecord.name}
        />
      </div>
      <div>
        <label htmlFor="url">URL:</label>
        <input
          type="text"
          id="url"
          name="url"
          onChange={handleInputChange}
          value={productRecord.url}
        />
      </div>
      <div>
        <label htmlFor="image_url">Image URL:</label>
        <input
          type="text"
          id="image_url"
          name="image_url"
          onChange={handleInputChange}
          value={productRecord.image_url}
        />
      </div>

      <div>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          onChange={handleInputChange}
          value={productRecord.description}
        />
      </div>

      <div className="button-group">
        <input type="submit" className="button" value="Submit " />
      </div>
    </form>
  );
};

export default ProductFormContainer;
