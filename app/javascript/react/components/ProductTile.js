import React from "react";
import { Link } from "react-router-dom";

const ProductTile = ({ id, name, description, url, image_url }) => {
  return (
   
    <div className="column is-one-third">
       <Link to={`/products/${id}`} className="has-text-dark-orange">
      <div className="card is-shady">
        <div className="card-image">
          <figure className="image">
            <img src={image_url} alt="item image" />
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            <h4>
              <Link to={`/products/${id}`} className="has-text-dark-orange"> {name} </Link>
            </h4>
            <p>{description}</p>
          </div>
        </div>
      </div>
      </Link>
    </div>

  );
};

export default ProductTile;
