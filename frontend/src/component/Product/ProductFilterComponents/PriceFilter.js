import React, { useState } from 'react'
import { Slider } from "@mui/material";

const minPrice = 100;
const PriceFilter = () => {

    //initial min and maxprice
    const [price, setPrice] = useState([0, 2500]);

    const handlePrice = (event, newPrice, activeThumb) => {
        // checking is newPrice is a array or not
        if (!Array.isArray(newPrice)) {
            return;
        }

        if (activeThumb === 0) {
            setPrice([Math.min(newPrice[0], price[1] - minPrice), price[1]]);
        } else {
            setPrice([price[0], Math.max(newPrice[1], price[0] + minPrice)]);
        }
    };

    return (
        <>
            <div className='w-[300px]'>
                <p className='mb-5'>Price range:</p>
                <Slider
                    min={0}
                    max={2500}
                    value={price}
                    // onChange passes event,value and activeThumb
                    onChange={handlePrice}
                    valueLabelDisplay="auto"
                    disableSwap
                />
            </div>
        </>
    )
}

export default PriceFilter