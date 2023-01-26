import React from 'react'

export default function SmallProductList({product}) {
    const {name,price} = product;
  return (
    <div>
        <h3>
            {name} 
        </h3>
    </div>
  )
}
