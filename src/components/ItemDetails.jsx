// ItemDetails.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetails = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const fetchItemDetails = async () => {
            try {
                const response = await fetch(` https://art-and-craft-store-server-a10.vercel.app/item/${itemId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch item details');
                }
                const data = await response.json();
                setItem(data);
            } catch (error) {
                console.error('Error fetching item details:', error);
            }
        };

        fetchItemDetails();
    }, [itemId]);

    if (!item) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-semibold mb-4 text-center mt-4">{item.item_name}</h1>
            <div className="bg-white shadow-md rounded-md overflow-hidden">
                <img src={item.image} alt={item.item_name} className="w-full h-96 object-cover" />
                <div className="p-4">
                    <p className="text-gray-600 mb-2">{item.description}</p>
                    <p className="text-gray-800 font-semibold mb-2">${item.price}</p>
                    <p className="text-gray-600 mb-2">Rating: {item.rating}</p>
                    <p className="text-gray-600 mb-2">Processing Time: {item.processing_time} days</p>
                </div>
            </div>
        </div>
    );
};

export default ItemDetails;
