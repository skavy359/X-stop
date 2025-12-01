import React from 'react';

export default function ProductCard({ product }) {
    return (
        <div className="group cursor-pointer">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all transform group-hover:scale-105 group-hover:shadow-2xl">
                <div className={`h-64 ${product.image} flex items-center justify-center transition-all`}>
                    <div className="text-white text-6xl font-bold opacity-20">X</div>
                </div>
                <div className="p-6">
                    <p className="text-sm text-blue-600 font-semibold mb-2">{product.category}</p>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                    <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                        <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
