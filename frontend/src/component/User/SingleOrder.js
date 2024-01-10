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
        if (order == [])
            dispatch(getSingleOrder(id));
    }, [dispatch, id]);

    return (
        <div className='bg-slate-900'>
            <div className="flex gap-10 flex-col md:w-[70%] text-white p-10 min-h-screen overflow-y-auto">
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
                        <div onClick={() => navigate(`/product/${item.productId}`)} className='flex gap-10 lg:flex-row  rounded-md bg-slate-800 p-1 border-2 my-1' key={item.product}>
                            <img className='w-20 h-20 object-cover rounded-md ' src={item.image} alt="product" />
                            <div>
                                <p className='text-white font-bold '>{item.name}</p>
                                <p className='text-slate-400 text-xs'>#{item.productId}</p>
                                <p className=' text-orange-500'>
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