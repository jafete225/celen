import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { Menu, X, Sun, Moon } from 'lucide-react';
import Logo from './Logo';

const ModernHeader: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const linkClass = (path: string) => 
    `relative px-3 py-2 font-medium transition-all duration-300 ${
      location.pathname === path 
        ? 'text-red-600 dark:text-red-400' 
        : 'text-gray-800 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400'
    }`;

  return (
    <header className={`
      fixed w-full top-0 z-50 transition-all duration-500
      ${scrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md py-2' 
        : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm py-4'
      }
    `}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo com efeito hover */}
          <Link 
            to="/" 
            className="flex items-center group"
          >
            <div className="transition-transform duration-300 group-hover:scale-110">
              <Logo />
            </div>
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-2">
            <Link to="/" className={linkClass('/')}>
              <span className="relative z-10">Home</span>
              {location.pathname === '/' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 dark:bg-red-400"></span>
              )}
            </Link>
            <Link to="/about" className={linkClass('/about')}>
              <span className="relative z-10">About</span>
              {location.pathname === '/about' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 dark:bg-red-400"></span>
              )}
            </Link>
            <Link to="/mission" className={linkClass('/mission')}>
              <span className="relative z-10">Mission</span>
              {location.pathname === '/mission' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 dark:bg-red-400"></span>
              )}
            </Link>
            <Link to="/contact" className={linkClass('/contact')}>
              <span className="relative z-10">Contact</span>
              {location.pathname === '/contact' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 dark:bg-red-400"></span>
              )}
            </Link>
          </nav>

          {/* Right Section - Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Theme Toggle com efeito */}
            <button
              onClick={toggleTheme}
              className={`
                p-2 rounded-full transition-all duration-300
                ${isDark 
                  ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }
              `}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            {/* Botão CTA */}
            <Link 
              to="/contact" 
              className={`
                px-6 py-2 rounded-full font-medium transition-all duration-300
                bg-gradient-to-r from-red-600 to-red-800 text-white
                hover:shadow-lg hover:scale-[1.03]
              `}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`
              md:hidden p-2 rounded-lg transition-colors duration-300
              ${isOpen 
                ? 'bg-gray-100 dark:bg-gray-800' 
                : 'hover:bg-gray-100 dark:hover:bg-gray-800'
              }
            `}
            aria-label="Menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-800 dark:text-white" />
            ) : (
              <Menu className="h-6 w-6 text-gray-800 dark:text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-500
            ${isOpen ? 'max-h-screen py-4' : 'max-h-0'}
          `}
        >
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className={linkClass('/')}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={linkClass('/about')}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/mission" 
              className={linkClass('/mission')}
              onClick={() => setIsOpen(false)}
            >
              Mission
            </Link>
            <Link 
              to="/contact" 
              className={linkClass('/contact')}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center justify-between mt-6">
            <button
              onClick={toggleTheme}
              className={`
                p-2 rounded-full transition-all duration-300
                ${isDark 
                  ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }
              `}
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            <Link 
              to="/contact" 
              className={`
                px-6 py-2 rounded-full font-medium transition-all duration-300
                bg-gradient-to-r from-red-600 to-red-800 text-white
                hover:shadow-lg
              `}
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ModernHeader;