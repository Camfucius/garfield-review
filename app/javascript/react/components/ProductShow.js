import React from 'react'

const ProductShow = ({ id, name, description, url, image_url }) => {
  return(
    <div className="">
      <h2>{name}</h2>
      <div>
      <p>{description} </p>
      <a href={url}> Buy Here! </a> 
      <img src={image_url}/>
      </div>
    </div>
  )
}

export default ProductShow