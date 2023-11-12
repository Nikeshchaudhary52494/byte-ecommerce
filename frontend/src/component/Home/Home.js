import React, { useEffect } from "react";
import { BsMouse } from "react-icons/bs";
import Typed from "react-typed";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
// import { useAlert } from "react-alert";
import { useDispatch, useSelector } from 'react-redux';
import { STATUSES } from '../../store/statuses';
import { fetchProducts } from '../../slices/productSlice/productsSlice';
import ProductCard from "../layout/ProductCard";
import CategoriesList from "../Product/CategoriesList";




const Home = () => {

  const dispatch = useDispatch();
  // accessing store data using useSelector of products Slice

  const { data: products, status } = useSelector((state) => state.products);


  // const alert = useAlert();
  useEffect(() => {

    dispatch(fetchProducts());
  }, [dispatch]);



  if (status === STATUSES.LOADING) {
    return <div class="w-full grid place-content-center h-[80vh] ">
      <Loader />
    </div>

  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>;
  }

  return (
    <>
      <MetaData title="ECOMMERCE" />

      {/* Categories at the Top */}
      <div class="md:flex gap-5 my-1 p-1 place-content-center hidden" >
        <CategoriesList />
      </div>

      <div class=" min-h-screen md:min-h-[85vh]  flex flex-col dark:text-white dark:bg-slate-900 text-2xl justify-center items-center">
        <p class="font-mono text-xl">Welcome To Ecommerce</p>
        <h2 class="font-bold text-center m-24 text-3xl">
          <Typed
            strings={["FIND AMAZING PRODUCTS HERE..."]}
            typeSpeed={100}
            loop={true}
            backSpeed={50}
          />
        </h2>
        <a class="flex gap-2 items-center" href="#container">
          <BsMouse class="hover:text-blue-900 " />
          <span>Scroll</span>
        </a>
      </div>



      <h2 class="text-center text-black font-bold border-b-2  border-black m-2 max-w-4xl mx-auto">
        Featured Product
      </h2>
      <div
        id="container"
        class="flex mx-auto max-w-[80%] justify-center flex-wrap"
      >
        {products && products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>

    </>
  );
}

export default Home;
