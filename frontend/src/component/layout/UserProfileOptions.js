import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutUser } from '../../slices/userSlice/userSlice';

const UserProfileOptions = ({ isHovered, setIsHovered }) => {
    const dispatch = useDispatch();
    const userProfileOptions = [
        {
            option: "View Profile",
            linkTo: "/user/profile"
        },
        {
            option: "Theme",
            linkTo: ""
        },
        {
            option: "Settings",
            linkTo: "/settings"
        },

    ]
    const handelLogout = async () => {
        dispatch(logoutUser())
    }
    return (
        <>
            <div className='bg-slate-700 py-5 px-8 top-4 fixed rounded-md'>
                <ul>
                    {userProfileOptions.map((options) => (
                        <Link to={options.linkTo}>
                            <li onClick={() => setIsHovered(false)} className='p-2  hover:text-slate-500 duration-500'>{options.option}</li>
                        </Link>
                    ))}
                    <li onClick={() => { setIsHovered(false); handelLogout() }} className='p-2 cursor-pointer  hover:text-slate-500 duration-500'>Logout</li>
                </ul>
            </div>
        </>
    )
}

export default UserProfileOptions