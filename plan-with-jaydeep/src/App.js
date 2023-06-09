import { useState } from 'react';
import './App.css';
import Tours from './components/Tours';
import data from './data';

function App() {

  const [tours, setTours] = useState(data);
  const [noTours, setNoTours] = useState(false);

  const removeTour = (id)=>{
    const newTours = tours.filter((tour)=> tour.id !== id);
    
    if(newTours.length==0){
      setNoTours(true);
    }

    setTours(newTours);
  }

  const getTours = ()=>{
    setTours(data);
    setNoTours(false);
  }


  return (
    <div className='h-[100vh] w-[100vw] bg-slate-300 overflow-y-auto overflow-x-hidden flex-col justify-center items-center'>
      <h1 className='p-4 text-center text-5xl font-bold mb-10 mt-5'>Plan with Jaydeep</h1>

      <div className='w-[75%] mx-auto text-gray-600'>
        {
          (noTours==true) 
          ?
          <div className='flex-col gap-5 items-center justify-center'>
            <h1 className='p-4 text-center text-5xl font-bold mb-10 mt-5'>No Tours Left</h1>
            <button onClick={getTours} className="p-3 text-center bg-gray text-black rounded-lg hover:text-blue-500 shadow-md">Refresh</button>
          </div>
          :
          <Tours tours={tours} removeTour={removeTour}/>
        }
      </div>
    </div>
  );
}

export default App;
