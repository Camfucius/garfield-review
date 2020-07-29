import React, { useState, useEffect } from "react";
import ProductTile from "./ProductTile";

const ProductsIndexContainer = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/v1/products")
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
        setProducts(body.products);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  let productTiles = products.map((product) => {
    return (
      <ProductTile
        id={product.id}
        key={product.id}
        name={product.name}
        description={product.description}
        url={product.url}
        image_url={product.image_url}
      />
    );
  });

  return (
    <div>
      <h3> Products Index Container </h3>
      {productTiles}
    </div>
  );
};

export default ProductsIndexContainer;
