import React from 'react'
import ItemConditionFilter from './ProductFilterComponents/ItemConditionFilter';
import PriceFilter from './ProductFilterComponents/PriceFilter';
import RatingFilter from './ProductFilterComponents/RatingFilter';

const ProductFilter = () => {
    return (
        <>
            <div className='flex items-center justify-center'>
                <div className='grid w-[400px] place-content-center border m-10 rounded-xl shadow-lg p-10 bg-blue-50'>
                    <PriceFilter />
                    <ItemConditionFilter />
                    <RatingFilter />
                </div>
            </div>
        </>
    )
};

export default ProductFilter