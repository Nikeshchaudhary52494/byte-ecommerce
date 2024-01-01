import React, { useState } from 'react';

const ShippingForm = () => {
    const [shippingInfo, setShippingInfo] = useState({
        address: '',
        state: '',
        country: 'India', // Default value
        phoneNumber: '',
        pinCode: '',
    });

    const handleInputChange = (e) => {
        setShippingInfo({
            ...shippingInfo,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Add your logic to handle the form submission, e.g., send the shippingInfo to the server
        console.log('Shipping Info:', shippingInfo);

        // Clear the form fields after submission
        setShippingInfo({
            address: '',
            state: '',
            country: 'India',
            phoneNumber: '',
            pinCode: '',
        });
    };

    return (
        <div className="border-t bg-slate-900 flex flex-col items-center p-10">
            <div className='bg-slate-800 p-5 rounded-md'>
                <p className="text-white text-3xl font-bold mb-5">Shipping Information</p>
                <form className="flex flex-col gap-4 w-full max-w-md" onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                        <label className="text-white">Address:</label>
                        <input
                            type="text"
                            name="address"
                            value={shippingInfo.address}
                            onChange={handleInputChange}
                            className="w-full outline-none p-2 rounded-md"
                            required
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-white">State:</label>
                        <input
                            type="text"
                            name="state"
                            value={shippingInfo.state}
                            onChange={handleInputChange}
                            className="w-full outline-none p-2 rounded-md"
                            required
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-white">Country:</label>
                        <input
                            type="text"
                            name="country"
                            value={shippingInfo.country}
                            onChange={handleInputChange}
                            className="w-full outline-none p-2 rounded-md"
                            required
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-white">Phone Number:</label>
                        <input
                            type="tel"
                            name="phoneNumber"
                            value={shippingInfo.phoneNumber}
                            onChange={handleInputChange}
                            className="w-full outline-none p-2 rounded-md"
                            required
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-white">Pin Code:</label>
                        <input
                            type="text"
                            name="pinCode"
                            value={shippingInfo.pinCode}
                            onChange={handleInputChange}
                            className="w-full outline-none p-2 rounded-md"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full p-2 bg-teal-600 rounded-lg hover:bg-teal-700"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ShippingForm;
