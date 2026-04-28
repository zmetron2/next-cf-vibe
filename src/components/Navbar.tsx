'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Sun, Moon, User, X } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoggedIn] = useState(false); // Placeholder for auth state

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
      const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
      if (savedTheme) {
        setTheme(savedTheme);
        document.documentElement.classList.toggle('dark', savedTheme === 'dark');
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
        document.documentElement.classList.add('dark');
      }
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const navLinks = [
    { href: '/curriculum', label: '커리큘럼' },
    { href: '/practice', label: '기능실습' },
    { href: '/resources', label: '자료실' },
    { href: '/guide', label: '기본가이드' },
    { href: '/contact', label: '문의하기' },
  ];

  return (
    <nav className="bg-white dark:bg-[#0f172a] text-slate-900 dark:text-white px-6 py-3 flex items-center border-b border-slate-200 dark:border-white/10 sticky top-0 z-50 transition-colors">
      {/* Logo Area */}
      <div className="flex items-center mr-8">
        <Link href="/" className="flex items-center gap-3 font-bold text-xl tracking-tight shrink-0 text-slate-900 dark:text-white" id="nav-logo">
          <Logo size={32} />
          <span className="hidden lg:inline">엘쯔의 바이브코딩</span>
        </Link>
      </div>

      {/* Main Menu - Centered in menu area */}
      <div className="hidden md:flex flex-1 justify-center items-center gap-8 text-sm font-medium text-slate-500 dark:text-slate-300">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link 
              key={link.href} 
              href={link.href} 
              className={`transition-colors hover:text-indigo-600 dark:hover:text-white relative py-1 ${
                isActive ? 'text-indigo-600 dark:text-white font-bold' : ''
              }`}
            >
              {link.label}
              {isActive && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 rounded-full" />
              )}
            </Link>
          );
        })}
      </div>

      {/* Right Area */}
      <div className="flex items-center justify-end gap-3 ml-8">
        {/* Search Desktop */}
        <div className="relative hidden xl:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="검색..." 
            className="bg-slate-100 dark:bg-white/10 border border-slate-200 dark:border-white/10 rounded-full py-1.5 pl-10 pr-4 text-sm w-40 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-slate-900 dark:text-white"
            id="search-desktop"
          />
        </div>

        {/* Search Mobile/Tablet Toggle */}
        <button 
          onClick={() => setIsSearchOpen(!isSearchOpen)}
          className="xl:hidden p-2 hover:bg-slate-100 dark:hover:bg-white/10 rounded-full transition-colors text-slate-500 dark:text-slate-300"
          id="search-toggle-mobile"
          aria-label="Toggle search"
        >
          <Search className="w-5 h-5" />
        </button>
        
        {/* Theme Toggle Button */}
        <button 
          onClick={toggleTheme}
          className="p-2 hover:bg-slate-100 dark:hover:bg-white/10 rounded-full transition-colors text-slate-500 dark:text-slate-300 min-w-[40px] min-h-[40px] flex items-center justify-center"
          aria-label="Toggle theme"
          id="theme-toggle"
        >
          {mounted ? (
            theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />
          ) : (
            <div className="w-5 h-5" />
          )}
        </button>

        {isLoggedIn ? (
          <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs font-bold border border-slate-300 dark:border-white/20 text-slate-700 dark:text-white overflow-hidden cursor-pointer hover:border-indigo-500 transition-all" id="user-profile">
            <User className="w-4 h-4" />
          </div>
        ) : (
          <Link 
            href="/login" 
            className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold rounded-xl transition-all shadow-md shadow-indigo-600/20 active:scale-95"
            id="login-button"
          >
            로그인
          </Link>
        )}
      </div>

      {/* Mobile Search Overlay/Popup */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[60] flex items-start justify-center pt-24 px-6 animate-in fade-in duration-200" onClick={() => setIsSearchOpen(false)}>
          <div className="bg-white dark:bg-slate-800 w-full max-w-2xl rounded-2xl p-4 shadow-2xl flex items-center gap-4 animate-in slide-in-from-top-4 duration-300" onClick={(e) => e.stopPropagation()}>
            <Search className="w-5 h-5 text-slate-400" />
            <input 
              autoFocus
              type="text" 
              placeholder="무엇이든 검색해보세요..." 
              className="flex-1 bg-transparent border-none focus:outline-none text-lg text-slate-900 dark:text-white"
              id="search-mobile-input"
            />
            <button onClick={() => setIsSearchOpen(false)} className="p-2 hover:bg-slate-100 dark:hover:bg-white/10 rounded-xl transition-colors">
              <X className="w-5 h-5 text-slate-400" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
