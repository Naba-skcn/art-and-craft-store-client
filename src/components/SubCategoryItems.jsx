import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const SubCategoryItems = () => {
    const {sub} = useParams();
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        const fetchItems = async () => {
            try {
                console.log(` https://art-and-craft-store-server-a10.vercel.app/subcategory/${sub}`)
                const response = await fetch(` https://art-and-craft-store-server-a10.vercel.app/subcategory/${sub}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch items');
                }
                const data = await response.json();
                setItems(data);
            } catch (error) {
                console.error('Error fetching items:', error);
            }
        };

        fetchItems();
    }, [sub]);

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-semibold mb-4 text-center mt-4">{sub} Items</h1>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map(item => (
                    <div key={item._id} className="bg-white shadow-md rounded-md overflow-hidden">
                        <img src={item.image} alt={item.item_name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
                            <p className="text-gray-600 mb-2">Subcategory: {item.sub}</p>
                            <p className="text-gray-600 mb-2">{item.description}</p>
                            <p className="text-gray-800 font-semibold mb-2">Price: ${item.price}</p>
                            <p className="text-gray-600 mb-2">Rating: {item.rating}</p>
                            <p className="text-gray-600 mb-2">Processing Time: {item.time} days</p>
                            <div className="flex justify-between">
                            <Link to={`/details/${item._id}`} className="btn bg-[#BA4A00] border-white text-white mr-2">View Details</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SubCategoryItems;
