import React, { useState } from 'react';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      console.log('Login attempt:', { email, password });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-60 h-60 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="bg-gray-900 backdrop-blur-2xl rounded-3xl border border-gray-700 shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-600 to-orange-500 px-8 py-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600/80 to-orange-500/80"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-white">Client Vault</h1>
              <p className="text-orange-100 text-sm mt-2 font-medium">
                Secure Document Sharing Solution
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white">Login</h2>
              <p className="text-gray-400 text-sm mt-2">Join our secure platform today</p>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div className="relative">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-3">
                  Email Address
                </label>
                <div className="relative">
                  <Mail
                    className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors ${
                      focusedField === 'email' ? 'text-orange-400' : 'text-gray-500'
                    }`}
                  />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField('')}
                    required
                    className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-700 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all text-white placeholder-gray-400 hover:bg-gray-700"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="relative">
                <label htmlFor="password" className="block text-sm font-semibold text-gray-300 mb-3">
                  Password
                </label>
                <div className="relative">
                  <Lock
                    className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors ${
                      focusedField === 'password' ? 'text-orange-400' : 'text-gray-500'
                    }`}
                  />
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => setFocusedField('password')}
                    onBlur={() => setFocusedField('')}
                    required
                    className="w-full pl-12 pr-12 py-4 bg-gray-800 border border-gray-700 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all text-white placeholder-gray-400 hover:bg-gray-700"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-orange-400 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 disabled:from-orange-400 disabled:to-orange-400 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-transparent shadow-lg hover:shadow-xl relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="relative z-10">
                    {isLoading ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Signing In...</span>
                      </div>
                    ) : (
                      'Login'
                    )}
                  </span>
                </button>
              </div>
            </div>

            {/* Sign In Link */}
            <div className="mt-8 text-center">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-transparent px-4 text-gray-400 font-medium">Don't have an account?</span>
                </div>
              </div>
              <div className="mt-4">
                <a
                  href="/login"
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-600 text-white font-medium rounded-xl hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:border-orange-400"
                >
                  Register Here
                </a>
              </div>
            </div>
          </div>

          {/* Security Badge */}
          <div className="px-8 pb-6">
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 text-center">
              <div className="flex items-center justify-center space-x-2 text-gray-400">
                <Lock className="w-4 h-4" />
                <span className="text-sm font-medium">256-bit SSL Encrypted</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-6 -left-6 w-12 h-12 bg-orange-500/30 rounded-full blur-xl"></div>
        <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gray-600/30 rounded-full blur-xl"></div>
      </div>
    </div>
  );
};

export default Login;
