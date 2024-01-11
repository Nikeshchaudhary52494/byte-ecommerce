import { ImBin } from 'react-icons/im';
import { useNavigate } from 'react-router-dom';

const CartItemCard = ({ product, removeProductFromCart }) => {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col sm:flex-row justify-between px-4 my-2 border bg-slate-800 w-full rounded-md py-2 items-center'>
            <div className='flex sm:flex-row flex-col gap-10'>
                <div className='bg-white p-2 rounded-md'>
                    <img className='sm:h-14 mx-auto sm:mx-0 sm:w-14 h-40  object-cover' src={product.image} alt='product img' />
                </div>
                <div className='cursor-pointer' onClick={() => navigate(`/product/${product.productId}`)} >
                    <p className='text-xl'>{product.name} <span className='text-blue-500'>{product.quantity > 1 ? `x ${product.quantity}` : ''}</span> </p>
                    <p className='text-orange-500 font-bold'>{`$${product.price}`}</p>
                </div>
            </div>
            <button className='sm:text-red-500 flex justify-center bg-transparent bg-red-500 w-full p-2 sm:w-fit rounded-md mb-2 mt-5' onClick={() => removeProductFromCart(product.productId)}>
                <ImBin />
            </button>
        </div>
    );
};

export default CartItemCard;
