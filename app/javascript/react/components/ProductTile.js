import React from "react";
import { Link } from "react-router-dom";

const ProductTile = ({ id, name, description, url, image_url }) => {
  return (
    <div>
      <h4>
        <Link to={`/products/${id}`}> {name} </Link>
      </h4>
      <h6>{description}</h6>
      <h6>
        <a hrf={product.url}>Buy {name} here!</a>
      </h6>
      <img src={image_url} />
      <hr />
    </div>
  );
};

export default ProductTile;
