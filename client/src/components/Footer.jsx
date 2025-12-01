import React from 'react';

export default function Footer() {
    return (
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
    );
}
