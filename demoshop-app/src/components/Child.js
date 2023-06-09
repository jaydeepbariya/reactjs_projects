import React from 'react'

const Child = (value) => {

    const childValue = {
        name : "Pinku",
        city : "Mumbai"
    }

    value.printChildValue(childValue);



  return (
    <div>Child</div>
  )
}

export default Child