import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';
import NewProduct from './components/NewProduct';

function App() {

  const handleEvent = (name)=>{
    alert("handled by "+name);
  }

  return (
    <div className="App">
        <h1>App Component</h1>

        <Item></Item>
        <ItemDate day="5th" month="April" year="2000"></ItemDate>

        <button onClick={()=>handleEvent("Jaydeep")}>Add To Cart</button>

        <NewProduct />

     
    </div>
  );
}

export default App;
