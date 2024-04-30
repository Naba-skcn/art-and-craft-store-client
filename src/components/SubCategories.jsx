import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SubCategories = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(' https://art-and-craft-store-server-a10.vercel.app/categories');
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
            <h1 className="text-3xl font-semibold mb-4 text-center mt-4">Craft Categories</h1>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map(category => (
                    <Link to={`/subcategory/${category.sub}`} key={category._id}>
                        <div className="bg-white shadow-md rounded-md overflow-hidden">
                            <img src={category.image} alt={category.name} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h2 className="text-lg font-semibold mb-2">{category.sub}</h2>
                            </div>
                        </div>
                    </Link>
                   
                ))}
            </div>
        </div>
    );
};

export default SubCategories;
