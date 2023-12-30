import React from 'react'
import { ImBin } from "react-icons/im";


const CartItemCard = () => {
    return (
        <>
            <div className='flex justify-between p-2 my-2 border bg-slate-800 w-full rounded-md items-center'>
                <div>
                    <img className='h-14' src="https://www.reliancedigital.in/medias/Apple-iPhone-15-512GB-Black-493839319-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzMDYxNjR8aW1hZ2UvanBlZ3xpbWFnZXMvaDRmL2g0NS8xMDA1MTg3ODUxODgxNC5qcGd8ZGVmYTc3MTc3ODExZjZmMTM4Njg4MGEwYWU5YjhhZTFmODQ5YTZkMTY2ODVlZTI3ZDRhNDM3ODNlODJjNjE3ZA" alt="product img" />
                </div>
                <div>
                    <p className='text-xl'>Iphone</p>
                    <p className='text-orange-500 font-bold'>$1000</p>
                </div>
                <button className='text-red-500'>
                    <ImBin />
                </button>
            </div>
        </>
    )
}

export default CartItemCard