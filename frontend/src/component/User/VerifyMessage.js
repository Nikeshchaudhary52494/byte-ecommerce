import React from 'react'
import { MdVerifiedUser } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const VerifyMessage = () => {
    const navigate = useNavigate();
    return (
        <div className='inset-0 max-h-full top-0 fixed flex-col z-10 bg-slate-900 flex pt-40 items-center'>
            <MdVerifiedUser className='text-green-500 text-7xl' />
            <p className='text-white font-bold text-center text-3xl' >"A verification link has been sent to your registered email"</p>
            <button onClick={() => navigate("/")} className='text-3xl text-blue-500 flex items-center mt-5'>Home</button>
        </div>
    )
}

export default VerifyMessage