import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getSingleOrder } from '../../slices/orderSlice/orderSlice';

const SingleOrder = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { singleOrderData: order } = useSelector((state) => state.orders);
    const { address, pinCode, state, phoneNumber, country } = order.shippingInfo || {};
    const paymentStatus = order?.paymentInfo;
    const { orderItems } = order || {};
    const { id } = useParams();

    useEffect(() => {
        if (order.length === 0) {
            dispatch(getSingleOrder(id));
        }
    }, [dispatch, id, order]);


    return (
        <div className='bg-slate-900'>
            <div className="flex gap-10 flex-col text-white p-10 min-h-screen">
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
                <p className="text-3xl font-bold text-cyan-500 ">Items:</p>
                <div className='flex flex-col gap-2'>
                    {orderItems && orderItems.map((item) => (
                        <div
                            onClick={() => navigate(`/product/${item.productId}`)}
                            key={item.product}
                            className='flex px-4 pt-2 pb-4 xs:flex-row flex-col gap-10 rounded-md bg-slate-800'>
                            <div className='bg-white p-2 flex-shrink-0 rounded-md'>
                                <img className='xs:h-min mx-auto xs:mx-0 xs:w-20 h-40 object-cover' src={item.image} alt='product' />
                            </div>
                            <div>
                                <p className='text-white text-xl'>{item.name}</p>
                                <p className='text-slate-400 text-xs'>#{item.productId}</p>
                                <p className=' text-orange-500 font-bold'>
                                    ${item.price} <span className='text-white'> x {item.quantity}</span> =  ${item.price * item.quantity}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SingleOrder