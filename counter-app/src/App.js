import { useState } from 'react';
import './App.css';

function App() {

  const [counter, setCounter] = useState(0);

  const incValue = ()=>{
    setCounter(counter+1);
  }

  const decValue = ()=>{
    setCounter(counter-1);
  }

  const resetValue = ()=>{
    setCounter(0);
  }

  return (
    <div className="w-[100vw] h-[100vh] bg-slate-400 overflow-x-hidden overflow-y-auto flex flex-col justify-center">

      <h1 className='text-center mb-7 text-3xl font-bold'>Increment & Decrement</h1>

    <div className='w-[30%] h-[20%] bg-slate-700 mx-auto shadow-lg shadow-slate-100 rounded-lg'>

      <button className='w-[25%] h-[100%] text-center rounded-lg text-5xl font-bold text-white transition-all duration-200 hover:text-blue-400' onClick={incValue}> + </button>
      <input type="text" className='w-[50%] h-[100%] text-center bg-white rounded-xl text-5xl font-bold text-black transition-all duration-200' value={counter}/>
      <button className='w-[25%] h-[100%] text-center  rounded-lg text-5xl font-bold text-white transition-all duration-200 hover:text-blue-400' onClick={decValue}> - </button>
    </div>

    <button className='w-[10%] h-[5%] bg-gray-600 text-white mt-10 mx-auto shadow-lg shadow-yellow-100 transition-all duration-200 hover:text-blue-400' onClick={resetValue}>Reset Value</button>

    </div>
  );
}
export default App;
