import React from 'react'

export default function LargeProductList({product}) {
  const {name,price,descrption,rating} = product;
    return (

    <div>
        <h3>{name}</h3>
        <p>{price}</p>
        <p>{descrption}</p>
        <p>{rating}</p>


    </div>
  )
}
