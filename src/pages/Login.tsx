
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChefHat, User, Lock } from 'lucide-react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Authentication logic would go here
    console.log('Login attempted with:', email);
  };

  return (
    <div className="min-h-screen bg-beige-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-10">
        <div className="bg-white rounded-2xl shadow-md p-8 md:p-12 max-w-md w-full">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center p-3 bg-orange-100 rounded-full mb-4">
              <ChefHat className="h-8 w-8 text-orange-500" />
            </div>
            <h1 className="text-2xl md:text-3xl font-display font-bold text-brown-600">Welcome Back</h1>
            <p className="text-brown-400 mt-2">Sign in to your HomePlate account</p>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-brown-400" />
                </div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="pl-10"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-brown-400" />
                </div>
                <Input
                  type="password"
                  placeholder="Password"
                  className="pl-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-orange-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-brown-500">
                    Remember me
                  </label>
                </div>
                
                <div className="text-sm">
                  <Link to="/forgot-password" className="text-orange-500 hover:text-orange-600">
                    Forgot your password?
                  </Link>
                </div>
              </div>
              
              <Button type="submit" className="btn-primary w-full">
                Sign In
              </Button>
            </div>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-brown-500">
              Don't have an account?{' '}
              <Link to="/apply-now" className="text-orange-500 hover:text-orange-600 font-medium">
                Sign up now
              </Link>
            </p>
          </div>
          
          <div className="mt-8 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-brown-400">Or continue with</span>
            </div>
          </div>
          
          <div className="mt-6 grid grid-cols-2 gap-3">
            <button
              type="button"
              className="bg-white border border-gray-300 rounded-lg px-4 py-2 flex items-center justify-center text-sm font-medium text-brown-600 hover:bg-beige-50"
            >
              <span>Google</span>
            </button>
            <button
              type="button"
              className="bg-white border border-gray-300 rounded-lg px-4 py-2 flex items-center justify-center text-sm font-medium text-brown-600 hover:bg-beige-50"
            >
              <span>Facebook</span>
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
