import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import ErrorList from "./ErrorList";
import _ from "lodash";

const ProductFormContainer = (props) => {
  const [productRecord, setProductRecord] = useState({
    name: "",
    url: "",
    image_url: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  const validForSubmission = () => {
    let submitErrors = {}
    const requiredFields = [
      "name",
      "description",
      "url",
      "image_url"
    ]
    requiredFields.forEach((field) => {
      if (productRecord[field].trim() === "") {
        submitErrors = {
          ...submitErrors,
          [field]: "is blank",
        }
      }
    })
    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  const [shouldRedirect, setShouldRedirect] = useState(false);

  const handleInputChange = (event) => {
    setProductRecord({
      ...productRecord,
      [event.currentTarget.id]: event.currentTarget.value,
    });
  };

  const onSubmitHandeler = (event) => {
    event.preventDefault();
    if (validForSubmission()) {
      addNewProduct(productRecord);
    }
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
        setShouldRedirect(true);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  };

  if (shouldRedirect) {
    return <Redirect to="/products" />;
  }
  return (
    <form
      className="callout secondary"
      id="shipping-address-form"
      onSubmit={onSubmitHandeler}
    >
      <ErrorList errors={errors} />
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
