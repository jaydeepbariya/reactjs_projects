import React from 'react';
import frameImg from '../assets/frame.png';
import loginImg from '../assets/login.png';
import signup from '../assets/signup.png';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const Template = ({title, desc1, desc2, image,formType, setLoggedIn }) => {
  return (
    <div className='w-[80%] flex justify-center items-center gap-10 mt-10'>
    <div className='flex-col justify-start'>
    <div>
            <p className='text-3xl font-bold'>{title}</p>
        </div>

        <p className='text-lg my-4'>
            <span className='text-black'>{desc1}</span> 
            <span className='text-blue-400'>{desc2}</span> 
        </p>

        <div>
        {
            (formType=="loginForm") 
            ?
            <LoginForm setLoggedIn={setLoggedIn}/>
            :
            <SignupForm setLoggedIn={setLoggedIn}/>
        }
        </div>

        <div className='flex items-baseline justify-center'>
            <div className='h-0.5 w-10 bg-black'></div>
            <div>OR</div>
            <div className='h-0.5 w-10 bg-black'></div>
        </div>

        <button className='flex justify-center items-center mx-auto'>
        {
            (formType=="loginForm")
            ?
            <button className='bg-slate-400 text-black p-2'>Login with Google</button>
            :
            <button className='bg-slate-400 text-black p-2'>Sign Up with Google</button>
        }     
        </button>

    </div>
        <div className='relative flex-col justify-center items-center shadow-sm shadow-red-200'>
            <div className='w-[420px] h-[420px]'>
                <img src={frameImg} />
            </div>

            <div className='absolute top-0 left-0 w-[400px] h-[400px]'>
                {
                    (formType=="loginForm")
                    ?
                    <img src={loginImg} />
                    :
                    <img src={signup} />
                }
            </div>
        </div>
    </div>
  )
}

export default Template