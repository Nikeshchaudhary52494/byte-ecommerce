import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchProducts2 } from '../../slices/productSlice/productsSlice';


const SearchBar = () => {
    //useNavigate is used for programmatic navigation in React components.
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState("");
    const searchSubmitHandler = (e) => {
        e.preventDefault();
        if (keyword.trim()) {  //trim removes space from the beginning and end
            dispatch(fetchProducts2({ keyword }));
            navigate(`/products/${keyword}`);
        } else {
            navigate("/products")
        }
    };
    return (

        <form class=" flex justify-center w-full" disabled={!keyword} onSubmit={searchSubmitHandler}>
            <input class="text-black outline-none h-[40px] pl-5  rounded-md mx-auto w-3/4 md:w-full " type="text" placeholder='Search product ' onChange={(e) => setKeyword(e.target.value)} />
        </form>

    )
}

export default SearchBar