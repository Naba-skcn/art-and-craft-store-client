import React from 'react';

const Card = () => {
    return (
        <div>
            <div className="ml-[0px] sm:ml-[0px] lg:ml-[410px]">
                <div className="flex flex-col gap-4 max-w-md p-6 dark:bg-gray-50 dark:text-gray-800">
                    <div className="flex flex-col">
                        <img src={items.image} alt="" className="flex-shrink-0 h-50 rounded-sm sm:h-[200px] dark:bg-gray-500 aspect-square" />
                        <div className="animate__animated animate__lightSpeedInRight">
                            <h2 className="text-xl font-semibold">{items.name}</h2>
                            <span className="block pb-2 text-sm dark:text-gray-600">{items.sub}</span>
                            <p>{items.description}</p>
                        </div>
                    </div>

                    <div className="animate__animated animate__lightSpeedInLeft">
                        <p className="text-1xl font-semibold">Price: ${items.price}</p>
                        <p><span className="font-bold">Rating:</span> {items.rating}</p>
                        <p><span className="font-bold">Customization:</span> {items.custom}</p>
                        <p><span className="font-bold">Processing Time:</span> {items.time}</p>
                        <p><span className="font-bold">Stock Status:</span> {items.status}</p>
                        <p><span className="font-bold">User Email:</span> {items.email}</p>
                        <p><span className="font-bold">User Name:</span> {items.username}</p>
                        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;