import React, { useState } from 'react';
import ManageReviewTable from './ManageReviewTable';
import { useDispatch } from 'react-redux';
import { getProductReviews } from '../../../slices/productSlice/productsSlice';

const ManageReviews = () => {
  const [productId, setProductId] = useState('');
  const [toggle, setToggle] = useState(true);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getProductReviews({ productId })).then(() => {
      setToggle(!toggle);
    });
  };

  return (
    <>
      <div className='flex flex-col items-center p-10 bg-slate-900'>
        <div>
          <p className='font-bold text-3xl text-white'>View Reviews</p>
          <form
            className='flex flex-col my-10'
            onSubmit={handleSubmit}>
            <input
              className='p-2 rounded-md outline-none'
              type="text"
              required
              placeholder="Enter Product ID"
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
            />
            <button
              type="submit"
              className='bg-green-500 w-[100px] text-white p-2 rounded mt-2'
            >
              View
            </button>
          </form>
        </div>
        <div className={`mt-10 border-t w-[70%] ${toggle ? 'hidden' : ''}`}>
          <ManageReviewTable productId={productId} />
        </div>
      </div>
    </>
  );
};

export default ManageReviews;
