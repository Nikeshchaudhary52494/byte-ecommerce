import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProductDetails } from '../../../slices/productSlice/productDetailsSlice';
import EditProduct from './EditProduct';

const ManageSingleProduct = () => {
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.productDetails);
    const { id } = useParams();
    const { name, price, description, rating, createdAt, category } = data;

    useEffect(() => {
        dispatch(fetchProductDetails({ id }));
    }, [dispatch, id]);

    return (
        <div className='flex min-h-screen flex-col lg:flex-row gap-10 bg-slate-900 justify-center p-10'>
            <div className='bg-slate-800 p-8 rounded-lg shadow-md'>
                <div className='flex justify-between items-center '>
                    <h3 className='text-3xl text-cyan-500 font-bold mb-6'>Product Details</h3>
                </div>
                <div className='text-xl text-white'>
                    <p className='mb-4'>
                        <span className='text-cyan-500 font-bold '>Name:</span> <span>{name}</span>
                    </p>
                    <p className='mb-4'>
                        <span className='text-cyan-500 font-bold'>Price:</span> <span>{price}</span>
                    </p>
                    <p className='mb-4'>
                        <span className='text-cyan-500 font-bold'>Category:</span><span> {category}</span>
                    </p>
                    <p className='mb-4'>
                        <span className='text-cyan-500 font-bold'>Created At:</span><span> {createdAt}</span>
                    </p>
                    <p className='mb-4'>
                        <span className='text-cyan-500 font-bold'>Rating:</span><span> {rating}</span>
                    </p>
                    <p className='mb-4'>
                        <span className='text-cyan-500 font-bold'>Description:</span> <span>{description}</span>
                    </p>
                </div>
            </div>
            <div>
                <EditProduct />
            </div>
        </div>
    );
};

export default ManageSingleProduct;
