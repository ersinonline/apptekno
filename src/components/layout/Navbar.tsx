import React from 'react';
import { Menu, X, LogIn } from 'lucide-react';
import { APP_URL } from '../../utils/constants';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white md:hidden"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            <h1 className="ml-2 text-2xl font-bold text-white">
              TeknoKapsül
            </h1>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href={APP_URL}
              className="flex items-center px-4 py-2 rounded-lg bg-white text-primary hover:bg-gray-100 transition-colors duration-200"
            >
              <LogIn className="w-5 h-5 mr-2" />
              <span className="font-medium">Üye Girişi</span>
            </a>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-primary">
            <a
              href={APP_URL}
              className="flex items-center w-full px-3 py-2 rounded-md bg-white text-primary hover:bg-gray-100"
            >
              <LogIn className="w-5 h-5 mr-2" />
              Üye Girişi
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}