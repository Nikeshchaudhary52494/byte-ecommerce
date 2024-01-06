import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { STATUSES } from '../../store/statuses';
import { addToCart } from "../../slices/cartSlice/cartSlice.js"
import { useParams } from "react-router-dom";
import Loader from "../layout/Loader/Loader";
import Carousel from "react-material-ui-carousel"
import ReactStars from "react-rating-stars-component"
import ReviewCard from "./review/ReviewCard.js"
import AddReview from "./review/AddReview.js";
import { toast } from 'react-toastify';
import { getProductDetails } from "../../slices/productSlice/productsSlice.js";
const ProductDetails = () => {
  const [toggle, setToggle] = useState(false);
  const [numberOfProduct, setNumberOfProduct] = useState(1);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productDetails: product, status } = useSelector((state) => state.products);
  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getProductDetails({ id: id }));
  }, [dispatch, id]);

  const addProduct = (userId, productId, quantity) => {
    dispatch(addToCart({ userId, productId, quantity }));
  }


  if (status === STATUSES.LOADING) {
    return <div className="w-full grid place-content-center h-[80vh] ">
      <Loader />
    </div>

  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>;
  }

  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 20 : 25,
    value: product.rating,
    isHalf: true,
  };

  return (
    < >
      <div className=" max-w-5xl mx-auto p-4 flex items-center lg:flex-row lg:items-start flex-col lg:items-top gap-10 m-5 justify-center ">

        {/* Carousel section */}
        <div className=" md:w-1/2 w-[75%]" >
          <div className=" md:w-1/2  mx-auto w-[75%] h-[60%] ">
            <Carousel   >
              {product.images && product.images.map((item, i) => (
                <img className="min-h-50vh" key={item.url} src={item.url} alt="hello" />
              ))}
            </Carousel>
          </div>
        </div>

        {/* Details section */}
        <div className=" p-5 scrollbar  w-3/4 md:w-1/2">
          <h2 className="text-2xl" >{product.name}</h2>
          <p className="text-sm font-thin text-slate-600 border-b border-slate-400 mb-4 pb-4">#{product._id}</p>
          <ReactStars {...options} />
          <p className="border-b border-slate-400 mb-4 pb-4" >({product.numberOfReviews} Reviews)</p>
          <h2 className="text-orange-500 text-3xl font-bold">${product.price} <br /><p className="text-sm font-thin text-slate-600 border-b border-slate-400 mb-4 pb-4" > Including all taxes</p> </h2>
          <div className="flex flex-col items-center " >

            {/* Add to cart-button */}
            <div className="flex items-center ">
              <button
                className="p-4 w-5 h-[40px] grid place-content-center active:bg-slate-500 bg-slate-400 rounded-l-lg "
                onClick={() => setNumberOfProduct((prevCount) => prevCount - 1)}
              >-</button>
              <input
                className="border-y-2 h-[40px] text-center w-24 border-slate-400 outline-none  "
                value={numberOfProduct}
                type="text"
                style={{ pointerEvents: "none" }}
              />
              <button
                className="p-4 w-5 h-[40px] active:bg-slate-500 bg-slate-400 rounded-r-lg grid place-content-center "
                onClick={() => setNumberOfProduct((prevCount) => prevCount + 1)}
              >+</button>
            </div>
            <button
              className="w-40 h-[40px] bg-cyan-500 rounded-3xl my-4 active:bg-cyan-600 duration-500"
              onClick={() => {
                addProduct(user._id, product._id, numberOfProduct);
              }}
              disabled={product.stock < 1}
            >Add to Cart</button>
          </div>
          <p className="border-b border-slate-400 mb-4 pb-4 font-bold">Status: <span className={`font-normal ${product.stock < 1 ? `text-red-400` : 'text-green-400'}`}>{`${product.stock < 1 ? `Out of Stock` : `Only ${product.stock} Unit left`}`}</span> </p>
          <p><span className="text-2xl font-bold" >
            Description:
          </span> <br />
            <span className="text-sm">{product.description}</span>
          </p>
        </div>
      </div >

      <div className=" w-3/4  max-w-3xl flex p-4 lg:px-12  flex-col  mx-auto items-center justify-between sm:flex-row ">
        <h3 className="text-2xl text-center font-medium " >Reviews</h3>

        <button className="text-white  font-medium w-[200px] h-[40px] bg-blue-200 rounded-lg" onClick={() => setToggle(!toggle)}> Add Review</button>
        <div className={`inset-0 z-10 fixed flex justify-center items-center bg-black backdrop-filter bg-opacity-50 backdrop-blur-md ${toggle ? `block` : `hidden`}`}>
          <AddReview toggle={toggle} setToggle={setToggle} productId={product._id} />
        </div>
      </div>
      {/* Review section */}

      {
        product.reviews && product.reviews[0] ? (
          <div className="flex flex-col gap-10 items-center justify-center p-4 ">
            {product.reviews && product.reviews.map((review) =>
              <ReviewCard review={review} />
            )}
          </div>
        ) : (
          <p className="text-center mb-32 text-red-400 font-medium">
            No Rerview Available
          </p>
        )
      }
    </>
  )
}

export default ProductDetails