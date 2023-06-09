import React, { useState } from 'react'

const Card = ({tourData,removeTour}) => {

    const [readMore, setReadMore] = useState(false);

    const [description, setDescription] = useState(`${tourData.info.substring(0,200)}....`);


    const toggleDesc = ()=>{
        if(readMore==false){
            setDescription(tourData.info);
            setReadMore(true);
        }
        else{
            setDescription(`${tourData.info.substring(0,200)}....`);
            setReadMore(false);
        }
    }
  return (
    <div className='relative w-[100%] p-10 m-2 bg-stone-100 rounded-lg'>
            <img src={tourData.image} className="w-[300px] h-[200px]"/>

        <div className='flex-col gap-3 justify-center items-center'>
            <p className='font-bold text-red-500 text-xl my-3'>{tourData.name}</p>
            <p className='font-bold text-green-500 text-md my-3'>&#x20B9;{tourData.price}</p> 
        </div>

        <div className='my-3'>
            <p>{description}</p>
            <button onClick={toggleDesc}><span className='underline'>{(readMore) ? "Show Less" : "Read More"}</span></button>
        </div>

        <button onClick={()=> removeTour(tourData.id)} className="absolute bottom-3 right-5 bg-blue-300 text-white rounded-full px-4 py-1">Not Interested</button>
    </div>
  )
}

export default Card