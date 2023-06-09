import React from 'react'

const ItemDate = (props) => {


  return (
    <div>
    {
      props.children
    }
        <div>{props.day}</div>
        <div>{props.month}</div>
        <div>{props.year}</div>
    </div>
  )
}

export default ItemDate