import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import {toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
    const [signupForm, setSignupForm] = useState({
        firstName : "",
        lastName : "",
        email : "",
        password1 : "",
        password2 : ""
      });

      const navigate = useNavigate();
    
      const [showPassword, setShowPassword] = useState(false);
    
      const handleChange = (event, field) =>{
        setSignupForm({...signupForm, [field]:event.target.value});
      }
    
      const signup = (event)=>{
        event.preventDefault();

        if(signupForm.password1 !== signupForm.password2){
          toast.error("Passwords not matching");
          return;
        }
    
        navigate("/");
        toast.success("Signup Done");
      }
    
      return (
        <div className='flex-col justify-center rounded-md'>
          
            <div className='mx-auto p-3 bg-slate-600 gap-4 rounded-lg w-[40%]'>
              <button className='bg-slate-400 text-black p-2 rounded-lg mx-3'>Student</button>
              <button className='bg-slate-400 text-black p-2 rounded-lg'>Instructor</button>
            </div>
          
          <form onSubmit={signup} className="w-[70%] flex-col mx-auto justify-center items-center gap-5 bg-slate-600 p-4 rounded-lg my-4"> 
            <div className='flex-col justify-start my-4'>
              <label htmlFor='firstName'>First Name : </label>
              <input type="text" value={signupForm.firstName} onChange={(event)=> handleChange(event, "firstName")} required
                placeholder='First Name'
              />
            </div>
            <div className='flex-col justify-start my-4'>
              <label htmlFor='lastName'>Last Name : </label>
              <input type="text" value={signupForm.lastName} onChange={(event)=> handleChange(event, "lastName")} required
                placeholder='Last Name'
              />
            </div>
            <div className='flex-col justify-start my-4'>
              <label htmlFor='email'>Email : </label>
              <input type="email" value={signupForm.email} onChange={(event)=> handleChange(event, "email")} required
                placeholder='Enter Email'
              />
            </div>
    
            <div className='flex-col justify-start my-4'>
            <div>
              <label htmlFor='password1'>Password : </label>
              <input type={showPassword ? "text" :"password"} value={signupForm.password1} onChange={(event)=> handleChange(event, "password1")} required
                placeholder='Enter Password'
              />
    
              <span onClick={()=>setShowPassword((prev)=> !prev)}>
              {
                showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)
              }
              </span>
            </div>
            <div className='flex-col justify-start my-4'>
              <label htmlFor='password2'>Confirm Password : </label>
              <input type={showPassword ? "text" :"password"} value={signupForm.password2} onChange={(event)=> handleChange(event, "password2")} required
                placeholder='Confirm Password'
              />
            </div>
            </div>
    
            <div className='flex justify-center items-baseline my-4 rounded-md'>
              <button className='bg-slate-400 text-black p-2'>Sign Up</button>
            </div>
          </form>
        </div>
      )
}

export default SignupForm