import React, { useState } from 'react';
import { Eye, EyeOff, Lock, Mail, User, UserCheck, BriefcaseBusiness, Shield } from 'lucide-react';

const Register = () => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('Freelancer');
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
      console.log('Register attempt:', { name, role, email, password });
    }, 1500);
  };

  const getRoleIcon = (selectedRole) => {
    switch (selectedRole) {
      case 'Freelancer':
        return <BriefcaseBusiness className="w-5 h-5 text-white" />;
      case 'Client':
        return <UserCheck className="w-5 h-5 text-white" />;
      case 'Admin':
        return <Shield className="w-5 h-5 text-white" />;
      default:
        return <User className="w-5 h-5 text-white" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center p-3 sm:p-4 md:p-6 relative overflow-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-400 rounded-full opacity-20 animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg relative z-10">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-2xl rounded-2xl border border-gray-700 shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 to-yellow-500 px-4 sm:px-6 py-4 sm:py-6 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600/80 to-yellow-600/80"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-2 bg-black/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Lock className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Client Vault</h1>
              <p className="text-orange-100 text-xs sm:text-sm mt-1 font-medium">
                Secure Document Sharing Solution
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="p-4 sm:p-6 md:p-8">
            <div className="text-center mb-4 sm:mb-6">
              <h2 className="text-base sm:text-lg md:text-xl font-bold text-white">Create Account</h2>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">Join our secure platform today</p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {/* Name */}
              <div className="relative">
                <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-gray-300 mb-1 sm:mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 ${focusedField === 'name' ? 'text-orange-400' : 'text-gray-500'}`} />
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField('')}
                    required
                    className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2 sm:py-3 bg-gray-900 border border-gray-700 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 text-sm sm:text-base text-white placeholder-gray-500 hover:bg-gray-800"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              {/* Role */}
              <div className="relative">
                <label htmlFor="role" className="block text-xs sm:text-sm font-semibold text-gray-300 mb-1 sm:mb-2">
                  Role
                </label>
                <div className="relative">
                  <UserCheck className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 ${focusedField === 'role' ? 'text-orange-400' : 'text-gray-500'}`} />
                  <select
                    id="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    onFocus={() => setFocusedField('role')}
                    onBlur={() => setFocusedField('')}
                    className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2 sm:py-3 bg-gray-900 border border-gray-700 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 text-sm sm:text-base text-white hover:bg-gray-800 appearance-none cursor-pointer"
                  >
                    <option value="Freelancer">Freelancer</option>
                    <option value="Client">Client</option>
                    <option value="Admin">Admin</option>
                  </select>
                  <div className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2">
                    {getRoleIcon(role)}
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="relative">
                <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-gray-300 mb-1 sm:mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 ${focusedField === 'email' ? 'text-orange-400' : 'text-gray-500'}`} />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField('')}
                    required
                    className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2 sm:py-3 bg-gray-900 border border-gray-700 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 text-sm sm:text-base text-white placeholder-gray-500 hover:bg-gray-800"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="relative">
                <label htmlFor="password" className="block text-xs sm:text-sm font-semibold text-gray-300 mb-1 sm:mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 ${focusedField === 'password' ? 'text-orange-400' : 'text-gray-500'}`} />
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => setFocusedField('password')}
                    onBlur={() => setFocusedField('')}
                    required
                    className="w-full pl-10 sm:pl-12 pr-10 sm:pr-12 py-2 sm:py-3 bg-gray-900 border border-gray-700 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 text-sm sm:text-base text-white placeholder-gray-500 hover:bg-gray-800"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-orange-400"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" /> : <Eye className="w-4 h-4 sm:w-5 sm:h-5" />}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-2 sm:pt-3">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-orange-600 to-yellow-500 hover:from-orange-700 hover:to-yellow-600 disabled:from-orange-400 disabled:to-yellow-400 text-white font-semibold py-2 sm:py-3 rounded-lg sm:rounded-xl transition-all duration-300 focus:ring-2 focus:ring-orange-300 shadow-md hover:shadow-lg"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Creating Account...</span>
                    </div>
                  ) : (
                    'Create Account'
                  )}
                </button>
              </div>
            </div>

            {/* Sign In Link */}
            <div className="mt-4 sm:mt-6 text-center">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-xs sm:text-sm">
                  <span className="px-2 text-gray-400 font-medium">Already have an account?</span>
                </div>
              </div>
              <div className="mt-2 sm:mt-3">
                <a
                  href="/login"
                  className="inline-flex items-center justify-center px-3 sm:px-4 py-2 border border-gray-600 text-white text-xs sm:text-sm font-medium rounded-lg sm:rounded-xl hover:bg-gray-800 transition-all duration-300 hover:border-orange-400"
                >
                  Sign In Here
                </a>
              </div>
            </div>
          </div>

          {/* Security Badge */}
          <div className="px-3 sm:px-4 pb-3 sm:pb-4">
            <div className="bg-gray-900 border border-gray-700 rounded-lg sm:rounded-xl p-2 sm:p-3 text-center">
              <div className="flex items-center justify-center space-x-2 text-gray-400 text-xs sm:text-sm">
                <Lock className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="font-medium">256-bit SSL Encrypted</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
