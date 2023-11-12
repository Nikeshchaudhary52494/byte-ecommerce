import React from 'react'
import { RiH2 } from 'react-icons/ri'

const Categories = () => {
    const categories = [{
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
          
            {categories ? (
                <div class=" mx-auto overflow-x-auto " >
                    <div className='grid grid-cols-3 md:flex  gap-1 mx-10 mt-10 lg:gap-10  md:m-0'>
                        {categories.map((category) =>
                            <div class="w-[100px] m-1 p-1 bg-white border shadow-lg flex items-center justify-center flex-col h-[100px]" >
                                <img class="h-[75%]" src={category.imgAddress} alt="Hello" />
                                <p>{category.categoryName}</p>
                            </div>

                        )}
                    </div>
                </div>
            ) : (
                <p class="text-center mb-32 text-red-400 font-medium">
                    No Rerview Available
                </p>
            )}</>
    )
}

export default Categories

