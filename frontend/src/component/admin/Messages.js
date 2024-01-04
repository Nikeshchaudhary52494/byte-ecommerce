import React from 'react'
import { MdDelete } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux'
import { deleteMessageById, getAllMessages } from '../../slices/contactUsSlice/contactUsSlice';

const Messages = () => {
    const { data } = useSelector((state) => state.contactUs);
    const dispatch = useDispatch();
    const deleteMessage = (messageId) => {
        dispatch(deleteMessageById({messageId})).then(() => {
            dispatch(getAllMessages());
        })
    };
    return (
        <>
            <div className='bg-slate-600 border p-4 rounded-md'>
                <div><p className='text-lg m-1 mb-4'>Messages</p></div>
                <div>
                    {
                        data.map((messsage) => (
                            <div className='mb-2 bg-slate-500 p-2 text-sm rounded-md'>
                                <div className='flex justify-between'> <p className='font-bold text-cyan-500'>{messsage.name}  </p><button className='text-red-500' onClick={() => deleteMessage(messsage._id)}><MdDelete /></button></div>
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