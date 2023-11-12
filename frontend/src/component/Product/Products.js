import React, { useEffect, useState } from "react";
import Loader from "../layout/Loader/Loader";
import { useDispatch, useSelector } from 'react-redux';
import { STATUSES } from '../../store/statuses';
import { fetchProducts2 } from '../../slices/productSlice/productsSlice';
import ProductCard from "../layout/ProductCard";
import { Link, useParams } from "react-router-dom";
import { FaFilter } from "react-icons/fa"
const Products = () => {

    const dispatch = useDispatch();
    const { data: products, status } = useSelector((state) => state.products);
    const { keyword } = useParams();


    useEffect(() => {
        dispatch(fetchProducts2({ keyword }))
    }, [dispatch, keyword]);

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
            <Link to="/products/filter" >
                <div className="bg-blue-600  m-2 fixed flex  gap-5 items-center justify-center text-white rounded-full p-2 sm:px-4 sm:py-2">
                    < FaFilter />
                    <p className=" sm:block hidden">Filters</p>
                </div></Link>
            <div
                class="flex mx-auto max-w-[80%] justify-center flex-wrap"
            >
                {products && products.map((product) => (
                    <ProductCard product={product} />
                ))}
            </div>
        </>
    )
}

export default Products