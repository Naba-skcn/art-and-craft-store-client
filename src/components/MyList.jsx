import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import UseAuth from './routes/UseAuth';

const MyList = () => {
    const { user } = UseAuth();

    const [items, setItems] = useState([]); // State for all items
    const [filteredItems, setFilteredItems] = useState([]); // State for filtered items
    const [customizationFilter, setCustomizationFilter] = useState('all'); // State for filter

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/update/${user.email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setItems(data); // Set items retrieved from the server
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }
    }, [user]);

    useEffect(() => {
        // Apply filter when items or customizationFilter changes
        if (customizationFilter === 'all') {
            setFilteredItems(items); // Show all items
        } else {
            const filtered = items.filter(item => item.custom === customizationFilter); // Filter items based on customization
            setFilteredItems(filtered);
        }
    }, [items, customizationFilter]);

    const handleFilterChange = event => {
        setCustomizationFilter(event.target.value);
    };

    const handleDelete = itemId => {
        // Implement delete functionality
        console.log(`Delete item with id ${itemId}`);
    };

    const handleUpdate = itemId => {
        // Implement update functionality
        console.log(`Update item with id ${itemId}`);
    };

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-semibold mb-4 text-center">My Craft List</h1>
            <div className="flex justify-end mb-4">
                <label htmlFor="customizationFilter" className="mr-2">Filter by Customization:</label>
                <select id="customizationFilter" value={customizationFilter} onChange={handleFilterChange} className="px-2 py-1 border border-gray-300 rounded">
                    <option value="all">All</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filteredItems.map(item => (
                    <div key={item._id} className="bg-white shadow-md rounded-md overflow-hidden">
                        <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold">{item.name}</h2>
                            <p className="text-gray-500">${item.price}</p>
                            <p className="text-gray-500">Rating: {item.rating}</p>
                            <p className="text-gray-500">Customization: {item.custom}</p>
                            <p className="text-gray-500">Stock Status: {item.status}</p>
                            <div className="flex justify-between mt-2">
                                <Link to={`/details/${item._id}`} className="text-blue-500 hover:underline">View Details</Link>
                                <div>
                                    <Link to={`/details/${item._id}`}>
                                    <button onClick={() => handleUpdate(item._id)} className="btn bg-[#BA4A00] border-white text-white mr-2">Update</button>
                                    </Link>
                                    <Link>
                                    <button onClick={() => handleDelete(item._id)} className="btn bg-[#BA4A00] border-white text-white">Delete</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyList;
