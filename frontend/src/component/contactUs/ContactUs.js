import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createMessage } from '../../slices/contactUsSlice/contactUsSlice';
const ContactUs = () => {
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createMessage({ message }));
        console.log('Submitted message:', message);
        setMessage('');
    };

    return (
        <div className='fixed inset-0 z-10 flex items-center justify-center bg-slate-900 text-white'>
            <div className='bg-slate-800 rounded-md p-10'>
                <p>Contact Us</p>
                <form onSubmit={handleSubmit}>
                    <textarea
                        className='outline-none resize-none text-black rounded-sm p-5 my-5'
                        rows="4"
                        cols="50"
                        placeholder="Write your message here..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <br />

                    {/* Submit button */}
                    <button className='bg-blue-500 p-2 rounded-md' type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default ContactUs;
