import React, { useState } from 'react';
import axios from 'axios';
import { motion } from "framer-motion";
const AddProductForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: 0,
        category: '',
        stock: 1,
    });
    const [image, setImage] = useState(null);
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
        productData.append('image', image);

        try {
            const response = await axios.post('/api/products', productData);
            console.log('Product added successfully:', response.data);
            setFormData({
                name: '',
                description: '',
                price: 0,
                category: '',
                stock: 1,
            });
            setImage(null);
        } catch (error) {
            console.error('Error adding product:', error.message);
        }
    };

    return (
        <div className="grid bg-slate-900 h-[100vh] fixed z-20 top-0 left-0 w-[100vw] place-content-center">
            <div className="bg-slate-800 p-10 rounded-lg text-white">
                <div className="px-4">
                    <h3 className="text-xl mb-4 text-blue-500 font-bold italic ">Add Product</h3>
                </div>
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
                        required
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
        </div>
    );
};

export default AddProductForm;
