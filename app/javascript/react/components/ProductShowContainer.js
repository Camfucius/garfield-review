import React from 'react'

const ProductShowContainer = (props) => {
  let formating = ""
  if (props.selectedProduct) {
    formating = "selected"
  }

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