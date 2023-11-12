import React, { useEffect , useState} from "react";
import Loader from "../layout/Loader/Loader";
import { useDispatch, useSelector } from 'react-redux';
import { STATUSES } from '../../store/statuses';
import { fetchProducts2 } from '../../slices/productSlice/productsSlice';
import ProductCard from "../layout/ProductCard";
import { useParams } from "react-router-dom";
const Products = () => {

    const dispatch = useDispatch();
    const { data: products, status } = useSelector((state) => state.products);
    const { keyword } = useParams();


    useEffect(() => {
        dispatch(fetchProducts2({ keyword}))
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
            <div
                class="flex mx-auto max-w-[80%] justify-center flex-wrap"
            >
                {products && products.map((product) => (
                   <ProductCard  product={product} />
                ))}
            </div>
        </>
    )
}

export default Products