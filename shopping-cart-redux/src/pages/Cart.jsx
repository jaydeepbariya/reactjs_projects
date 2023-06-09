import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div>
  {
    cart.length > 0  ? 
    (<div className="flex justify-center items-center gap-5">


      <div className="grid grid-cols-1">
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="w-[50%] flex-col gap-5 justify-center items-center row-span-3">

        <div className="flex-col justify-center gap-5">
          <h1 className="text-2xl font-bold text-green-400">Your Cart</h1>
          <div className="text-3xl font-bold text-green-400">Summary</div>
            <p className="text-xl font-bold text-blue-700">Total Items: {cart.length}</p>
        </div>

        <div className="flex-col justify-between gap-5">
          <p className="text-xl font-bold text-slate-400">Total Amount: <span className="text-orange-600">${totalAmount}</span></p>
          <button className="mt-10 bg-slate-700 py-1 px-2 text-white rounded-md hover:shadow-md shadow-black">
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div className="w-[100vw] flex-col justify-center items-center my-[20%] text-center gap-5">
      <h1 className="font-bold text-3xl">Cart Empty</h1>
      <Link to={"/"}>
        <button className="bg-slate-600 text-white px-2 py-1 rounded-md hover:shadow-lg shadow-black my-5">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
