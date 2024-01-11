import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addReview, getProductDetails, resetError, resetIsReviewAdded } from '../../../slices/productSlice/productsSlice';
import { toast } from 'react-toastify';

const AddReview = ({ toggle, setToggle, productId }) => {
    const dispatch = useDispatch();
    const { error, isReviewAdded } = useSelector((state) => state.products)

    const [review, setReview] = useState({
        comment: '',
        rating: 0,
    })
    const { comment, rating } = review;
    const handleInputChange = (e) => {
        setReview({ ...review, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addReview({ rating, comment, productId }))

    };
    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(resetError())
        }
        if (isReviewAdded) {
            toast.success("Review added successfully");
            dispatch(resetIsReviewAdded());
            dispatch(getProductDetails({ id: productId }));
        }
    }, [isReviewAdded, error, dispatch, productId])

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
                                placeholder='Write review'
                                value={comment}
                                onChange={handleInputChange}
                                className='resize-none w-[300px] h-[150px] outline-none rounded-md p-2'
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
                                onChange={handleInputChange}
                                className='border rounded-md p-2'
                            />
                        </div>
                        <button
                            onClick={() => setToggle(!toggle)}
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
