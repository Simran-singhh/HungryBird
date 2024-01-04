import React from 'react'
import Item from './Item'

const ItemsList = ({items}) => {
 console.log("items",items)

  return (
    <div>
       {items.map((item)=>
       <Item key={item.card.id} item={item}/>
       )}
    </div>
  )
}

export default ItemsList
