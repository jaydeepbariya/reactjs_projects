import Random from './components/Random';
import Tag from './components/Tag';
import "./index.css";


export default function App() {
  return (
    <div className='w-[100vw] h-[100vh] flex-col items-center background overflow-x-hidden overflow-y-hidden'>
        <h1 className='w-[90%] bg-white text-black font-bold uppercase mx-auto my-5 py-3 text-center text-2xl rounded-lg shadow-sm shadow-white'>Random Gif</h1>

        <div className='w-[50%] flex flex-col items-center mx-auto gap-2'>
          <Random />
          <Tag />
        </div>
    </div>

  );
}
