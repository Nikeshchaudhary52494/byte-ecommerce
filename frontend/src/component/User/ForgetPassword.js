import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { forgotPassword } from '../../slices/userSlice/userSlice';

const ForgetPassword = () => {
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(forgotPassword({ email })).then(() => {
            setEmail("");
        })
    }
    return (
        <div className='p-10 bg-slate-900 min-h-screen'>
            <div className='flex flex-col items-center'>
                <p className='font-bold text-3xl text-white'>Forget Password</p>
                <form
                    className='flex flex-col my-10'
                    onSubmit={handleSubmit}>
                    <input
                        className='p-2 rounded-md w-64 outline-none'
                        type="text"
                        required
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                        type="submit"
                        className='bg-green-500 w-[100px] text-white p-2 rounded mt-2'
                    >
                        Send Token
                    </button>
                </form>
            </div>
        </div>

    )
}

export default ForgetPassword