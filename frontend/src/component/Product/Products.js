import React, { useEffect, useState } from "react";
import Loader from "../layout/Loader/Loader";
import { useSelector } from 'react-redux';
import { STATUSES } from '../../store/statuses';
import ProductCard from "../layout/ProductCard";
import { FaFilter } from "react-icons/fa"
import ProductFilter from "./productFilter.js";

const Products = () => {

    const { data: products, status } = useSelector((state) => state.products);
    const [toggleFilter, setToggleFilter] = useState(false);

    useEffect(() => {
        const handleScroll = (event) => {
            if (toggleFilter) {
                event.preventDefault();
            }
        };
        document.body.addEventListener("wheel", handleScroll, { passive: false });
        return () => {
            document.body.removeEventListener("wheel", handleScroll);
        };
    }, [toggleFilter]);

    if (status === STATUSES.LOADING) {
        return <div class="w-full grid place-content-center h-[80vh] ">
            <Loader />
        </div>

    }

    return (
        <>
            {/* filter option */}
            <div onClick={() => setToggleFilter(!toggleFilter)} className="bg-blue-600  m-2 fixed flex  gap-5 items-center justify-center text-white rounded-full p-2 sm:px-4 sm:py-2">
                < FaFilter />
                <p className=" sm:block hidden">Filters</p>
            </div>
            <div className={`inset-0 z-20 fixed bg-black backdrop-filter bg-opacity-50 backdrop-blur-md ${toggleFilter ? `block` : `hidden`}`}>
                <div className={`${toggleFilter ? `z-30 block` : `hidden`}`}>
                    <ProductFilter toggleFilter={toggleFilter} setToggleFilter={setToggleFilter} />
                </div>
            </div>
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