import React from 'react'
import { Link } from 'react-router-dom'

const LoggedInComponenet = () => {
    return (
        <>
            <div className='flex items-start justify-center border-t border-slate-700 bg-slate-800 h-screen text-white'>
                <div className='max-w-lg p-5 mt-14 w-[80%] rounded-md bg-slate-700'>
                    <div className='h-24 p-2 text-3xl font-bold bg-slate-600 rounded-md'>
                        <h4>
                            Shopping Cart
                        </h4>
                    </div>
                    <div className='flex flex-col justify-center items-center my-5 h-44 bg-slate-600 rounded-md p-5'>
                        <p className='my-5'>NO ITEM ADDED</p>
                        <Link to="/">
                            <button className='w-[200px] font-bold text-white bg-blue-600 rounded-md p-2'>Continue Shopping</button></Link>
                    </div>
                    <div className='flex h-14 justify-end text-xl bg-slate-600 p-5 items-center rounded-md'>
                        <p>Total amount: 200</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoggedInComponenet