import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadUser } from '../../slices/userSlice/userSlice';
import Loader from '../layout/Loader/Loader';
import { STATUSES } from '../../store/statuses';
import { MdEdit } from 'react-icons/md';



const UserProfile = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const { user, isAuthenticated, status } = useSelector((state) => state.user)
    useEffect(() => {
        dispatch(loadUser());
    }, [dispatch]);

    const fields = [
        { label: 'Name', value: user.name },
        { label: 'Email', value: user.email },
        { label: 'Password', value: '*********' },
    ];
    if (status === STATUSES.LOADING) {
        return <div className="w-full grid place-content-center h-[80vh] ">
            <Loader />
        </div>

    }

    if (status === STATUSES.ERROR) {
        return <h2>Something went wrong!</h2>;
    }
    return (
        <div>
            <>
                {isAuthenticated ? (<div>
                    <div className='flex justify-center  bg-slate-800 h-screen items-start'>
                        <div className='w-[80%] max-w-lg p-5 m-10  bg-slate-700 rounded-md '>
                            <div className=' rounded-md flex justify-between items-center bg-slate-600 m-2 p-2'>
                                <div className='w-24 h-24 rounded-full m-2 overflow-hidden'>
                                    <img className='w-full h-full object-cover' src={user.avatar.url} alt="user profile" />
                                </div>
                                <Link className='text-white text-2xl'
                                    to="/user/updateprofile">

                                    <MdEdit />
                                </Link>
                            </div>
                            {fields.map((field, index) => (
                                <div key={index} className=' bg-slate-600 text-white rounded-md m-2 p-2'>
                                    <p className='m-2'>{field.label}</p>
                                    <div className='flex justify-between items-center'>
                                        <p className='m-2'>{field.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>) : (
                    navigate("/")
                )}
            </>
        </div>
    )
}

export default UserProfile


