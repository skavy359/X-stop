import React, { useState } from 'react';
import { ShoppingCart, User, Menu, X, ChevronDown } from 'lucide-react';

export default function XStopLanding() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [equipmentOpen, setEquipmentOpen] = useState(false);
    const [athleisureOpen, setAthleisureOpen] = useState(false);

    const equipmentCategories = ['Running', 'Cycling', 'Swimming', 'Gym Equipment', 'Team Sports'];
    const athleisureCategories = ['Tops', 'Bottoms', 'Outerwear', 'Footwear', 'Accessories'];

    const featuredProducts = [
        { name: 'Pro Runner X1', category: 'Running Shoes', price: '$129.99', image: 'bg-gradient-to-br from-blue-400 to-blue-600' },
        { name: 'FlexFit Yoga Mat', category: 'Equipment', price: '$49.99', image: 'bg-gradient-to-br from-purple-400 to-purple-600' },
        { name: 'Urban Joggers', category: 'Athleisure', price: '$79.99', image: 'bg-gradient-to-br from-gray-400 to-gray-600' },
        { name: 'Elite Dumbbell Set', category: 'Gym Equipment', price: '$199.99', image: 'bg-gradient-to-br from-red-400 to-red-600' },
        { name: 'Performance Tee', category: 'Apparel', price: '$39.99', image: 'bg-gradient-to-br from-green-400 to-green-600' },
        { name: 'Speed Bike Pro', category: 'Cycling', price: '$899.99', image: 'bg-gradient-to-br from-orange-400 to-orange-600' },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation Bar */}
            <nav className="bg-black text-white sticky top-0 z-50 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex items-center">
                            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                X-STOP
                            </div>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {/* Equipment Dropdown */}
                            <div className="relative">
                                <button
                                    onMouseEnter={() => setEquipmentOpen(true)}
                                    onMouseLeave={() => setEquipmentOpen(false)}
                                    className="flex items-center space-x-1 hover:text-blue-400 transition-colors"
                                >
                                    <span>Equipment</span>
                                    <ChevronDown className="w-4 h-4" />
                                </button>
                                {equipmentOpen && (
                                    <div
                                        onMouseEnter={() => setEquipmentOpen(true)}
                                        onMouseLeave={() => setEquipmentOpen(false)}
                                        className="absolute top-full left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-xl py-2"
                                    >
                                        {equipmentCategories.map((cat) => (
                                            <a
                                                key={cat}
                                                href="#"
                                                className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                            >
                                                {cat}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Athleisure Dropdown */}
                            <div className="relative">
                                <button
                                    onMouseEnter={() => setAthleisureOpen(true)}
                                    onMouseLeave={() => setAthleisureOpen(false)}
                                    className="flex items-center space-x-1 hover:text-blue-400 transition-colors"
                                >
                                    <span>Athleisure</span>
                                    <ChevronDown className="w-4 h-4" />
                                </button>
                                {athleisureOpen && (
                                    <div
                                        onMouseEnter={() => setAthleisureOpen(true)}
                                        onMouseLeave={() => setAthleisureOpen(false)}
                                        className="absolute top-full left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-xl py-2"
                                    >
                                        {athleisureCategories.map((cat) => (
                                            <a
                                                key={cat}
                                                href="#"
                                                className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                            >
                                                {cat}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <a href="#" className="hover:text-blue-400 transition-colors">About</a>
                            <a href="#" className="hover:text-blue-400 transition-colors">Contact</a>
                        </div>

                        {/* Right Side Icons */}
                        <div className="hidden md:flex items-center space-x-4">
                            <button className="hover:text-blue-400 transition-colors">
                                <ShoppingCart className="w-6 h-6" />
                            </button>
                            <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors">
                                <User className="w-5 h-5" />
                                <span>Login</span>
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-gray-900 border-t border-gray-800">
                        <div className="px-4 py-3 space-y-3">
                            <a href="#" className="block hover:text-blue-400">Equipment</a>
                            <a href="#" className="block hover:text-blue-400">Athleisure</a>
                            <a href="#" className="block hover:text-blue-400">About</a>
                            <a href="#" className="block hover:text-blue-400">Contact</a>
                            <button className="w-full bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors">
                                Login / Sign Up
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
                    <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
                            Unleash Your
                            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Athletic Potential
              </span>
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
                            Premium sports equipment and athleisure wear designed for champions. Elevate your performance, embrace your style.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-xl">
                                Shop Equipment
                            </button>
                            <button className="bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-xl">
                                Explore Athleisure
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Categories */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Shop by Category</h2>
                        <p className="text-gray-600 text-lg">Find exactly what you need to reach your goals</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="group cursor-pointer">
                            <div className="relative h-64 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl overflow-hidden shadow-lg transform transition-all group-hover:scale-105">
                                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <h3 className="text-3xl font-bold text-white">Running</h3>
                                </div>
                            </div>
                        </div>

                        <div className="group cursor-pointer">
                            <div className="relative h-64 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl overflow-hidden shadow-lg transform transition-all group-hover:scale-105">
                                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <h3 className="text-3xl font-bold text-white">Training</h3>
                                </div>
                            </div>
                        </div>

                        <div className="group cursor-pointer">
                            <div className="relative h-64 bg-gradient-to-br from-pink-500 to-pink-700 rounded-2xl overflow-hidden shadow-lg transform transition-all group-hover:scale-105">
                                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <h3 className="text-3xl font-bold text-white">Lifestyle</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Catalog */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
                        <p className="text-gray-600 text-lg">Our most popular items, loved by athletes worldwide</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredProducts.map((product, index) => (
                            <div key={index} className="group cursor-pointer">
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
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black text-white pt-12 pb-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        {/* Brand Column */}
                        <div>
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
                                X-STOP
                            </h3>
                            <p className="text-gray-400 mb-4">
                                Your premier destination for high-performance sports equipment and stylish athleisure wear.
                            </p>
                        </div>

                        {/* Shop Column */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Shop</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-blue-400 transition-colors">Equipment</a></li>
                                <li><a href="#" className="hover:text-blue-400 transition-colors">Athleisure</a></li>
                                <li><a href="#" className="hover:text-blue-400 transition-colors">New Arrivals</a></li>
                                <li><a href="#" className="hover:text-blue-400 transition-colors">Sale</a></li>
                            </ul>
                        </div>

                        {/* Support Column */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Support</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
                                <li><a href="#" className="hover:text-blue-400 transition-colors">Shipping Info</a></li>
                                <li><a href="#" className="hover:text-blue-400 transition-colors">Returns</a></li>
                                <li><a href="#" className="hover:text-blue-400 transition-colors">FAQ</a></li>
                            </ul>
                        </div>

                        {/* Company Column */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Company</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
                                <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
                                <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Footer */}
                    <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm mb-4 md:mb-0">
                            © 2024 X-Stop. All rights reserved.
                        </p>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Facebook</a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Instagram</a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Twitter</a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">YouTube</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}