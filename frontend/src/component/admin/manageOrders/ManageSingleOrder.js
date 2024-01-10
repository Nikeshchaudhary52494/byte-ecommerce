import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getSingleOrder } from '../../../slices/orderSlice/orderSlice';
import { STATUSES } from '../../../store/statuses';
import Loader from '../../layout/Loader/Loader';
import SingleOrder from '../../User/SingleOrder';
import { resetIsOrderStatusUpdated, updateOrderStatus } from '../../../slices/adminSlice/adminSlice';
import { toast } from 'react-toastify';
import { updatedProductStock } from '../../../slices/productSlice/productsSlice';

const ManageSingleOrder = () => {
    const dispatch = useDispatch();
    const { singleOrderData: order, status } = useSelector((state) => state.orders);
    const { error, isOrderStatusUpdated } = useSelector((state) => state.admin);
    const { id } = useParams();

    const [selectedOrderStatus, setSelectedOrderStatus] = useState(order.orderStatus || '');

    const handleSubmit = () => {
        dispatch(updateOrderStatus({ id, selectedOrderStatus }));
        console.log(`button clicked and selelted status is ${selectedOrderStatus}`)
        if (selectedOrderStatus === "Shipped") {
            for (const index in order.orderItems) {
                console.log("hello");
                const item = order.orderItems[index];
                const quantityShipped = item.quantity;
                console.log({ item, quantityShipped });
                dispatch(updatedProductStock({ quantityShipped, productId: item.productId }));
            }
        }
    };

    useEffect(() => {
        if (isOrderStatusUpdated) {
            toast.success("Order status updated");
            dispatch(resetIsOrderStatusUpdated());
            // dispatch(updatedProductStock())
        }
        if (error) {
            toast.error(error);
        }
    }, [dispatch, error, isOrderStatusUpdated]);

    // if (status === STATUSES.LOADING) {
    //     return (
    //         <div className="min-h-screen flex items-center justify-center">
    //             <Loader />
    //         </div>
    //     );
    // }

    return (
        <div className="min-h-screen bg-slate-900 flex md:flex-row flex-col-reverse">
            <div className='w-[70%]'>
                <SingleOrder />
            </div>
            <div className='border-l border-s-slate-700 p-10'>
                <p className='text-cyan-500 font-bold text-3xl mb-3'>Update Order Status:</p>
                <select className='bg-slate-800 text-white p-2 mx-2 rounded'
                    onChange={(e) => setSelectedOrderStatus(e.target.value)}>
                    <option value="">Choose status</option>
                    {order?.orderStatus === "processing" && (
                        <option value="Shipped">Shipped</option>
                    )}
                    {order?.orderStatus === "Shipped" && (
                        <option value="Delivered">Delivered</option>
                    )}
                </select>
                <button
                    className='bg-green-500 text-white p-2 rounded mt-2'
                    onClick={handleSubmit}
                >
                    Update Status
                </button>
            </div>
        </div>

    );
};

export default ManageSingleOrder;
