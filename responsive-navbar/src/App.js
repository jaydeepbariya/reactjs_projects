import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
function App() {
  return (
    <div className='w-[100vw] min-h-screen overflow-x-hidden overflow-y-auto bg-slate-400'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
