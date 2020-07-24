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
  debugger
  useEffect(() => {
    let productId = props.match.params.id
    debugger
    fetch(`/api/v1/products/${productId}`, {
      credentials: "same-origin",
    })
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
    <div>
      <ProductShow 
        key={getProduct.id}
        id={getProduct.id}
        name={getProduct.name} 
        url={getProduct.url}
        description={getProduct.description}
        image_url={getProduct.image_url}
      />
    </div>
  )
}

export default ProductShowContainer