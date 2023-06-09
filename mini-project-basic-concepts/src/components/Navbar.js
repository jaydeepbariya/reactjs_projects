import React from 'react';
import { toast } from 'react-hot-toast';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/Logo.svg';

const Navbar = ({loggedIn, setLoggedIn}) => {

    const navigate = useNavigate();

    const logout = ()=>{
        navigate("/");
        setLoggedIn(false);
        toast.success("Logged Out Successfully");
    }

  return (
    
    <div className='w-[100%] flex justify-evenly items-center py-4 bg-slate-700'>

        <div>
            <img src={logo} alt="Logo" width={160} height={60} loading="lazy" />
        </div>
        <nav>
            <ul className='flex justify-center items-center gap-5 text-white'>
                <li><NavLink to="/" >Home</NavLink></li>
                <li><NavLink to="/about" >About</NavLink></li>
                <li><NavLink to="/contact" >Contact</NavLink></li>
            </ul>
        </nav>

        <div>

        {
            loggedIn ?
            
            <div className='flex justify-center items-center gap-5 '>
                <NavLink to="/dashboard" className="p-2 bg-slate-500 rounded-md text-white"><button>Dashboard</button></NavLink>
                <NavLink to="/" className="p-2 bg-slate-500 rounded-md text-white"><button onClick={logout}>Log Out</button></NavLink>
            </div>
            :
            <div className='flex justify-center items-center gap-5'>
                <NavLink to="/login" className="p-2 bg-slate-500 rounded-md text-white"><button>Login</button></NavLink>
                <NavLink to="/signup" className="p-2 bg-slate-500 rounded-md text-white"><button>Sign Up</button></NavLink>
            </div>
        }


        </div>

    </div>
  )
}

export default Navbar