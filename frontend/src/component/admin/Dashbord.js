import React, { useEffect, useState } from 'react'
import { IoMdCart } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { MdOutlineAttachMoney } from "react-icons/md";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import { BarChart, Bar, Label } from "recharts";
import { Link } from 'react-router-dom'
import Messages from './Messages';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../slices/adminSlice/adminSlice';
import { getAllOrders } from '../../slices/orderSlice/orderSlice';
import { STATUSES } from '../../store/statuses';
import Loader from '../layout/Loader/Loader';



const Dashbord = () => {
    const { UserCount } = useSelector((state) => state.admin.data);
    const { data, status } = useSelector((state) => state.orders);
    const ordersLength = data?.orders?.length || 0;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllUsers());
        dispatch(getAllOrders());
    }, [dispatch])
    const ba1 = [
        {
            name: "Page A",
            uv: 4000,
            pv: 2400,
            amt: 2400
        },
        {
            name: "Page B",
            uv: 3000,
            pv: 1398,
            amt: 2210
        },
        {
            name: "Page C",
            uv: 2000,
            pv: 9800,
            amt: 2290
        },
        {
            name: "Page D",
            uv: 2780,
            pv: 3908,
            amt: 2000
        },
        {
            name: "Page E",
            uv: 1890,
            pv: 4800,
            amt: 2181
        },
        {
            name: "Page F",
            uv: 2390,
            pv: 3800,
            amt: 2500
        },
        {
            name: "Page G",
            uv: 3490,
            pv: 4300,
            amt: 2100
        }
    ];
    const ba = [
        { name: "Group A", value: 400 },
        { name: "Group B", value: 300 },
        { name: "Group C", value: 300 },
        { name: "Group D", value: 200 }
    ];
    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

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

            <div className='bg-slate-800 min-h-screen flex flex-col items-center justify-center'>
                <div className='text-2xl flex gap-4 items-center text-white font-bold pl-10 mt-10'>
                    <MdDashboard />
                    <h4>Dashboard</h4>
                </div>
                <div>
                    <div className='bg-blue-500 mx-5 p-5 rounded-md mt-10 text-center text-white font-bold'>
                        TotalAmount: {data.totalAmount}
                    </div>
                    <div className='grid grid-cols-1 w-[90vw] md:grid-cols-2 lg:grid-cols-3 mt-2 mb-10 mx-5 max-w-5xl text-white rounded-md bg-slate-700 p-8 gap-4'>
                        <Link to="/user/admin/manageproduct">
                            <p className='bg-orange-500 p-2 rounded-md'>ManageProduct</p>
                        </Link>
                        <Link to="/user/admin/manageuser">
                            <p className='bg-green-600 p-2 rounded-md'>ManageUsers</p>
                        </Link>
                        <Link to="/user/admin/manageorder">
                            <p className='bg-violet-700 p-2 rounded-md'>ManageOrder</p>

                        </Link>
                        <div className='h-28 flex-grow rounded-md flex items-center bg-blue-800'>
                            Review
                        </div>
                        <div className='h-28 flex-grow rounded-md flex items-center bg-violet-500'>
                            <IoMdCart /> total order : {ordersLength}
                        </div>
                        <div className='h-28 flex-grow rounded-md flex items-center bg-fuchsia-500'>
                            <FaUser />
                            Total user : {UserCount}
                        </div >
                        <div className='h-24 hidden md:flex flex-grow rounded-md lg:hidden items-center bg-violet-500'>

                        </div>
                        <div className='border  rounded-md h-[200px] bg-slate-600 '>
                            <PieChart width={200} height={200}>
                                <Pie
                                    ba={ba}
                                    innerRadius={60}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    paddingAngle={5}
                                    baKey="value"
                                >
                                    {ba.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </div>
                        <div className='border lg:col-span-2 rounded-md h-[200px] bg-slate-600'>
                            <BarChart width={200} height={150} ba={ba1}

                            >
                                <Label value="Pages of my website" offset={0} position="insideBottom" />
                                <Bar baKey="uv" fill="#8884d8" />
                            </BarChart>
                        </div>
                        <div className='lg:col-span-2'>
                            <Messages />

                        </div>

                        <div className='bg-green-400 p-5 rounded-md'>
                            <div className='' >
                                top sells
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Dashbord