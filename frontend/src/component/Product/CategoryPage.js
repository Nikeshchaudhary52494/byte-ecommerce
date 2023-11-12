import React from 'react'
import CategoriesList from './CategoriesList'

const CategoryPage = () => {
    return (
        <>
            <div className='grid place-content-center w-[70%] mx-auto my-5 grid-cols-3 sm:grid-cols-4'> 
                <CategoriesList />
            </div>
        </>
    )
}

export default CategoryPage