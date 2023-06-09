import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import { increment,decrement } from './redux/slices/CounterSlice';

function App() {

  const count = useSelector((state)=> state.counter.value);

  const dispatch = useDispatch();

  return (
    <div>
      <h3>Counter App</h3>

      <button onClick={()=>dispatch(increment())}>Increment</button>
      <h1>{count}</h1>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
