import React, { useEffect } from "react";
import { BsMouse } from "react-icons/bs";
import Typed from "react-typed";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
import { useDispatch, useSelector } from 'react-redux';
import { STATUSES } from '../../store/statuses';
import { fetchProducts } from '../../slices/productSlice/productsSlice';
import ProductCard from "../layout/ProductCard";
import CategoriesList from "../Product/CategoriesList";
import Footer from "../layout/Footer";
import { useNavigate } from "react-router-dom";


const Home = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data: products, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);



  if (status === STATUSES.LOADING) {
    return <div className="w-full grid place-content-center h-[80vh] ">
      <Loader />
    </div>
  }

  return (
    <>
      <MetaData title="BYTE ECOMMERCE" />

      {/* Categories at the Top */}
      <div className="md:flex overflow-x-auto gap-5 my-1 p-1 place-content-center hidden" >
        <CategoriesList />
      </div>

      <div className=" min-h-screen md:min-h-[85vh]  flex flex-col text-white bg-custom-background text-2xl justify-center items-center">
        <p className="font-mono text-xl">Welcome To Byte Ecommerce</p>
        <h2 className="font-bold text-center m-24 text-3xl">
          <Typed
            strings={["FIND AMAZING PRODUCTS HERE..."]}
            typeSpeed={100}
            loop={true}
            backSpeed={50}
          />
        </h2>
        <a className="flex gap-2 items-center hover:text-cyan-600 duration-300 " href="#container">
          <BsMouse />
          <span>Scroll</span>
        </a>
      </div>



      <h2 className="text-center text-black font-bold border-b-2  border-black m-2 max-w-4xl mx-auto">
        Featured Product
      </h2>
      <div
        id="container"
        className="flex mx-auto max-w-[80%] justify-center flex-wrap" >
        {products && products.slice(0, 8).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-center   my-5">
        <button className="p-2  bg-blue-500 rounded-md active:bg-blue-700 text-white font-bold " onClick={() => navigate('/products')}>Show More</button>
      </div>
      <Footer />
    </>
  );
}

export default Home;
