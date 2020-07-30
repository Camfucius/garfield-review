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
    let submitErrors = {};
    const requiredFields = ["name", "description", "url", "image_url"];
    requiredFields.forEach((field) => {
      if (productRecord[field].trim() === "") {
        submitErrors = {
          ...submitErrors,
          [field]: "is blank",
        };
      }
    });
    setErrors(submitErrors);
    return _.isEmpty(submitErrors);
  };

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

    <div>
      <h1 className="title has-text-light center pt-4">New Garfield Product Form</h1>
      <section className="container is-6 center">
        <form onSubmit={onSubmitHandeler}>
          <div className="column is-4">
            <label htmlFor="name">
              <input
                type="text"
                id="name"
                name="name"
                size="50"
                className="is-rounded"
                placeholder="Name"
                onChange={handleInputChange}
                value={productRecord.name}
              />
            </label>
          </div>
          <div className="column is-4">
            <label htmlFor="url">
              <input
                type="text"
                id="url"
                name="url"
                size="50"
                placeholder="URL"
                onChange={handleInputChange}
                value={productRecord.url}
              />
            </label>
          </div>
          <div className="column is-4">
            <label htmlFor="image_url">
              <input
                type="text"
                id="image_url"
                name="image_url"
                size="50"
                placeholder="Image URL"
                onChange={handleInputChange}
                value={productRecord.image_url}
              />
            </label>
          </div>
          <div className="column is-4">
            <label htmlFor="description">
              <input
                type="text"
                id="description"
                size="50"
                name="description"
                placeholder="Description"
                onChange={handleInputChange}
                value={productRecord.description}
              />
            </label>
          </div>
          <div className="column is-4">
            <div className="button-group">
              <input type="submit" className="button is-primary has-text-dark has-text-weight-bold" value="Submit " />
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ProductFormContainer;
