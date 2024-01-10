import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getAllCartProducts } from '../../slices/cartSlice/cartSlice';
import { createNewOrder, resetIsOrderCreated } from '../../slices/orderSlice/orderSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { dialogActionsClasses } from '@mui/material';

const ShippingInfo = () => {
    const storedShippingData = localStorage.getItem('shippingData');
    const parsedShippingData = JSON.parse(storedShippingData);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { data, status } = useSelector((state) => state.cart);
    const { isOrderCreated } = useSelector((state) => state.orders)
    const handelPay = () => {
        const orderData = {
            shippingInfo: parsedShippingData,
            orderItems: data,
            paymentInfo: "complate",
            itemsPrice: data?.totalPrice,
            shippingPrice: 5,
            totalPrice: data?.totalPrice + 5,
        }
        console.log({ orderData });
        dispatch(createNewOrder({ orderData }));
    }
    useEffect(() => {
        if (isOrderCreated) {
            dispatch(resetIsOrderCreated());
            dispatch(clearCart());
            navigate("/cart/orderplaced");
            toast.success("Order placed");
        }
    }, [dispatch, isOrderCreated, navigate])
    return (
        <>
            <div className='inset-0 fixed top-0 z-10 justify-center pt-20 px-10 bg-slate-900'>
                <div className='bg-slate-800 p-8 rounded-lg max-w-4xl mx-auto  shadow-md'>
                    <h3 className='text-3xl text-cyan-500 font-bold mb-6'>Shipping Information</h3>
                    <div className='text-xl text-white'>
                        <p className='mb-4'>
                            <span className='text-cyan-500 font-bold'>Address:</span> <span>{parsedShippingData.address}</span>
                        </p>
                        <p className='mb-4'>
                            <span className='text-cyan-500 font-bold'>State:</span> <span>{parsedShippingData.state}</span>
                        </p>
                        <p className='mb-4'>
                            <span className='text-cyan-500 font-bold'>Country:</span><span> {parsedShippingData.country}</span>
                        </p>
                        <p className='mb-4'>
                            <span className='text-cyan-500 font-bold'>Pin Code:</span><span> {parsedShippingData.pinCode}</span>
                        </p>
                        <p className='mb-4'>
                            <span className='text-cyan-500 font-bold'>Phone Number:</span><span> {parsedShippingData.phoneNumber}</span>
                        </p>
                    </div>
                    <div>
                        <button
                            onClick={handelPay}
                            className='bg-green-500 p-2 active:bg-green-600 w-40 rounded-md'>
                            PAY
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShippingInfo;
