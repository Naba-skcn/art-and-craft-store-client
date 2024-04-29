import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ViewDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/singleProduct/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                setLoading(false);
            });
    }, [id]);

    return (
        <div className="container mx-auto py-8">
            <h2 className="text-4xl font-bold mb-8 text-center">Product Details</h2>
            {product && (
                <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                    <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                    <div className="p-8">
                        <h3 className="text-2xl font-semibold mb-4">{product.name}</h3>
                        <p className="text-gray-600 text-sm mb-4">{product.sub}</p>
                        <p className="text-gray-800 leading-relaxed mb-4">{product.description}</p>
                        <div className="flex justify-between items-center mb-4">
                            <p className="text-lg font-semibold">${product.price}</p>
                            <div className="flex items-center space-x-2">
                                <p className="font-semibold">Rating:</p>
                                <p>{product.rating}</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center mb-4">
                            <p className="text-sm"><span className="font-semibold">Customization:</span> {product.custom}</p>
                            <p className="text-sm"><span className="font-semibold">Processing Time:</span> {product.time}</p>
                        </div>
                        <div className="flex justify-between items-center mb-4">
                            <p className="text-sm"><span className="font-semibold">Stock Status:</span> {product.status}</p>
                            <p className="text-sm"><span className="font-semibold">User Email:</span> {product.email}</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-sm"><span className="font-semibold">User Name:</span> {product.username}</p>
                            <button className=" btn bg-[#BA4A00] border-white text-white">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ViewDetails;
