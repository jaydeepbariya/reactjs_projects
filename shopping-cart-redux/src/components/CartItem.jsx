
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div className="w-[70%] flex justify-center items-start mx-auto border p-3 mt-10">

      <div className="flex justify-start gap-5 ">

        <div>
          <img src={item.image} className="max-w-[200px] max-h-[200px]"/>
        </div>
        <div>
          <h1 className="text-2xl text-blue-700 my-3">{item.title}</h1>
          <p className="text-md text-black my-2">{item.description}</p>
          <div className="flex justify-between items-baseline">
            <p className="text-3xl font-bold text-green-600 mt-10 mb-5">${item.price}</p>
            <div
            onClick={removeFromCart} className="cursor-pointer w-[50px] h-[50px] bg-gray-300 rounded-full flex justify-center items-center">
              <FcDeleteDatabase width={100}/>
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
