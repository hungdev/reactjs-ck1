
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
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { products } from '../fakeData';
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { getProducts } from '../services/api';
import { getImagePath } from '../utils';
import Heart from '../assets/Heart';
import { addProduct } from '../reducers/productSlice';
import FilterSideBar from '../components/FilterSideBar';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  // console.log('location', location);

  useEffect(() => {
    const getAllProducts = async () => {
      // const data = await getFakeProducts(); // call with fake data
      var url = new URL(window.location.href);
      var productName = url.searchParams.get("name");
      const result = await getProducts({ name: productName });
      console.log('result', result);
      setData(result.data.data);

    };

    getAllProducts();

  }, [window.location.href]);

  /**
   * 1. khong co []: Cứ mỗi lần state, props thay đổi thì nó sẽ được gọi lại
   * 2. Có ngoặc []: Chỉ chạy duy nhất 1 lần sau render
   * 3. Có ngoặc [data, name]: thì nó sẽ được chạy lại khi mà cái giá trị bên trong thay đổi
   */

  const onMoveDetail = (item) => () => {
    navigate(`/detail/${item._id}`);
    // console.log(item);
  };


  const addToCart = (item) => () => {
    // dispatch({
    //   type: 'ADD_PRODUCT',
    //   data: item
    // });
    dispatch(addProduct(item));
  };

  const addToWishList = () => {
    // add to wishlist
  };


  return (
    <div>
      {/* header */}
      <Header />

      {/* product */}
      <div className="head">Products</div>
      <div className='product-container flex flex-row'>
        {/* filter column */}
        <FilterSideBar />

        {/* item column */}
        <div className='flex-1'>
          <div className='flex flex-row items-center'>
            <div className='mr-2'>Sort by</div>
            <select
              className='border rounded border-gray-600 h-9'
            // value={selectedSort}
            // onChange={(e) => {
            //     setSelectedSort(e.target.value);
            //     dispatch({ type: e.target.value });
            // }}
            >
              <option>Please select an option</option>
              <option value="HIGH_TO_LOW">
                Price: High to Low
              </option>
              <option value="LOW_TO_HIGH">
                Price: Low to High
              </option>
            </select>
          </div>

          {/* item */}
          <div className='flex flex-wrap overflow-auto mt-4 -mr-10' style={{ height: 'calc(100vh - 16rem)' }}>
            {data?.map((e, i) => (
              <div key={i} className='mr-12 mb-12' style={{ width: 'calc(25% - 48px)' }}>
                <div className="relative">
                  <img src={getImagePath(e.images?.[0])} alt={e.title} className='object-cover h-48 w-full' />
                  <div onClick={addToWishList} className="wrap-heart">
                    <Heart />
                  </div>
                </div>
                <div className='p-1'>
                  <div onClick={onMoveDetail(e)} className='font-bold'>{e.name}</div>
                  <div>{e.material}</div>
                  <div>{e.star}⭐</div>
                  <div>{e.price}$</div>
                </div>
                <div
                  onClick={addToCart(e)}
                  className='bg-gray-800 h-11 flex justify-center items-center uppercase font-medium text-white cursor-pointer'>
                  Add to cart
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div >
  );
};

export default App;
