import React, { useEffect } from 'react'
import { IoMdCart } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { Link } from 'react-router-dom'
import Messages from './Messages';
import { useDispatch, useSelector } from 'react-redux';
import { getAdminProducts, getAllUsers } from '../../slices/adminSlice/adminSlice';
import { getAllOrders } from '../../slices/orderSlice/orderSlice';
import { STATUSES } from '../../store/statuses';
import Loader from '../layout/Loader/Loader';
import { getAllMessages } from '../../slices/contactUsSlice/contactUsSlice';
import { MdRateReview } from "react-icons/md";

const Dashbord = () => {
    const { UserCount } = useSelector((state) => state.admin.usersData);
    const { data, status } = useSelector((state) => state.orders);
    const ordersLength = data?.orders?.length || 0;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllUsers());
        dispatch(getAdminProducts());
        dispatch(getAllOrders());
        dispatch(getAllMessages());
    }, [dispatch])

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
            <div className='bg-slate-800 absolute left-0 top-0 w-screen z-10 overflow-y-auto min-h-screen flex flex-col items-center justify-center'>
                <div className='text-2xl flex gap-4 items-center text-white font-bold pl-10 mt-10'>
                    <MdDashboard />
                    <h4>Dashboard</h4>
                </div>
                <div>
                    <div className='bg-blue-500 mx-5 p-5 rounded-md mt-10 text-center text-white font-bold'>
                        TotalAmount: {data.totalAmount}
                    </div>
                    <div className='grid grid-cols-1 w-[90vw] md:grid-cols-2 lg:grid-cols-3 mt-2 mb-10 mx-5 max-w-5xl text-white rounded-md bg-slate-700 p-4 gap-2 '>
                        <Link to="/admin/manageproduct" className='bg-orange-500 p-2 rounded-md text-center text-white font-bold'>
                            Manage Product
                        </Link>
                        <Link to="/admin/manageuser" className='bg-green-600 p-2 rounded-md text-center text-white font-bold'>
                            Manage Users
                        </Link>
                        <Link to="/admin/manageorder" className='bg-violet-700 p-2 rounded-md text-center text-white font-bold'>
                            Manage Order
                        </Link>
                        <Link to="/admin/managereviews" className='h-28 flex-grow rounded-md text-3xl justify-center flex items-center bg-blue-800 text-white font-bold'>
                            <MdRateReview /> Review
                        </Link>
                        <div className='h-28 flex-grow rounded-md flex items-center text-3xl font-bold justify-center bg-violet-500'>
                            <IoMdCart /> total order : {ordersLength}
                        </div>
                        <div className='h-28 flex-grow rounded-md flex items-center text-3xl font-bold justify-center bg-fuchsia-500'>
                            <FaUser />
                            Total user : {UserCount}
                        </div >
                        <div className='h-24 hidden md:flex flex-grow rounded-md lg:hidden items-center bg-violet-500'>
                        </div>
                        <div className='lg:col-span-3'>
                            <Messages />
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Dashbord