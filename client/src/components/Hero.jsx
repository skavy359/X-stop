import React from 'react';

export default function Hero() {
    return (
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
    );
}
