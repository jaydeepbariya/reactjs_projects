import React, { useState } from 'react'

const NewProduct = () => {
 
    const [product,setProduct] = useState({
        name : "",
        date : ""
    });

    const handleChange = (event, field) =>{
        setProduct({...product, [field]:event.target.value});
    }

    const submitForm = (event)=>{
        event.preventDefault();

        alert("New product submitted "+ JSON.stringify(product));
    }


  return (
    <div>
        <form onSubmit={(e)=>submitForm(e)}>
            <div className='form-control'>
                <label htmlFor='name'>Name : </label>
                <input type="text" 
                    value={product.name}
                    onChange={(event)=> handleChange(event, "name")}
                />
            </div>
            <div className='form-control'>
                <label htmlFor='date'>Date : </label>
                <input type="date" max="2023-12-01" min="2023-01-01"
                    value={product.date}
                    onChange = {(event)=> handleChange(event, "date")}
                />
            </div>

            <div className='btn'>
                <button type='submit'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default NewProduct