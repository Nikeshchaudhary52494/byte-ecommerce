import React from 'react';
import { ImBin } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../slices/cartSlice/cartSlice';

const CartItemCard = ({ product }) => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user);

    const removeProductFromCart = (userId, productId) => {
        dispatch(removeFromCart({ userId, productId }));
    };

    return (
        <div className='flex justify-between p-2 my-2 border bg-slate-800 w-full rounded-md items-center'>
            <div className='bg-white p-2 rounded-md'>
                {product.productImage && product.productImage[0] && (
                    <img className='h-14' src={product.productImage[0].url} alt='product img' />
                )}
            </div>
            <div>
                <p className='text-xl'>{product.productName} <span className='text-blue-500'>{product.quantity > 1 ? `x ${product.quantity}` : ''}</span> </p>
                <p className='text-orange-500 font-bold'>{`$${product.productPrice}`}</p>
            </div>
            <button className='text-red-500' onClick={() => removeProductFromCart(user._id, product.productId)}>
                <ImBin />
            </button>
        </div>
    );
};

export default CartItemCard;
