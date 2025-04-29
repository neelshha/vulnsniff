import { Link } from 'react-router-dom';
import { useTheme } from './context/ThemeContext';
import { Sun, Moon, Sparkles } from 'lucide-react';

export function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 bg-neutral-200 dark:bg-[#000000] border-b border-neutral-300 dark:border-neutral-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <Sparkles className="h-6 w-6 text-[#000000] dark:text-neutral-200 group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-xl font-bold text-[#000000] dark:text-neutral-200">
              NilUI
            </span>
          </Link>
          <div className="flex items-center space-x-8">
            <div className="hidden md:flex items-center space-x-6">
              <Link 
                to="/components" 
                className="text-sm font-medium text-[#000000]/80 hover:text-[#000000] dark:text-neutral-200/80 dark:hover:text-neutral-200 transition-colors duration-200"
              >
                Components
              </Link>
              <Link 
                to="/docs" 
                className="text-sm font-medium text-[#000000]/80 hover:text-[#000000] dark:text-neutral-200/80 dark:hover:text-neutral-200 transition-colors duration-200"
              >
                Documentation
              </Link>
              <a 
                href="https://github.com/neelshha" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm font-medium text-[#000000]/80 hover:text-[#000000] dark:text-neutral-200/80 dark:hover:text-neutral-200 transition-colors duration-200"
              >
                GitHub
              </a>
            </div>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-[#000000]/5 dark:hover:bg-neutral-200/5 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-neutral-500"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5 text-[#000000] dark:text-neutral-200" />
              ) : (
                <Sun className="h-5 w-5 text-[#000000] dark:text-neutral-200" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}