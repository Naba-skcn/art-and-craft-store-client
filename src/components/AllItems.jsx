import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Items from './Items';

const AllItems = () => {
    const items = useLoaderData();
    return (
           <div className="container mx-auto">
            <h1 className="text-3xl font-semibold mb-4 text-center">All Art & Craft Items</h1>
            {
                items.map(item => <Items key={item._id} item={item}></Items>)
            }
           
        </div>

    );
};

export default AllItems;