import React, { useState } from 'react';
import { Eye, EyeOff, Lock, Mail, User, UserCheck, BriefcaseBusiness, Shield } from 'lucide-react';


const RegisterComponent = () => {
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

    // Add your register logic here
    setTimeout(() => {
      setIsLoading(false);
      console.log('Register attempt:', { name, role, email, password });
    }, 1500);
  };

 const getRoleIcon = (selectedRole) => {
  switch (selectedRole) {
    case 'Freelancer': 
      return <BriefcaseBusiness className="w-6 h-6 text-white" />;
    case 'Client': 
      return <UserCheck className="w-6 h-6 text-white" />;
    case 'Admin': 
      return <Shield className="w-6 h-6 text-white" />;
    default: 
      return <User className="w-6 h-6 text-white" />;
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-60 h-60 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
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
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-blue-600/80"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-white">Client Vault</h1>
              <p className="text-purple-100 text-sm mt-2 font-medium">
                Secure Document Sharing Solution
              </p>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
          </div>

          {/* Form */}
          <div className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white">Create Account</h2>
              <p className="text-purple-200 text-sm mt-2">Join our secure platform today</p>
            </div>

            <div className="space-y-6">
              {/* Name */}
              <div className="relative">
                <label htmlFor="name" className="block text-sm font-semibold text-purple-200 mb-3">
                  Full Name
                </label>
                <div className="relative">
                  <User className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'name' ? 'text-purple-400' : 'text-gray-400'}`} />
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField('')}
                    required
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-all text-white placeholder-purple-200/60 hover:bg-white/20"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              {/* Role */}
              <div className="relative">
                <label htmlFor="role" className="block text-sm font-semibold text-purple-200 mb-3">
                  Role
                </label>
                <div className="relative">
                  <UserCheck className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'role' ? 'text-purple-400' : 'text-gray-400'}`} />
                  <select
                    id="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    onFocus={() => setFocusedField('role')}
                    onBlur={() => setFocusedField('')}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-all text-white hover:bg-white/20 appearance-none cursor-pointer"
                  >
                    <option value="Freelancer" className="text-gray-900">Freelancer</option>
                    <option value="Client" className="text-gray-900">Client</option>
                    <option value="Admin" className="text-gray-900">Admin</option>
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-2xl">
                    {getRoleIcon(role)}
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="relative">
                <label htmlFor="email" className="block text-sm font-semibold text-purple-200 mb-3">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'email' ? 'text-purple-400' : 'text-gray-400'}`} />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField('')}
                    required
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-all text-white placeholder-purple-200/60 hover:bg-white/20"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="relative">
                <label htmlFor="password" className="block text-sm font-semibold text-purple-200 mb-3">
                  Password
                </label>
                <div className="relative">
                  <Lock className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'password' ? 'text-purple-400' : 'text-gray-400'}`} />
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => setFocusedField('password')}
                    onBlur={() => setFocusedField('')}
                    required
                    className="w-full pl-12 pr-12 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-all text-white placeholder-purple-200/60 hover:bg-white/20"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-purple-400 transition-colors"
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
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-purple-400 disabled:to-blue-400 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-purple-300 focus:ring-offset-2 focus:ring-offset-transparent shadow-lg hover:shadow-xl relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="relative z-10">
                    {isLoading ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Creating Account...</span>
                      </div>
                    ) : (
                      'Create Account'
                    )}
                  </span>
                </button>
              </div>
            </div>

            {/* Sign In Link */}
            <div className="mt-8 text-center">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/20"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-transparent px-4 text-purple-200 font-medium">Already have an account?</span>
                </div>
              </div>
              <div className="mt-4">
                <a 
                  href="/login" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white font-medium rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-purple-400"
                >
                  Sign In Here
                </a>
              </div>
            </div>
          </div>

          {/* Security Badge */}
          <div className="px-8 pb-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center">
              <div className="flex items-center justify-center space-x-2 text-purple-200">
                <Lock className="w-4 h-4" />
                <span className="text-sm font-medium">256-bit SSL Encrypted</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-6 -left-6 w-12 h-12 bg-purple-500/30 rounded-full blur-xl"></div>
        <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-blue-500/30 rounded-full blur-xl"></div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        input::placeholder, select option {
          font-weight: 500;
        }
        
        select option {
          background-color: #1e293b;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default RegisterComponent;