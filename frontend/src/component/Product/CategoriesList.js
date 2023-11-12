import React from 'react'
import { motion } from "framer-motion"

const CategoriesList = () => {
    const categoriesList = [{
        imgAddress: "https://m.media-amazon.com/images/I/315vs3rLEZL._SY445_SX342_QL70_FMwebp_.jpg",
        categoryName: "Phones"
    },
    {
        imgAddress: "https://m.media-amazon.com/images/I/316ArzLeJ2L._SY445_SX342_QL70_FMwebp_.jpg",
        categoryName: "Laptops"
    },
    {
        imgAddress: "https://m.media-amazon.com/images/I/61Xv6ytnYiL._UY741_.jpg",
        categoryName: "Fashion"
    },
    {
        imgAddress: "https://m.media-amazon.com/images/I/31zwQpCoUTL._SX300_SY300_QL70_FMwebp_.jpg",
        categoryName: "HouseHolds"
    },
    {
        imgAddress: "https://m.media-amazon.com/images/I/61ZrPtiuqSL._SY450_.jpg",
        categoryName: "Watches"
    },
    {
        imgAddress: "https://rukminim2.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100",
        categoryName: "Furnitures"
    },
    {
        imgAddress: "https://rukminim2.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100",
        categoryName: "Toys"
    },
    {
        imgAddress: "https://rukminim2.flixcart.com/image/416/416/xif0q/cycle/t/a/g/hustler-single-speed-26-18-5-cradiac-108-single-speed-original-imagqtzqpmgyejaw.jpeg?q=70",
        categoryName: "bicylces"
    }
    ]

    return (
        <>
            {categoriesList.map((category) =>
                <motion.div whileHover={{ scale: 1.3 }} class="w-[100px] mt-1 p-1 bg-white border sm:border-none rounded-lg flex items-center justify-center flex-col h-[100px]" >
                    <img class="h-[75%]" src={category.imgAddress} alt={category.categoryName} />
                    <p>{category.categoryName}</p>
                </motion.div>

            )}
        </>
    )
}

export default CategoriesList

