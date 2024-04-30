import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SubCategoryItems = ({ subcategory }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(`http://localhost:5000/items?subcategory=${subcategory}`);
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
    }, [subcategory]);

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-semibold mb-4 text-center mt-4">{subcategory} Items</h1>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map(item => (
                    <div key={item._id} className="bg-white shadow-md rounded-md overflow-hidden">
                        <img src={item.image} alt={item.item_name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold mb-2">{item.item_name}</h2>
                            <p className="text-gray-600 mb-2">{item.short_description}</p>
                            <p className="text-gray-800 font-semibold mb-2">${item.price}</p>
                            <Link to={`/item/${item._id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SubCategoryItems;
