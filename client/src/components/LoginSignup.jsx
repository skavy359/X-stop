import React, { useState } from 'react';
import { Mail, Phone, Lock, User, Eye, EyeOff, ArrowLeft, CheckCircle } from 'lucide-react';

export default function LoginSignup() {
    const [isLogin, setIsLogin] = useState(true);
    const [loginMethod, setLoginMethod] = useState('email'); // 'email' or 'phone'
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your authentication logic here
    };

    const handleGoogleSignIn = () => {
        console.log('Google sign in clicked');
        // Implement Google OAuth
        // window.location.href = 'YOUR_GOOGLE_AUTH_URL';
    };

    const handleFacebookSignIn = () => {
        console.log('Facebook sign in clicked');
        // Implement Facebook OAuth
        // window.location.href = 'YOUR_FACEBOOK_AUTH_URL';
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden flex items-center justify-center p-4">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-500"></div>
            </div>

            {/* Back Button */}
            <button className="absolute top-8 left-8 flex items-center space-x-2 text-white hover:text-blue-400 transition-colors z-20">
                <ArrowLeft className="w-5 h-5" />
                <span className="font-semibold">Back to Home</span>
            </button>

            {/* Logo */}
            <div className="absolute top-8 right-8 text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent z-20">
                X-STOP
            </div>

            <div className="relative z-10 w-full max-w-md">
                {/* Main Card */}
                <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 transform hover:rotate-6 transition-transform">
                            <span className="text-white text-4xl font-bold">X</span>
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-2">
                            {isLogin ? 'Welcome Back!' : 'Join X-STOP'}
                        </h1>
                        <p className="text-blue-200">
                            {isLogin ? 'Sign in to your account' : 'Create your account to get started'}
                        </p>
                    </div>

                    {/* Toggle Login/Signup */}
                    <div className="flex bg-white/5 rounded-xl p-1 mb-6">
                        <button
                            onClick={() => setIsLogin(true)}
                            className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
                                isLogin
                                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                                    : 'text-blue-200 hover:text-white'
                            }`}
                        >
                            Login
                        </button>
                        <button
                            onClick={() => setIsLogin(false)}
                            className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
                                !isLogin
                                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                                    : 'text-blue-200 hover:text-white'
                            }`}
                        >
                            Sign Up
                        </button>
                    </div>

                    {/* Social Login Buttons */}
                    <div className="space-y-3 mb-6">
                        <button
                            onClick={handleGoogleSignIn}
                            className="w-full bg-white hover:bg-gray-100 text-gray-900 py-3 rounded-xl font-semibold flex items-center justify-center space-x-3 transition-all transform hover:scale-105 shadow-lg"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path
                                    fill="#4285F4"
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                />
                                <path
                                    fill="#34A853"
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                />
                                <path
                                    fill="#FBBC05"
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                />
                                <path
                                    fill="#EA4335"
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                />
                            </svg>
                            <span>Continue with Google</span>
                        </button>

                        <button
                            onClick={handleFacebookSignIn}
                            className="w-full bg-[#1877F2] hover:bg-[#166FE5] text-white py-3 rounded-xl font-semibold flex items-center justify-center space-x-3 transition-all transform hover:scale-105 shadow-lg"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                            <span>Continue with Facebook</span>
                        </button>
                    </div>

                    {/* Divider */}
                    <div className="relative mb-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-white/20"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-transparent text-blue-200 font-semibold">Or continue with</span>
                        </div>
                    </div>

                    {/* Login Method Toggle (Email/Phone) */}
                    {isLogin && (
                        <div className="flex bg-white/5 rounded-xl p-1 mb-6">
                            <button
                                onClick={() => setLoginMethod('email')}
                                className={`flex-1 py-2 rounded-lg font-semibold text-sm transition-all flex items-center justify-center space-x-2 ${
                                    loginMethod === 'email'
                                        ? 'bg-white/20 text-white'
                                        : 'text-blue-200 hover:text-white'
                                }`}
                            >
                                <Mail className="w-4 h-4" />
                                <span>Email</span>
                            </button>
                            <button
                                onClick={() => setLoginMethod('phone')}
                                className={`flex-1 py-2 rounded-lg font-semibold text-sm transition-all flex items-center justify-center space-x-2 ${
                                    loginMethod === 'phone'
                                        ? 'bg-white/20 text-white'
                                        : 'text-blue-200 hover:text-white'
                                }`}
                            >
                                <Phone className="w-4 h-4" />
                                <span>Phone</span>
                            </button>
                        </div>
                    )}

                    {/* Form Fields */}
                    <div className="space-y-4">
                        {/* Name (Signup only) */}
                        {!isLogin && (
                            <div>
                                <label className="block text-white font-semibold mb-2 text-sm">Full Name</label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-300" />
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full bg-white/10 border border-white/20 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                            </div>
                        )}

                        {/* Email or Phone */}
                        {(isLogin && loginMethod === 'email') || !isLogin ? (
                            <div>
                                <label className="block text-white font-semibold mb-2 text-sm">Email Address</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-300" />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full bg-white/10 border border-white/20 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition-all"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>
                        ) : null}

                        {/* Phone Number */}
                        {!isLogin || (isLogin && loginMethod === 'phone') ? (
                            <div>
                                <label className="block text-white font-semibold mb-2 text-sm">Phone Number</label>
                                <div className="relative">
                                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-300" />
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full bg-white/10 border border-white/20 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition-all"
                                        placeholder="+91 98765 43210"
                                    />
                                </div>
                            </div>
                        ) : null}

                        {/* Password */}
                        <div>
                            <label className="block text-white font-semibold mb-2 text-sm">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-300" />
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className="w-full bg-white/10 border border-white/20 rounded-xl pl-12 pr-12 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition-all"
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-300 hover:text-blue-400 transition-colors"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        {/* Confirm Password (Signup only) */}
                        {!isLogin && (
                            <div>
                                <label className="block text-white font-semibold mb-2 text-sm">Confirm Password</label>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-300" />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleInputChange}
                                        className="w-full bg-white/10 border border-white/20 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition-all"
                                        placeholder="••••••••"
                                    />
                                </div>
                            </div>
                        )}

                        {/* Remember Me & Forgot Password */}
                        {isLogin && (
                            <div className="flex items-center justify-between text-sm">
                                <label className="flex items-center space-x-2 text-blue-200 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="w-4 h-4 rounded border-white/20 bg-white/10 text-blue-500 focus:ring-blue-400"
                                    />
                                    <span>Remember me</span>
                                </label>
                                <button className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                                    Forgot Password?
                                </button>
                            </div>
                        )}

                        {/* Terms & Conditions (Signup only) */}
                        {!isLogin && (
                            <label className="flex items-start space-x-2 text-blue-200 text-sm cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 rounded border-white/20 bg-white/10 text-blue-500 focus:ring-blue-400 mt-0.5"
                                />
                                <span>
                  I agree to the{' '}
                                    <button className="text-blue-400 hover:text-blue-300 font-semibold">
                    Terms & Conditions
                  </button>{' '}
                                    and{' '}
                                    <button className="text-blue-400 hover:text-blue-300 font-semibold">
                    Privacy Policy
                  </button>
                </span>
                            </label>
                        )}

                        {/* Submit Button */}
                        <button
                            onClick={handleSubmit}
                            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg mt-6"
                        >
                            {isLogin ? 'Sign In' : 'Create Account'}
                        </button>
                    </div>

                    {/* Footer Text */}
                    <p className="text-center text-blue-200 text-sm mt-6">
                        {isLogin ? "Don't have an account? " : 'Already have an account? '}
                        <button
                            onClick={() => setIsLogin(!isLogin)}
                            className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                        >
                            {isLogin ? 'Sign Up' : 'Sign In'}
                        </button>
                    </p>
                </div>

                {/* Trust Badge */}
                <div className="mt-6 text-center">
                    <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-xl rounded-full px-4 py-2 border border-white/10">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-blue-200 text-sm">Secure & Encrypted Connection</span>
                    </div>
                </div>
            </div>
        </div>
    );
}