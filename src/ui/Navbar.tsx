import { Link } from 'react-router-dom';
import { useTheme } from './context/ThemeContext'; // Assuming context path
import { Sun, Moon, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Define explicit types for navigation items ---
type NavItemBase = {
  label: string;
};

type InternalNavLink = NavItemBase & {
  path: string;       // path is required
  external?: false;  // external is optional or false
};

type ExternalNavLink = NavItemBase & {
  href: string;       // href is required
  external: true;     // external must be true
};

// This is a Discriminated Union type
type NavItem = InternalNavLink | ExternalNavLink;

// --- Explicitly type the array ---
const navItems: NavItem[] = [
  { path: '/components', label: 'Components' },
  { path: '/docs', label: 'Documentation' },
  { href: 'https://github.com/neelshha', label: 'GitHub', external: true },
];
// ----------------------------------------------------


export function Navbar() {
  const { theme, toggleTheme } = useTheme();

  const iconVariants = {
    hidden: { opacity: 0, rotate: -90, scale: 0.5 },
    visible: { opacity: 1, rotate: 0, scale: 1, transition: { type: 'spring', stiffness: 260, damping: 20 } },
    exit: { opacity: 0, rotate: 90, scale: 0.5, transition: { duration: 0.2 } },
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16
                 bg-white/70 dark:bg-neutral-900/70
                 backdrop-blur-lg
                 border-b border-neutral-200/50 dark:border-neutral-700/50
                 transition-colors duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Sparkles className="h-6 w-6 text-blue-600 dark:text-blue-400 transition-colors duration-300" />
            </motion.div>
            <span className="text-xl font-bold text-neutral-800 dark:text-neutral-200 transition-colors duration-300">
              NilUI
            </span>
          </Link>

          {/* Navigation Links & Theme Toggle */}
          <div className="flex items-center space-x-4 md:space-x-6">
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => {
                // --- Type Guarding with the discriminated union ---
                if (item.external === true) { // TypeScript knows this is ExternalNavLink
                  return (
                    <a
                      key={item.label}
                      href={item.href} // TS knows item.href is a string here
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-md text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-700/60 transition-all duration-200 ease-in-out"
                    >
                      {item.label}
                    </a>
                  );
                } else { // TypeScript knows this is InternalNavLink
                  return (
                    <Link
                      key={item.label}
                      to={item.path} // TS knows item.path is a string here - Error Fixed!
                      className="px-3 py-1.5 rounded-md text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-700/60 transition-all duration-200 ease-in-out"
                    >
                      {item.label}
                    </Link>
                  );
                }
                // ----------------------------------------------------
              })}
            </div>

             {/* Mobile Menu Placeholder */}
             <div className="md:hidden">
               {/* <MobileMenuButton /> */}
             </div>

            {/* Theme Toggle Button */}
            <motion.button
              onClick={toggleTheme}
              className="relative flex items-center justify-center h-9 w-9 rounded-full hover:bg-neutral-200/70 dark:hover:bg-neutral-700/70 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500/60 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-neutral-800"
              aria-label="Toggle theme"
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  variants={iconVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute"
                >
                  {theme === 'light' ? (
                    <Moon className="h-5 w-5 text-neutral-600" />
                  ) : (
                    <Sun className="h-5 w-5 text-neutral-400" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  );
}