import React from 'react'
import CategoriesList from './CategoriesList'

const CategoryPage = () => {
    return (
        <>
            <div className='flex flex-wrap px-5 justify-center mt-10 gap-2'>
                <CategoriesList />
            </div>
        </>
    )
}

export default CategoryPage