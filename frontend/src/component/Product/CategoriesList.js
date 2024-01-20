import React from 'react'
import { motion } from "framer-motion"
import { useDispatch } from 'react-redux'
import { fetchProducts2, setCategory } from '../../slices/productSlice/productsSlice';
import { useNavigate } from 'react-router-dom';
import book from "../images/book.jpg"
import phone from "../images/iphone.webp"
import laptop from "../images/airbook.webp"
import sound from "../images/headPhone.webp"
import mopper from "../images/mopper.webp"
import shirt from "../images/shirt.jpg"
import teddy from "../images/teddy.webp"
import watch from "../images/watch2.jpg"
import sofa from "../images/sofa.avif"

const CategoriesList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const categoriesList = [{
        imgAddress: phone,
        categoryName: "Phone"
    },
    {
        imgAddress: laptop,
        categoryName: "Laptop"
    },
    {
        imgAddress: shirt,
        categoryName: "Fashion"
    },
    {
        imgAddress: mopper,
        categoryName: "HouseHolds"
    },
    {
        imgAddress: watch,
        categoryName: "Watches"
    },
    {
        imgAddress: sofa,
        categoryName: "Furnitures"
    },
    {
        imgAddress: teddy,
        categoryName: "Toys & kids"
    },
    {
        imgAddress: sound,
        categoryName: "Sound"
    }, {
        imgAddress: book,
        categoryName: "Books"
    }
    ]
    const handleCategoryClick = (categoryName) => {
        dispatch(fetchProducts2({ categoryName }));
        dispatch(setCategory(categoryName));
        navigate("/products")
    };

    return (
        <>
            {categoriesList.map((category) =>
                <motion.div
                    key={category.categoryName}
                    whileHover={{ scale: 1.2 }}
                    onClick={() => handleCategoryClick(category.categoryName)}
                    className="w-[100px] mt-1 p-1 shadow-lg cursor-pointer  bg-white sm:border-none rounded-lg flex items-center flex-shrink-0 justify-center flex-col h-[100px]" >
                    <img className="h-[75%]"
                        src={category.imgAddress}
                        alt={category.categoryName} />
                    <p>{category.categoryName}</p>
                </motion.div>

            )}
        </>
    )
}

export default CategoriesList

