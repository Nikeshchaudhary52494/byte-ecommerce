import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadUser, logoutUser } from '../../slices/userSlice/userSlice';
import Loader from '../layout/Loader/Loader';
import { STATUSES } from '../../store/statuses';
import { MdEdit, MdLogout } from 'react-icons/md';
import { RiShoppingBagFill } from "react-icons/ri";



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
        return (
            <div >
                <Loader />
            </div>
        )
    }
    if (status === STATUSES.ERROR) {
        return <h2>Something went wrong!</h2>;
    }
    return (
        <div>
            <>
                {isAuthenticated ? (
                    <div className='flex justify-center flex-col-reverse items-center bg-slate-800 h-screen'>
                        <div className='w-[80%] max-w-lg p-5  bg-slate-700 rounded-md '>
                            <div className=' rounded-md flex justify-between items-center bg-slate-600 m-2 p-2'>
                                <div className='w-24 h-24 rounded-full m-2 overflow-hidden'>
                                    <img className='w-full h-full object-cover' src={user.avatar.url} alt="user profile" />
                                </div>
                                <Link className='text-white text-2xl'
                                    state={location.pathname}
                                    to="/user/updateprofile">
                                    <MdEdit />
                                </Link>
                            </div>
                            {fields.map((field, index) => (
                                <div key={index} className=' bg-slate-600 text-white rounded-md m-2 p-2'>
                                    <p className='m-2 flex justify-between'>{field.label} <Link state={{ previousLocation: location.pathname }} to="/user/updatepassword"> <MdEdit className={`${field.label === "Password" ? `text-blue-500` : `hidden`}`} /></Link></p>
                                    <div className='flex justify-between items-center'>
                                        <p className='m-2'>{field.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className=' w-[80%] flex gap-10 max-w-lg '>
                            <button onClick={() => {
                                dispatch(logoutUser());
                            }}
                                className='flex items-center my-2 gap-2 p-2 bg-red-300 rounded-md'>Logout <MdLogout /></button>
                            <button
                                className='flex items-center my-2 gap-2 p-2 bg-green-300 rounded-md'
                                onClick={() => navigate("/myorders")}
                            >My orders <RiShoppingBagFill /></button>
                        </div>
                    </div>
                ) : (
                    navigate("/")
                )}
            </>
        </div>
    )
}

export default UserProfile


