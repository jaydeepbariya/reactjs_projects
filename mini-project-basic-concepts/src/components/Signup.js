import React, { useState } from 'react'
import signupImg from '../assets/signup.png';
import Template from './Template';

const Signup = ({setLoggedIn}) => {

  return (
    <div>
      <Template 
        title="Register Here"
        desc1="Get Into World of Learning "
        desc2="Education to future-proof your career"
        image={signupImg}
        formType="signup"
        setLoggedIn={setLoggedIn}
      />
    </div>
  )
}

export default Signup