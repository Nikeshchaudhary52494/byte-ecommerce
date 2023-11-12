import React, { useState } from 'react'
import Rating from '@mui/material/Rating';

const RatingFilter = () => {
    const [review, setReview] = useState(null);
    const handelReview = (event) => {
        setReview(event.target.value);
    }
    const reviews = [5,4,3,2,1];
    return (
        <>
            <p className='my-5'>Customer review:</p>
            {
                reviews.map((review) => (
                    <Rating readOnly value={review} />
                ))
            }
        </>
    )
}

export default RatingFilter