import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import {toast} from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router-dom';

const LoginForm = ({setLoggedIn}) => {
    const [loginData, setLoginData] = useState({
        email : "",
        password : ""
      });
    
      const [showPassword, setShowPassword] = useState(false);
    
      const navigate = useNavigate();

      const handleChange = (event, field) =>{
        setLoginData({...loginData, [field]:event.target.value});
      }
    
      const login = (event)=>{
        event.preventDefault();
    
        toast.success("Login Done");
        setLoggedIn(true);
        navigate("/dashboard");
      }
    
      return (
        <div className='flex justify-center rounded-md'>
          <form onSubmit={login} className=' w-[70%] flex-col justify-center items-center gap-5 bg-slate-600 p-4 rounded-sm'>
            <div className='flex-col justify-start my-4'>
              <label htmlFor='email'>Email Address : </label>
              <input type="text" value={loginData.email} onChange={(event)=> handleChange(event, "email")} placeholder="Enter Email" required={true}/>
            </div>
            <div className='flex-col justify-start items-baseline my-4'>
              <label htmlFor='password'>Password : </label>
              <input type={showPassword ? "text" :"password"} value={loginData.password} onChange={(event)=> handleChange(event, "password")} placeholder="Enter Password" required={true} />
              
              <span onClick={()=>setShowPassword((prev)=> !prev)}>
              {
                showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)
              }
              </span>
            </div>
    
              <div className='flex justify-center items-baseline my-4 rounded-md'>
                <button className='bg-slate-400 text-black p-2'>Log In</button>
              </div>
    
            <div>
    
            </div>
          </form>
        </div>
      )
}

export default LoginForm