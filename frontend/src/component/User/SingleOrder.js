import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleOrder } from '../../slices/orderSlice/orderSlice';

const SingleOrder = () => {
    const dispatch = useDispatch();
    const { singleOrderData: order } = useSelector((state) => state.orders);
    const { address, pinCode, state, phoneNumber, country } = order.shippingInfo || {};
    const paymentStatus = order?.paymentInfo;
    const { orderItems } = order || {};
    const { id } = useParams();
    useEffect(() => {
        dispatch(getSingleOrder(id));
    }, [dispatch, id]);
    return (
        <div className='bg-slate-900'>
            <div className="flex gap-10 flex-col md:w-[70%] text-white p-10 overflow-y-auto">
                <div>
                    <p className="text-3xl font-bold text-cyan-500">Shipping Info:</p>
                    <p>{`Address: ${address} | ${state} | ${country}`}</p>
                    <p>{`PinCode: ${pinCode}`}</p>
                    <p>{`Phone Number: ${phoneNumber}`}</p>
                </div>
                <div>
                    <p className="text-3xl font-bold text-cyan-500">Payment:</p>
                    <p>{`Payment Status: ${paymentStatus}`}</p>
                </div>
                <div>
                    <p className="text-3xl font-bold text-cyan-500">Order Status:</p>
                    <p>{order?.orderStatus}</p>
                </div>
                <div>
                    <p className="text-3xl font-bold text-cyan-500">Items:</p>
                    {orderItems && orderItems.map((item) => (
                        <div className='flex flex-col lg:flex-row gap-2 lg:gap-10 rounded-md bg-slate-800 p-2 border-2 my-1' key={item.product}>
                            <img className='w-20 h-20 object-cover' src={item.image} alt="product" />
                            <p className='text-white '>{item.name}</p>
                            {/* <p className='text-white'>{item.quantity}</p> */}
                            <p className='text-white'>{item.product}</p>
                            <p className='text-white'>
                                {item.price} * {item.quantity} = {item.price * item.quantity}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SingleOrder