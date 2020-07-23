import React from "react";
import { Link } from "react-router-dom";

const ProductTile = ({ id, name, description, url, image_url }) => {
  return (
    <div>
      <h4>
        <Link to={`/products/${id}`}> {name} </Link>
      </h4>
      <img src={image_url} />
      <hr />
    </div>
  );
};

export default ProductTile;
