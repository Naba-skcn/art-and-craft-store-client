import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const items = useLoaderData();

    return (
        <div className="container mx-auto">
             {
                items.map(item => (
                    <div key={item._id} className="flex flex-col gap-4 max-w-md p-6 dark:bg-gray-50 dark:text-gray-800">
                        <div className="flex flex-col">
                            <img src={item.image} alt="" className="flex-shrink-0 h-50 rounded-sm sm:h-[200px] dark:bg-gray-500 aspect-square" />
                            <div className="animate__animated animate__lightSpeedInRight">
                                <h2 className="text-xl font-semibold">{item.name}</h2>
                                <span className="block pb-2 text-sm dark:text-gray-600">{item.sub}</span>
                                <p>{item.description}</p>
                            </div>
                        </div>

                        <div className="animate__animated animate__lightSpeedInLeft">
                            <p className="text-1xl font-semibold">Price: ${item.price}</p>
                            <p><span className="font-bold">Rating:</span> {item.rating}</p>
                            <p><span className="font-bold">Customization:</span> {item.custom}</p>
                            <p><span className="font-bold">Processing Time:</span> {item.time}</p>
                            <p><span className="font-bold">Stock Status:</span> {item.status}</p>
                            <p><span className="font-bold">User Email:</span> {item.email}</p>
                            <p><span className="font-bold">User Name:</span> {item.username}</p>
                            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                                Add
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default ViewDetails;
