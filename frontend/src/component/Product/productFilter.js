import React, { useState } from 'react'
import ItemConditionFilter from './ProductFilterComponents/ItemConditionFilter';
import PriceFilter from './ProductFilterComponents/PriceFilter';
import RatingFilter from './ProductFilterComponents/RatingFilter';
import { updateData } from '../../slices/filterSlice/filterSlice';
import { useDispatch } from 'react-redux'


const ProductFilter = ({ toggleFilter, setToggleFilter }) => {
    const [price, setPrice] = useState([0, 2500]);
    const dispatch = useDispatch();
    const sendPriceData = () => {
        dispatch(updateData(price))
    }
    return (
        <>
            <div className='flex items-center flex-col justify-center'>
                <div className='grid w-[400px] place-content-center m-10 rounded-xl shadow-lg p-10 bg-slate-600 text-white'>
                    <PriceFilter price={price} setPrice={setPrice} />
                    <ItemConditionFilter />
                    <RatingFilter />
                    <button onClick={() => { setToggleFilter(!toggleFilter); sendPriceData() }} className='bg-green-600 py-2 px-3 w-40 mt-10 rounded-md'>Search</button>
                </div>
            </div>
        </>
    )
};

export default ProductFilter;