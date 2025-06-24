import { useState, useEffect, useTransition } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Moon, Sun, Menu, X } from 'lucide-react';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const [isDark, setIsDark] = useState(() => {
    const theme = localStorage.getItem('theme');
    if (theme) return theme === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    document.body.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.dir();
  }, [i18n.language, i18n]);

  const toggleDarkMode = () => setIsDark(!isDark);

  const changeLanguage = (lng: string) => {
    startTransition(() => {
      i18n.changeLanguage(lng);
    });
  };

  const navItems = [
    { label: 'nav.home', path: '/' },
    { label: 'nav.projects', path: '/projects' },
    { label: 'nav.about', path: '/about' },
    { label: 'nav.contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold font-poppins text-primary-600 dark:text-primary-400">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span>MarketPro</span>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive
                    ? 'text-primary-600 dark:text-primary-400 font-semibold'
                    : 'text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                  }`
                }
              >
                {t(item.label)}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="relative inline-flex p-1 rounded-full bg-gray-200 dark:bg-gray-800 border border-transparent">
              <button
                onClick={() => changeLanguage('en')}
                className={`px-3 py-1 text-sm font-semibold rounded-full transition-colors ${i18n.language === 'en' ? 'bg-primary-600 text-white' : 'text-gray-600 dark:text-gray-300'}`}
                disabled={isPending}
              >
                EN
              </button>
              <button
                onClick={() => changeLanguage('ar')}
                className={`px-3 py-1 text-sm font-semibold rounded-full transition-colors ${i18n.language === 'ar' ? 'bg-primary-600 text-white' : 'text-gray-600 dark:text-gray-300'}`}
                disabled={isPending}
              >
                AR
              </button>
            </div>

            <button onClick={toggleDarkMode} className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive
                    ? 'bg-primary-50 text-primary-700 dark:bg-gray-800 dark:text-primary-400'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary-600 dark:hover:text-primary-400'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {t(item.label)}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar; 