import React, { useState } from 'react';
import Card from './Card';

const Tours = ({tours, removeTour}) => {
    
    return (
        <div className='grid grid-cols-3 gap-3'>
        {
            tours.map((tourData,index)=>{
                return (
                    <Card key={index} tourData={tourData} removeTour={removeTour}/>
                )
            })
        }
        </div>

  )
}

export default Tours