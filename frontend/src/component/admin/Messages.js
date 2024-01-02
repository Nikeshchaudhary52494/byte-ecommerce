import React from 'react'
import { useSelector } from 'react-redux'

const Messages = () => {
    const { data } = useSelector((state) => state.contactUs);
    return (
        <>
            <div className='bg-slate-600 border p-4 rounded-md'>
                <div><p className='text-lg m-1 mb-4'>Messages</p></div>
                <div>
                    {
                        data.map((messsage) => (
                            <div className='mb-2 bg-slate-500 p-2 text-sm rounded-md'>
                                <p className='font-bold text-cyan-500'>{messsage.name}</p>
                                <p className='text-xs'>{messsage.email}</p>
                                <p>{messsage.message}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Messages