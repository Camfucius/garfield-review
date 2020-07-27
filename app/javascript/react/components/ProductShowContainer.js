import React, { useState, useEffect } from 'react'
import ProductShow from "./ProductShow"

const ProductShowContainer = (props) => {
  const [getProduct, setProduct] = useState({
    id: null,
    name: "",
    description: "",
    url: "",
    image_url: ""
  })
  let productId = props.match.params.id

  useEffect(() => {
    fetch(`/api/v1/products/${productId}`)
      .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`, 
          error = new Error(errorMessage)
        throw error
      }
    })
    .then(response => response.json())
    .then(body => setProduct(body))
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])
  
  return (
    <div className="">
      <h2>{getProduct.name}</h2>
      <div>
        <p>{getProduct.description} </p>
        <a href={getProduct.url}> Buy Here! </a> 
        <img src={getProduct.image_url} />
      </div>
    </div>
  )
}

export default ProductShowContainer