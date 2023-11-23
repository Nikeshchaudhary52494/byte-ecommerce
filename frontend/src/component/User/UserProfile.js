import React, { useEffect, useState } from 'react'
import demoAvatar from "../images/userProfile.avif";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';



const UserProfile = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({ name: '', email: '' });
    const logedin = useSelector((state) => state.user)
    console.log(logedin)
    //Function to fetch data from /api/v1/me 
    const fetchData = async () => {
        try {
            const response = await fetch("/api/v1/me");
            if (response.ok) {
                const { user } = await response.json();
                const { name, email } = user;
                setUserData({ name, email });
            } else {
                console.error("Failed to fetch user data");
            }
        } catch (error) {
            console.error("Error during data fetching:", error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    const fields = [
        { label: 'Name', value: userData.name },
        { label: 'Email', value: userData.email },
        { label: 'Password', value: '*********' },
    ];
    return (
        <div>
            <>
                {logedin ? (<div>
                    <div className='flex justify-center bg-slate-800 h-screen items-start'>
                        <div className='w-[80%] max-w-lg p-5 m-10  bg-slate-700 rounded-md '>
                            <div className=' rounded-md bg-slate-600 m-2 p-2'>
                                <div className='w-24 h-24 rounded-full m-2 overflow-hidden'>
                                    <img className='w-full h-full' src={demoAvatar} alt="user profile" />
                                </div>
                            </div>
                            {fields.map((field, index) => (
                                <div key={index} className=' bg-slate-600 text-white rounded-md m-2 p-2'>
                                    <p className='m-2'>{field.label}</p>
                                    <div className='flex justify-between items-center'>
                                        <p className='m-2'>{field.value}</p>
                                        <button className='w-[100px] bg-yellow-100 text-black rounded-md shadow-sm'>Edit</button>
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


