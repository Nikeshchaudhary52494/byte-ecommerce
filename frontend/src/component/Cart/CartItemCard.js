import { ImBin } from 'react-icons/im';

const CartItemCard = ({ product, removeProductFromCart }) => {

    return (
        <div className='flex justify-between px-4 my-2 border bg-slate-800 w-full rounded-md py-2 items-center'>
            <div className='flex gap-10'>
                <div className='bg-white p-2 rounded-md'>
                    <img className='h-14' src={product.image} alt='product img' />
                </div>
                <div>
                    <p className='text-xl'>{product.name} <span className='text-blue-500'>{product.quantity > 1 ? `x ${product.quantity}` : ''}</span> </p>
                    <p className='text-orange-500 font-bold'>{`$${product.price}`}</p>
                </div>
            </div>
            <button className='text-red-500' onClick={() => removeProductFromCart(product.productId)}>
                <ImBin />
            </button>
        </div>
    );
};

export default CartItemCard;
