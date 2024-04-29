import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'

const AddItem = () => {

    
    const handleAddItem = event =>{
        event.preventDefault();

        const form = event.target;

        const image = form.image.value;
        const name = form.name.value;
        const sub = form.sub.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const custom = form.custom.value;
        const time = form.time.value;
        const status = form.status.value;
        const email = form.email.value;
        const username = form.username.value;

        const newItem = {image, name, sub, description, price, rating, custom, time, status, email, username}
        console.log(newItem);

        // send data to the server
        fetch('http://localhost:5000/add',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newItem)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'User added successfully',
                    icon: 'success',
                    confirmButtonText: 'Great'
                  })
            }
        })

    }
    return (
        <div className='container mx-auto'>
            <section className="p-6 bg-center bg-cover bg-[url('https://as1.ftcdn.net/v2/jpg/05/68/33/96/1000_F_568339635_3IBKf4NozBKgIPSuTeHi1WB5Bog4hbXm.jpg')] dark:text-gray-900">
                <form onSubmit={handleAddItem} noValidate="" action="" className="container flex flex-col mx-auto bg-opacity-30 backdrop-blur-lg p-8 space-y-12">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-medium text-2xl">Product Information</p>
                            <p className="text-1xl">Add your artisanal masterpiece to our collection! Share the details of your unique creation and let it shine in the spotlight at RusticChic Crafts. Your craftsmanship deserves to be celebrated.</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full">
                                <label htmlFor="item_name" className="text-sm">Item Image</label>
                                <input id="item_name" name='image' type="url" placeholder="photo Url" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="item_name" className="text-sm">Item Name</label>
                                <input id="item_name" name='name' type="text" placeholder="Item Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
    <label htmlFor="subcategory" className="text-sm">Subcategory</label>
    <select id="subcategory" name="sub" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300">
        <option value="">Select Subcategory</option>
        <option value="Wooden Furniture & Sculptures">Wooden Furniture & Sculptures</option>
        <option value="Wooden Home Decor">Wooden Home Decor</option>
        <option value="Wooden Utensils and Kitchenware">Wooden Utensils and Kitchenware</option>
        <option value="Jute Home Decor">Jute Home Decor</option>
        <option value="Jute Kitchenware & utensils">Jute Kitchenware & utensils</option>
        <option value="Jute and wooden jewellery">Jute and wooden jewellery</option>
    </select>
</div>

                            <div className="col-span-full">
                                <label htmlFor="short_description" className="text-sm">Short Description</label>
                                <textarea id="short_description" name='description' placeholder="Short Description" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"></textarea>
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="price" className="text-sm">Price</label>
                                <input id="price" type="number" name='price' placeholder="Price" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="rating" className="text-sm">Rating</label>
                                <input id="rating" type="number" name='rating' placeholder="Rating" min="0" max="5" step="0.1" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="customization" className="text-sm">Customization</label>
                                <select id="customization" name='custom' className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300">
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="processing_time" className="text-sm">Processing Time</label>
                                <input id="processing_time" type="text" name='time' placeholder="Processing Time" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="stock_status" className="text-sm">Stock Status</label>
                                <select id="stock_status" name='status' className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300">
                                    <option value="In stock">In stock</option>
                                    <option value="Made to order">Made to order</option>
                                </select>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="user_email" className="text-sm">User Email</label>
                                <input id="user_email" type="email" name='email' placeholder="User Email" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="user_name" className="text-sm">User Name</label>
                                <input id="user_name" type="text" name='username' placeholder="User Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <button type="submit" className="btn btn-block text-white rounded-md bg-[#BA4A00] border-[#BA4A00]">Add</button>
                        </div>
                    </fieldset>
                </form>
            </section>
        </div>
    );
};

export default AddItem;
