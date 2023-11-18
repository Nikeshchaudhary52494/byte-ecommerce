import React from 'react';
import demoAvatar from "../images/userProfile.avif";

const UserProfile = () => {
    const fields = [
        { label: 'Name', value: 'Nikesh Chuadhary' },
        { label: 'Email', value: 'nikesh@gmail.com' },
        { label: 'Password', value: '*********' },
    ];

    return (
      <>
        <div className='flex justify-center bg-slate-800 h-screen items-center'>
            <div className='w-[80%] max-w-lg p-5 m-10 bg-slate-700 rounded-md '>
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
        </div></>
    );
};

export default UserProfile;
