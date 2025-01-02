import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  Home,
  BookOpen,
  Trophy,
  Briefcase,
  User,
  MessageSquare,
  Menu,
  X,
  Brain,
  BarChart2,
  Moon,
  Sun,
} from 'lucide-react';
import LanguageSelector from './LanguageSelector';

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true'
  );

  // Apply dark mode class to <html> element
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  const navItems = [
    { icon: Home, label: t('navigation.dashboard'), path: '/' },
    { icon: BookOpen, label: t('navigation.learningPaths'), path: '/learning-paths' },
    { icon: Trophy, label: t('navigation.achievements'), path: '/achievements' },
    { icon: Briefcase, label: t('navigation.opportunities'), path: '/opportunities' },
    { icon: User, label: t('navigation.profile'), path: '/profile' },

    { icon: Brain, label: t('navigation.quiz'), path: '/quiz' },
    { icon: BarChart2, label: t('navigation.careerInsights'), path: '/career-insights' },
  ];

  return (
    <nav
      className={`fixed ${
        isCollapsed ? 'md:w-20' : 'md:w-64'
      } bottom-0 left-0 w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 md:h-screen md:border-r transition-all`}
    >
      {/* Sidebar Toggle Button */}
      <div className="absolute top-4 right-4 md:hidden">
        <button
          onClick={() => setIsCollapsed((prev) => !prev)}
          className="p-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition"
        >
          {isCollapsed ? <Menu className="w-6 h-6" /> : <X className="w-6 h-6" />}
        </button>
      </div>

      <div className="flex flex-row md:flex-col items-center justify-between md:justify-start p-4 h-full">
        {/* Logo Section */}
        <div className="hidden md:block mb-8">
          <h1
            className={`text-2xl font-bold text-indigo-600 dark:text-indigo-400 transition-opacity ${
              isCollapsed ? 'opacity-0' : 'opacity-100'
            }`}
          >
            SkillWeave
          </h1>
        </div>

        {/* Navigation Items */}
        <div className="flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-4">
          {navItems.map(({ icon: Icon, label, path }) => (
            <Link
              to={path}
              key={label}
              className="flex items-center space-x-2 p-2 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-800 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-200 transition-colors"
            >
              <Icon className="w-6 h-6" />
              {!isCollapsed && <span className="hidden md:block">{label}</span>}
            </Link>
          ))}
        </div>

        {/* Language Selector */}
        <div className="mt-auto">
          <LanguageSelector />
        </div>

        {/* Dark Mode Toggle */}
        <div className="mt-4">
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="flex items-center space-x-2 p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            {!isCollapsed && <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
