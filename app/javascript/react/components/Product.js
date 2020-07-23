import React from 'react'

const Product = ({ id, name, description, url, image_url }) => {
  return(
    <div>
      <h2>{name}</h2>
      <p>{description} </p>
      <a href={url}> Buy Here! </a> 
      <img src={image_url}/>
    </div>
  )
}

export default Product