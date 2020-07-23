import React, { useState, useEffect } from 'react'

const ProductShowContainer = (props) => {
  const [getProduct, setProduct] = useState("")

  useEffect(() => {
    debugger
    fetch("/api/product.json")
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
    .then(body => {
      let product = body.product.text
      setProduct(product) 
    })
    .catch(error => console.error(`Error in fetch: $(error.message}`))
  }, [])

  return (
    <div>
      {props.name} 
      {props.url}
      {props.description}
      {props.image_url}
    </div>
  )
}

export default ProductShowContainer