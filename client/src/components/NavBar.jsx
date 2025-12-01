import React, { useState } from 'react';
import { ShoppingCart, User, Menu, X, ChevronDown } from 'lucide-react';

export default function NavBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [equipmentOpen, setEquipmentOpen] = useState(false);
    const [athleisureOpen, setAthleisureOpen] = useState(false);

    const equipmentCategories = ['Running', 'Cycling', 'Swimming', 'Gym Equipment', 'Team Sports'];
    const athleisureCategories = ['Tops', 'Bottoms', 'Outerwear', 'Footwear', 'Accessories'];

    return (
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
    );
}
