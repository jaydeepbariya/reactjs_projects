import React, { useState } from 'react'

const Filter = ({filterData}) => {

  const [category, setCategory] = useState("");

  const clickHandler = (categoryTitle)=>{
    setCategory(categoryTitle);
  }

  return (
    <div className='w-[100%] p-4 flex justify-center items-center gap-8'>
    {
      filterData?.map((filterField, index)=>{
        return (
          <button className='border-white border-2 transition-all duration-200 bg-bgDark rounded-md p-2 hover:text-white bg-bgDark1'
            onClick={()=>clickHandler(filterData.title)}
          >{filterField.title}</button>
        )
      })
    }
    </div>
  )
}

export default Filter