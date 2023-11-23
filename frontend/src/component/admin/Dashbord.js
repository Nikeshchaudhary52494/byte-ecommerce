import React from 'react'
import { IoMdCart } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { MdOutlineAttachMoney } from "react-icons/md";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import { BarChart, Bar,Label } from "recharts";
import Messages from './Messages';


const Dashbord = () => {
    const data1 = [
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
    const data = [
        { name: "Group A", value: 400 },
        { name: "Group B", value: 300 },
        { name: "Group C", value: 300 },
        { name: "Group D", value: 200 }
    ];
    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
    return (
        <>
            <div className='bg-slate-800 min-h-screen flex flex-col items-center justify-center'>
                <div className='text-2xl flex gap-4 items-center text-white font-bold pl-10 mt-10'>
                    <MdDashboard />
                    <h4>Dashboard</h4>
                </div>
                <div>
                    <div className='grid grid-cols-1 w-[90vw] md:grid-cols-2 lg:grid-cols-3 my-10 mx-5 max-w-5xl text-white rounded-md bg-slate-700 p-8 gap-4'>
                        <div className='h-28 flex-grow rounded-md flex items-center bg-blue-800'>
                            <IoMdCart /> total order
                        </div>
                        <div className='h-28 flex-grow rounded-md flex items-center bg-violet-500'>
                            <MdOutlineAttachMoney /> total income
                        </div>
                        <div className='h-28 flex-grow rounded-md flex items-center bg-fuchsia-500'>
                            <FaUser />
                            total user
                        </div >
                        <div className='h-24 hidden md:flex flex-grow rounded-md lg:hidden items-center bg-violet-500'>

                        </div>
                        <div className='border  rounded-md h-[200px] bg-slate-600 '>
                            <PieChart width={200} height={200}>
                                <Pie
                                    data={data}
                                    // cx={120}
                                    // cy={200}
                                    innerRadius={60}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </div>
                        <div className='border lg:col-span-2 rounded-md h-[200px] bg-slate-600'>
                            <BarChart width={200} height={150} data={data1}
                  
                            >
                                 <Label value="Pages of my website" offset={0} position="insideBottom" />
                            <Bar dataKey="uv" fill="#8884d8" />
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