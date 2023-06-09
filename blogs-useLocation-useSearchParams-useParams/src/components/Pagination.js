import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {

  const appContext = useContext(AppContext);



  return (
    <div className='w-[70%] mx-auto flex justify-evenly py-4 border-t-2'>
      <div className='flex justify-center items-baseline gap-5'>
        {
          appContext.page > 1 
          ? 
          (<button onClick={()=>appContext.handlePageChange(appContext.page - 1)} className="px-2 py-2 font-sans bg-slate-500 rounded-md">Previous</button>) 
          : 
          (<p></p>)
        }
        {
          appContext.page < appContext.totalPage
          ? 
          (<button onClick={()=> appContext.handlePageChange(appContext.page + 1)} className="px-2 py-2 font-sans bg-slate-500 rounded-md">Next</button>) 
          : 
          (<p></p>)
        }
      </div>

      <div className='font-bold text-xl'>
        {appContext.page} OF {appContext.totalPage}
      </div>
    </div>
  )
}

export default Pagination