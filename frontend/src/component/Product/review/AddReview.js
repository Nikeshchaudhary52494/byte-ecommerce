import React, { useState } from 'react';

const AddReview = ({ toggle, setToggle }) => {
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <div className='flex flex-col justify-center items-center bg-slate-800 p-5 rounded-md'>
                <div className='flex items-center justify-between w-full m-2'>
                    <p className='text-white'>Add review</p> <button
                        className='bg-red-500 w-10 h-10 p-1 rounded-full focus:outline-none'
                        onClick={() => setToggle(!toggle)}
                    > x
                    </button>
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-4'>
                            <label htmlFor='comment' className='block text-gray-500 text-sm font-bold mb-2'>
                                Comment
                            </label>
                            <textarea
                                id='comment'
                                name='comment'
                                rows='4'
                                cols='50'
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                className='resize-none  outline-none rounded-md p-1'
                            />
                        </div>
                        <div className='mb-4'>
                            <label htmlFor='rating' className='block text-gray-500 text-sm font-bold mb-2'>
                                Rating
                            </label>
                            <input
                                type='number'
                                id='rating'
                                name='rating'
                                min='0'
                                max='5'
                                value={rating}
                                onChange={(e) => setRating(parseInt(e.target.value, 10))}
                                className='border rounded-md p-2'
                            />
                        </div>
                        <button
                            type='submit'
                            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                        >
                            Submit Review
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddReview;
