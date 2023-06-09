import axios from "axios";
import { useEffect, useState } from "react";
import useGif from "../hooks/useGif";


export default function Random() {


  const {gif, loading, fetchData} = useGif();

  const clickHandler = ()=>{
    fetchData();
  }

  return (
  <div className="w-[100%] h-[300px] flex flex-col items-center justify-center gap-5 bg-gray-500 rounded-lg border-white border-2">
      <h2 className="uppercase font-bold text-2xl underline mt-4">Random Gif</h2>
      
      {
        loading ? (<div className="spinner"></div>) : (<img src={gif} className="w-[200px] h-[140px] my-2"/>)
      }

      <button className="uppercase px-4 py-1 bg-slate-900 text-white rounded-sm my-2" onClick={clickHandler}>Generate Gif</button>
  </div>);
}
