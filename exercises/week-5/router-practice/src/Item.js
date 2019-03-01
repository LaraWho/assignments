import React from 'react';
import products from './products.json';


const Item = (props) => {

  const { _id } = props.match.params
  const item = products.find((item) => {
    return item._id === _id
  })

  return(
    <div className="item">
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <p>£{item.price}</p>
    </div>
  )
}

export default Item;