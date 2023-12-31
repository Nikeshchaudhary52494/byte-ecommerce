import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCartProducts } from '../../slices/cartSlice/cartSlice';
import CartItemCard from './CartItemCard';
import { Link, Navigate } from 'react-router-dom';

const LoginUserCart = () => {
    const dispatch = useDispatch();
    const { data, loading } = useSelector((state) => state.cart);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        dispatch(getAllCartProducts());
    }, [dispatch]);

    useEffect(() => {
        if (data && data.length > 0) {
            const total = data.reduce((acc, product) => acc + (product.productPrice * product.quantity), 0);
            setTotalPrice(total);
        } else {
            setTotalPrice(0);
        }
    }, [data]);

    return (
        <>
            <div className='flex items-start justify-center border-t border-slate-700 bg-slate-800 min-h-screen text-white'>
                <div className='max-w-lg p-2 mt-14 w-[80%] rounded-md bg-slate-700 bg-opacity-20'>
                    <div className='h-24 p-2 text-3xl font-bold rounded-md'>
                        <h4>Shopping Cart</h4>
                    </div>
                    <div className='flex flex-col justify-center items-center my-2 min-h-44 rounded-md p-5'>
                        {loading ? (
                            <p>Loading...</p>
                        ) : (
                            data.map((product) => (
                                <CartItemCard key={product.productId} product={product} />
                            ))
                        )}
                    </div>
                    {totalPrice > 0 ?
                        <div className='text-right p-5'>
                            <p>Total price: <span className='text-orange-500 font-bold text-xl'>${totalPrice}</span></p>
                        </div>
                        : <div className='text-center h-44 font-bold'>
                            <p className='italic  text-blue-500'>No Product Added To cart</p>

                            <Link to='/'>
                                <button className='bg-blue-500 p-2 m-2 rounded-sm' >Continue Shopping</button>
                            </Link>
                        </div>}
                </div>
            </div>
        </>
    );
};

export default LoginUserCart;
