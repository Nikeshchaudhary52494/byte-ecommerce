import React from "react";
import { Link } from "react-router-dom";
import ReactStarts from "react-rating-stars-component";
// import Slider from '@mui/material/Slider';


const ProductCard = ({ product }) => {
  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 20 : 25,
    value: product.rating,
    isHalf: true,
  };
  return (
    <Link
      to={`/product/${product._id}`}
      class="flex flex-col hover:-translate-y-1 duration-500 shadow-md m-4 "
    >
      <div class="w-[250px] p-4 h-[400px]">
        <p class="h-3/4">
          <img src={product.images[0].url} alt={product.name} />
        </p>
        <p class="font-medium text-xl">{product.name}</p>
        <div class="flex items-center gap-2">
          <ReactStarts {...options} />
          <span>{product.numberOfReviews}</span>
        </div>
        <span class="text-orange-500 font-bold">{`$${product.price}`}</span>
      </div>
    </Link>
  );
};

export default ProductCard;
