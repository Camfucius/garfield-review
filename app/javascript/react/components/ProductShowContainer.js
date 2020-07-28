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

  const [reviewRecord, setReviewRecord] = useState([]);
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

  useEffect(() => {
    fetch(`/api/v1/products/${productId}/reviews`, {
      credentials: "same-origin",
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
        setReviewRecord(body);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  return (
    <div className="">
      <ProductShow
        key={getProduct.id}
        id={getProduct.id}
        name={getProduct.name}
        description={getProduct.description}
        url={getProduct.url}
        image_url={getProduct.image_url}
        reviews={reviewRecord}
      />
    </div>
  );
};

export default ProductShowContainer;
