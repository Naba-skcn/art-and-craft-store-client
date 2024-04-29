import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CraftItemSection = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/item');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setItems(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-semibold mb-4 text-center mt-4">Craft Products</h1>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map(item => (
                    <div key={item._id} className="bg-white shadow-md rounded-md overflow-hidden">
                        <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold">{item.name}</h2>
                            <p className="text-gray-500">Price: ${item.price}</p>
                            <p className="text-gray-500">Rating: {item.rating}</p>
                            <p className="text-gray-500">Customization: {item.custom}</p>
                            <p className="text-gray-500">Stock Status: {item.status}</p>
                            <div className="flex justify-between mt-2">
                                <Link to={`/details/${item._id}`} className=" btn bg-[#BA4A00] border-white text-white">View Details</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CraftItemSection;
