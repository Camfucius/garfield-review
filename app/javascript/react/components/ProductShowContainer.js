import React, { useState, useEffect } from "react";
import ProductShow from "./ProductShow";

const ProductShowContainer = (props) => {
  const [getProduct, setProduct] = useState({
    id: null,
    name: "",
    description: "",
    url: "",
    image_url: "",
  });
  let productId = props.match.params.id;

  useEffect(() => {
    fetch(`/api/v1/products/${productId}`)
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
      .then((body) => setProduct(body))
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  return (
    <section className="container is-4">
      <div className="columns is-light features">
        <div className="column is-4 is-one-half">
            <div className="card is-4 is-shady">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={getProduct.image_url}
                    alt="Placeholder image"
                    className="modal-button"
                    data-target="modal-image2"
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="content">
                  <h4>{getProduct.name}</h4>
                  <p>{getProduct.description}</p>
                  <div className="buttons center">
                  <span
                    className="button has-text-dark is-4 has-background-info center"
                    data-target="modal-image2"
                  >
                    New Review
                  </span>

                  <span
                    className="button is-primary center"
                    data-target="modal-image2"
                  >
                    Buy!
                  </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p>Reviews to the left/under</p>
    </section>

  );
};

export default ProductShowContainer;
