import React from 'react'
import { useState } from 'react';
import { Eye, EyeOff, ArrowRight, Shield, Mail, Lock } from 'lucide-react';
import { Link } from 'react-router';
import { Outlet } from 'react-router';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempted with:', { email, password, rememberMe });
  };

  return (
    <div className="min-h-screen lg:bg-gradient-to-br from-[#000003]via-black to-gray-800 flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:flex-1 lg:flex-col lg:justify-between lg:p-12 mt-40 ">
        <div>
          
          <div className='justify-center align-middle items-center'>
            <h2 className="text-6xl font-bold text-white mb-6 leading-tight">
              Welcome back to<br />
              <span className="text-[#00df9a]">data analytics</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Continue your journey with fast, flexible financing for BTC platforms.<br />
              Monitor your analytics and drive revenue growth.
            </p>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="relative">
          <div className="absolute -top-230 left-10 w-32 h-32 bg-[#00df9a] rounded-full opacity-10 blur-2xl animate-pulse"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#00df9a] rounded-full opacity-5 blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 lg:p-12">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
            <div className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 rounded-2xl p-8 shadow-4xl">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
              <p className="text-gray-400">Sign in to your account to continue</p>
            </div>

            <div className='space-y-6'>
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00df9a] focus:border-transparent transition-all duration-200"
                    placeholder="JohnDoe@react.com"
                    required
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-12 pr-12 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00df9a] focus:border-transparent transition-all duration-200"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#00df9a] hover:text-green-500 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)} />                  
                  <label htmlFor="remember-me" className="ml-2 text-sm text-gray-300">
                    Remember me
                  </label>
                </div>
                <button
                  type="button"
                  className="text-sm text-[#00df9a] hover:text-green-500 transition-colors"
                ><Link to='/forgot'>Forgot password?</Link> </button>
              </div>

              {/* Login Button */}
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-[#00df9a] hover:bg-green-500 text-black font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center group"
              >
                Sign In
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Divider */}
            <div className="my-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-gray-900 text-gray-400">Or continue with</span>
                </div>
              </div>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-700/50 transition-all duration-200">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google
              </button>
              <button className="flex items-center justify-center px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-700/50 transition-all duration-200">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
                Twitter
              </button>
            </div>

            {/* Sign Up Link */}
            <div className="mt-8 text-center">
              <p className="text-gray-400">
                New user?{' '}
                <button className="text-green-400 hover:text-green-300 font-medium transition-colors"><Link to='/create'>Create an account</Link></button>
              </p>
            </div>

            {/* Privacy Policy */}
            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500 flex items-center justify-center">
                <Shield className="w-3 h-3 mr-1" />
                Protected by reCAPTCHA. 
                <button className="ml-1 text-green-400 hover:text-green-300 underline transition-colors">
                  <Link to='/Privacy-Policy'>Privacy Policy</Link></button>
                {' '}&{' '}
                <button className="ml-1 text-green-400 hover:text-green-300 underline transition-colors">
                  <Link to='/terms'>Terms</Link></button>
              </p>
            </div>
          </div>

          {/* Additional Security Notice */}
          <div className="mt-6 text-center text-xs text-gray-500">
            <p>🔒 Your data is encrypted and secure</p>
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
}