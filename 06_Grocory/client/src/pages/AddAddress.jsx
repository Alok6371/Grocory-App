import React, { useState } from 'react'
import { assets } from '../assets/greencart_assets/assets'

const AddAddress = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        country: "",
        phone: ""
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        console.log("formData", formData)
    }

    return (
        <div className='mt-[10vh] h-[75vh] m-16 flex flex-col md:flex-row gap-6 p-6 bg-gray-100 rounded-lg shadow-md'>

            {/* Left Side */}
            <div className='flex-1 bg-white p-6 rounded-lg shadow'>
                <h2 className='text-3xl font-semibold mb-4'>Address Details</h2>

                <form onSubmit={submitHandler} className='grid grid-cols-1 md:grid-cols-2 gap-4'>

                    <div>
                        <label className='block text-gray-600'>First Name</label>
                        <input
                            type="text"
                            name='firstName'
                            value={formData.firstName}
                            onChange={handleChange}
                            className='w-full p-2 border-2 border-gray-400 rounded-md'
                            required
                        />
                    </div>

                    <div>
                        <label className='block text-gray-600'>Last Name</label>
                        <input
                            type="text"
                            name='lastName'
                            value={formData.lastName}
                            onChange={handleChange}
                            className='w-full p-2 border-2 border-gray-400 rounded-md'
                            required
                        />
                    </div>

                    <div className='col-span-2'>
                        <label className='block text-gray-600'>Email</label>
                        <input
                            type="email"
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            className='w-full p-2 border-2 border-gray-400 rounded-md'
                            required
                        />
                    </div>

                    <div className='col-span-2'>
                        <label className='block text-gray-600'>Street</label>
                        <input
                            type="text"
                            name='street'
                            value={formData.street}
                            onChange={handleChange}
                            className='w-full p-2 border-2 border-gray-400 rounded-md'
                            required
                        />
                    </div>

                    <div>
                        <label className='block text-gray-600'>City</label>
                        <input
                            type="text"
                            name='city'
                            value={formData.city}
                            onChange={handleChange}
                            className='w-full p-2 border-2 border-gray-400 rounded-md'
                            required
                        />
                    </div>

                    <div>
                        <label className='block text-gray-600'>State</label>
                        <input
                            type="text"
                            name='state'
                            value={formData.state}
                            onChange={handleChange}
                            className='w-full p-2 border-2 border-gray-400 rounded-md'
                            required
                        />
                    </div>

                    <div>
                        <label className='block text-gray-600'>Zip Code</label>
                        <input
                            type="text"
                            name='zip'
                            value={formData.zip}
                            onChange={handleChange}
                            className='w-full p-2 border-2 border-gray-400 rounded-md'
                            required
                        />
                    </div>

                    <div>
                        <label className='block text-gray-600'>Country</label>
                        <input
                            type="text"
                            name='country'
                            value={formData.country}
                            onChange={handleChange}
                            className='w-full p-2 border-2 border-gray-400 rounded-md'
                            required
                        />
                    </div>

                    <div className='col-span-2'>
                        <label className='block text-gray-600'>Phone</label>
                        <input
                            type="tel"
                            name='phone'
                            value={formData.phone}
                            onChange={handleChange}
                            className='w-full p-2 border-2 border-gray-400 rounded-md'
                            required
                        />
                    </div>

                    <div className='col-span-2'>
                        <button
                            type='submit'
                            className='w-full p-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md'
                        >
                            Save Address
                        </button>
                    </div>
                </form>
            </div>

            {/* Right Side */}
            <div className='flex-1 flex items-center justify-center'>
                <img
                    src={assets.add_address_iamge}
                    className='w-full max-w-md rounded-lg shadow-md'
                    alt="Add Address"
                />
            </div>

        </div>
    )
}

export default AddAddress
