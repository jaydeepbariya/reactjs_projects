import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { RxCrossCircled } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  
    const loggedIn = true;

    const navbar = useRef();

    const toggleNavbar = ()=>{
        if(navbar.current.style.visibility==='visible'){
          navbar.current.style.visibility='hidden';
        }
        else{
          navbar.current.style.visibility='visible';
        }
    }

  return (
    <div className="md:w-[100%] md:flex md:flex-row md:justify-around md:items-baseline md:py-3 md:gap-7 sm:flex-col sm:items-center shadow-xl text-white">
      <Link to={"/"}>
        <p className="font-mono font-black text-2xl">
          Jaydeep<span className="text-gray-500">Bariya</span>
        </p>
      </Link>

      <button className="md:invisible sm:visible p-4" onClick={()=> toggleNavbar()}>
        <GiHamburgerMenu size={25} color={"white"}/>
      </button>

      <ul className="flex flex-row justify-center gap-x-7 max-[768px]:flex max-[768px]:flex-col max-[768px]:justify-between max-[768px]:ml-10" ref={navbar}>

        <li className="transition-all duration-200 hover:underline my-5 hover:underline-offset-4">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="transition-all duration-200 hover:underline my-5 hover:underline-offset-4">
          <Link to={"/services"}>Services</Link>
        </li>
        <li className="transition-all duration-200 hover:underline my-5 hover:underline-offset-4">
          <Link to={"/about"}>About</Link>
        </li>
        <li className="transition-all duration-200 hover:underline my-5 hover:underline-offset-4">
          <Link to={"/contact"}>Contact</Link>
        </li>
        <button className="md:invisible sm:visible p-4">
          <RxCrossCircled size={25} color={"white"} onClick={()=>toggleNavbar()}/>
        </button>
      </ul>


      <div>
        {loggedIn ? (
          <div className="flex justify-center gap-x-7">
            <div className="px-2 py-1 bg-slate-600 rounded-lg hover:shadow-lg hover:shadow-white hover:scale-105">
              <Link to={"/dashboard"}>Dashboard</Link>
            </div>
            <div className="px-2 py-1 bg-slate-600 rounded-lg hover:shadow-lg hover:shadow-white hover:scale-105">
              <Link to={"/"}>Logout</Link>
            </div>
          </div>
        ) : (
          <div className="flex justify-center gap-x-7">
            <div className="px-2 py-1 bg-slate-600 rounded-lg hover:shadow-lg hover:shadow-white hover:scale-105">
              <Link to={"/login"}>Login</Link>
            </div>
            <div className="px-2 py-1 bg-slate-600 rounded-lg hover:shadow-lg hover:shadow-white hover:scale-105">
              <Link to={"/signup"}>Sign Up</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
