import React, { useState } from 'react'
import Template from './Template';
import loginImg from '../assets/login.png';

const Login = ({setLoggedIn}) => {

  return (
    <div className='w-[80%] flex justify-center items-center gap-5'>
      <Template 
        title="Welcome Back"
        desc1="Build Skills for Today, Tomorrow and Beyond"
        desc2="Education to future-proof your career"
        image={loginImg}
        formType="loginForm"
        setLoggedIn={setLoggedIn}
      />
    </div>
  )
}

export default Login