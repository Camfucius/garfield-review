import React, { useState, useEffect } from "react";
import ProductShow from "./ProductShow";

const ProductShowContainer = (props) => {
  const [product, setProduct] = useState({});
  const [reviews, setReviews] = useState([]);

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
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        setProduct(body.product);
        setReviews(body.product.reviews);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  return (
    <div className="">
      <ProductShow
        key={product.id}
        id={product.id}
        name={product.name}
        description={product.description}
        url={product.url}
        image_url={product.image_url}
        reviews={reviews}
      />
    </div>
  );
};

export default ProductShowContainer;
