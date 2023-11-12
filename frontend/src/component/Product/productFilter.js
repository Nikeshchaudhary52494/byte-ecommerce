import React from 'react'
import ItemConditionFilter from './ProductFilterComponents/ItemConditionFilter';
import PriceFilter from './ProductFilterComponents/PriceFilter';
import RatingFilter from './ProductFilterComponents/RatingFilter';

const ProductFilter = () => {
    return (
        <>
            <div className='grid place-content-center'>
                <PriceFilter />
                <ItemConditionFilter />
                <RatingFilter />
            </div>
        </>
    )
};

export default ProductFilter