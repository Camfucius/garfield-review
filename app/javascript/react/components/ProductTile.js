import React from "react";
import { Link } from "react-router-dom";

const ProductTile = ({ id, name, description, url, image_url }) => {
  return (
      <div className="column is-4 mt-6 pt-6">
        <div className="card is-shady  mt-6	pt-6">
          <div className="card-image">
            <figure className="image">
              <img src={image_url} alt="item image" />
            </figure>
          </div>
          <div className="card-content">
            <div className="content">
              <h4>
                {" "}
                <Link to={`/products/${id}`}> {name} </Link>
              </h4>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ProductTile;
