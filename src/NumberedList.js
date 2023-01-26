import React from 'react'

export default function NumberedList({
    items,
    resourceName, 
    itemsComponent:ItemsComponent
}) {
  return (
    <div>
        {items.map((item,i)=>(
          <>
          <h3>{i + 1}</h3>
          <ItemsComponent key={i} {...{ [resourceName]: item }} /></>
        ))}
    </div>
  )
}
