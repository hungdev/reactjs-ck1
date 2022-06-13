import {
  FaSearch,
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { products } from '../fakeData';
import Header from "../components/Header";
import { getImagePath } from '../utils';

const sizeList = [40, 41, 42, 43];

function App() {

  const cartData = useSelector(store => store.productSlice.cart);
  console.log('cartData', cartData);

  return (
    <div>
      {/* header */}
      <Header />

      {/* cart */}
      <div className='mt-16 px-16'>
        <div className='text-4xl font-bold mb-4'>Items in Cart: {cartData?.length}</div>

        <div className='flex flex-row'>
          <div className='flex-1 mr-8'>
            {cartData?.map((item, i) => (
              <div className='flex flex-row hover:border p-2 mb-6'>
                <img src={getImagePath(item.images?.[0])} alt={'shoes'} className='object-cover w-40 h-40' />
                <div className='ml-4 w-full'>
                  <div className='flex justify-between'>
                    <div className='font-bold'>{item?.name}</div>
                    <div className='font-bold'>8295$</div>
                  </div>
                  <div className='text-xs font-bold text-gray-600'>Nike</div>
                  <div>Black/Rough Green/White/Total Orange</div>
                  <div className='flex flex-row my-4'>
                    <div className="mr-10">
                      <label htmlFor="size">Size</label>
                      <select name="variant" id="variant" className="ml-2">
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                      </select>
                    </div>
                    <div className='flex flex-row'>
                      <div className='mr-2'>Quantity</div>
                      <div className='flex flex-row'>
                        <div className='h-6 w-6 bg-gray-200 flex justify-center items-center cursor-pointer'>-</div>
                        <div className='h-6 w-6 bg-gray-300 flex justify-center items-center'>{item?.quantity}</div>
                        <div className='h-6 w-6 bg-gray-200 flex justify-center items-center cursor-pointer'>+</div>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-row mt-4'>
                    <div className='mr-4 bg-gray-800 h-8 rounded px-2 flex justify-center items-center uppercase text-white cursor-pointer'>Move to wishlist</div>
                    <div className='bg-gray-800 h-8 rounded px-2 flex justify-center items-center uppercase text-white cursor-pointer'>Remove</div>
                  </div>
                </div>
              </div>
            ))}


          </div>

          <div className='w-72'>
            <div className='text-2xl font-bold'>ORDER SUMMARY</div>
            <div className='text-2xl font-bold'>({cartData?.length} ITEMS)</div>

            <div className='flex justify-between mb-4 pl-2 mt-4'>
              <div>Subtotal</div>
              <div>54876$</div>
            </div>
            <div className='flex justify-between mb-4 pl-2'>
              <div>Discount</div>
              <div className='text-green-500'>-0$</div>
            </div>
            <div className='flex justify-between mb-4 pl-2'>
              <div>Delivery Charges</div>
              <div className='text-green-500'>FREE</div>
            </div>
            <div className='flex justify-between font-bold mb-4 pl-2'>
              <div>Total Amount</div>
              <div className=''>54876</div>
            </div>
            <div className='w-full bg-gray-800 h-14 flex justify-center items-center uppercase font-medium text-white cursor-pointer'>
              CHECKOUT
            </div>
          </div>
        </div>
      </div>


    </div >
  );
}

export default App;
