import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { useDispatch, useSelector } from 'react-redux';
import { createProduct, getAdminProducts, updatedProduct } from '../../../slices/adminSlice/adminSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { STATUSES } from '../../../store/statuses';
import Loader from '../../layout/Loader/Loader';
const EditProduct = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { productDetails, status } = useSelector((state) => state.products);
    const { _id, name, price, description, category, stock } = productDetails;

    const [image, setImage] = useState(null);
    const [formData, setFormData] = useState({
        name: name,
        description: description,
        price: price,
        category: category,
        stock: stock,
    });

    useEffect(() => {
        setFormData({
            name: name,
            description: description,
            price: price,
            category: category,
            stock: stock,
        });
    }, [productDetails]);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const productData = new FormData();
        productData.append('name', formData.name);
        productData.append('description', formData.description);
        productData.append('price', formData.price);
        productData.append('category', formData.category);
        productData.append('stock', formData.stock);
        if (image) {
            productData.append('image', image);
        }
        dispatch(updatedProduct({ _id, productData })).then(() => {
            dispatch(getAdminProducts())
            navigate("/admin/manageproduct");
        })
    };

    if (status === STATUSES.LOADING) {
        return <div className="w-full grid place-content-center h-[80vh] ">
            <Loader />
        </div>

    }

    if (status === STATUSES.ERROR) {
        return <h2>Something went wrong!</h2>;
    }
    return (
        <div className="bg-slate-800 p-10 rounded-lg text-white">
            <h3 className="text-xl mb-4 text-cyan-500 font-bold ">Edit Product Details</h3>
            <form
                className="flex gap-4 text-black flex-col"
                onSubmit={handleSubmit}
            >
                <input
                    required
                    className="w-[300px] outline-none p-2 rounded-md"
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                />
                <textarea
                    required
                    className="w-[300px] outline-none p-2 rounded-md"
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleInputChange}
                />
                <input
                    required
                    className="w-[300px] outline-none p-2  rounded-md"
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={formData.price}
                    onChange={handleInputChange}
                />
                <input
                    required
                    className="w-[300px] outline-none p-2  rounded-md"
                    type="text"
                    name="category"
                    placeholder="Category"
                    value={formData.category}
                    onChange={handleInputChange}
                />
                <input
                    required
                    className="w-[300px] outline-none p-2  rounded-md"
                    type="number"
                    name="stock"
                    placeholder="Stock"
                    value={formData.stock}
                    onChange={handleInputChange}
                />
                <input
                    className="w-[300px] outline-none p-2  rounded-md"
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleImageChange}
                />
                <motion.input
                    type="submit"
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-[300px]  h-[40px] hover:bg-teal-700 bg-teal-600 rounded-lg"
                />
            </form>
        </div>
    );
};

export default EditProduct;
