import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatepassword } from '../../slices/userSlice/userSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { STATUSES } from '../../store/statuses';
const UpdatePassword = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const { error, isPasswordUpdated } = useSelector((state) => state.user);
    const [formData, setFormData] = useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
    });
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const passwordData = new FormData();
        passwordData.append("oldPassword", formData.oldPassword);
        passwordData.append("newPassword", formData.newPassword);
        passwordData.append("confirmPassword", formData.confirmPassword);
        dispatch(updatepassword(passwordData));
    };
    useEffect(() => {
        if (error) {
            toast.error(error.message);
        }
        if (isPasswordUpdated) {
            toast.success("Password updated successfully");
        }
    }, [dispatch, error, isPasswordUpdated]);
    return (
        <div className='border-t fixed top-0 left-0 z-10 inset-0  bg-slate-900 flex flex-col items-center justify-center'>
            <div className=' flex flex-col justify-center items-center bg-slate-800 p-10 rounded-md'>
                <p className='text-white text-3xl font-bold'>Update Password</p>
                <form className='flex gap-4 text-black flex-col' onSubmit={handleSubmit}>
                    <input
                        required
                        className='w-[300px] outline-none p-2 m-2 rounded-md'
                        type='password'
                        name='oldPassword'
                        placeholder='Old Password'
                        value={formData.oldPassword}
                        onChange={handleInputChange}
                    />

                    <input
                        required
                        className='w-[300px] outline-none p-2 m-2 rounded-md'
                        type='password'
                        name='newPassword'
                        placeholder='New Password'
                        value={formData.newPassword}
                        onChange={handleInputChange}
                    />

                    <input
                        required
                        className='w-[300px] outline-none p-2 m-2 rounded-md'
                        type='password'
                        name='confirmPassword'
                        placeholder='Confirm Password'
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                    />

                    <button
                        type='submit'
                        className='w-[300px] m-2 h-[40px] hover:bg-teal-700 bg-teal-600 rounded-lg'
                    >
                        Update Password
                    </button>
                </form></div>
        </div>
    );
};

export default UpdatePassword;
