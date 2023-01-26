import React from 'react'

export default function RegularList({
    items,
    resourceName, 
    itemsComponent:ItemsComponent
}) {
  return (
    <div>
        {items.map((item,i)=>(
            <ItemsComponent key={i} {...{[resourceName]:item}}/>
        ))}
    </div>
  )
}
