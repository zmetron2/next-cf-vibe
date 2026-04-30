'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sun, Moon, Search, Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const initializeTheme = () => {
      const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
      if (savedTheme) {
        setTheme(savedTheme);
        document.documentElement.classList.toggle('dark', savedTheme === 'dark');
      }
      setMounted(true);
    };
    initializeTheme();
  }, []);

  // ESC key for Search Modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsSearchOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const navLinks = [
    { href: '/curriculum', label: '커리큘럼' },
    { href: '/curriculum/practice', label: '기능실습' },
    { href: '/resources', label: '자료실' },
    { href: '/guide', label: '기본가이드' },
    { href: '/contact', label: '문의하기' },
  ];

  return (
    <>
      <nav className="navbar border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="nav-container max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* Logo Section */}
          <Link href="/" className="nav-logo flex items-center gap-2 group shrink-0">
            <Logo size={28} />
            <span className="font-bold text-lg tracking-tight group-hover:text-primary transition-colors hidden min-[801px]:block">
              엘쯔의 바이브코딩
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="nav-links hidden min-[701px]:flex items-center gap-8 h-full">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative flex items-center h-full text-sm font-bold transition-all hover:text-primary ${
                    isActive ? 'text-primary' : 'text-foreground/60'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full animate-in fade-in slide-in-from-bottom-1 duration-300" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Actions */}
          <div className="nav-actions flex items-center gap-2 sm:gap-4">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-300/60 dark:text-slate-600/60 hover:text-primary dark:hover:text-primary transition-all"
              aria-label="검색"
            >
              <Search size={20} />
            </button>

            <button 
              onClick={toggleTheme} 
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-foreground hover:scale-110 transition-all border border-border shadow-sm"
              aria-label="테마 변경"
            >
              {mounted && (
                theme === 'light' ? <Moon size={18} className="text-slate-700" /> : <Sun size={18} className="text-yellow-400" />
              )}
            </button>

            <Link 
              href="/login" 
              className="hidden sm:block bg-primary text-white px-5 py-2.5 rounded-lg font-bold text-sm hover:opacity-90 transition-all shadow-md shadow-primary/20"
            >
              로그인
            </Link>

            {/* Mobile Hamburger */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-lg text-foreground min-[701px]:hidden"
              aria-label="메뉴"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {isMobileMenuOpen && (
          <div className="min-[701px]:hidden bg-background border-b border-border absolute w-full top-16 left-0 z-[60] p-6 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top duration-200">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg text-center font-bold p-4 rounded-lg transition-all ${
                  pathname === link.href ? 'bg-primary/10 text-primary' : 'text-foreground/60'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Search Modal Pop-up */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4 md:pt-40">
          <div 
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setIsSearchOpen(false)}
          ></div>
          <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-border p-6 md:p-10 animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-black text-slate-800 dark:text-white">통합 검색</h2>
              <button 
                onClick={() => setIsSearchOpen(false)}
                className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
              >
                <X size={24} className="text-slate-400" />
              </button>
            </div>
            
            <div className="relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-primary" size={24} />
              <input 
                autoFocus
                type="text" 
                placeholder="궁금한 내용을 검색해 보세요..." 
                className="w-full bg-slate-50 dark:bg-slate-800/50 border-2 border-slate-100 dark:border-slate-800 rounded-xl py-5 pl-16 pr-6 text-lg focus:outline-none focus:border-primary transition-all dark:text-white"
              />
            </div>

            <div className="mt-8">
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">추천 검색어</p>
              <div className="flex flex-wrap gap-2">
                {['커리큘럼', '기능 실습', '다크모드', '로그인 구현', 'React 가이드'].map((tag) => (
                  <button 
                    key={tag}
                    className="px-4 py-2 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 rounded-lg text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-primary transition-all"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
