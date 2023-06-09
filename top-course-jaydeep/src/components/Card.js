import React, { useState } from 'react';
import {FcLike,FcLikePlaceholder} from 'react-icons/fc';
import { toast, ToastContainer } from 'react-toastify';

const Card = ({course}) => {

  const [liked, setLiked] = useState(false);

  const clickHandler = ()=>{

    if(liked==true){
        setLiked(false);
        toast.warn("Like Removed");
      }
      else{
        setLiked(true);
        toast.success("Like Added");
      }
  }
  return (
    <div className="relative w-[100%] shadow-lg bg-bgDark2 rounded-md p-3">
      <div>
        <img src={course.image.url} alt={course.image.alt} className="rounded-md"/>
        <button className='absolute right-3 top-40 w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center'
            onClick={clickHandler}
        >
          {
            liked ? <FcLike fontSize={20}/> : <FcLikePlaceholder fontSize={20}/>
          }
        </button>
      </div>

      <div className='mt-10 flex-col justify-left gap-4'>
        <p className='font-bold'>{course.title}</p>
        <p className='mt-10 mb-5'>{course.description}</p>
      </div>

      <ToastContainer />
    </div>
  )
}

export default Card