'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sun, Moon } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
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
    <nav className="navbar border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="nav-container max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="nav-logo flex items-center gap-2 group">
          <Logo size={28} />
          <span className="font-black text-lg tracking-tight group-hover:text-primary transition-colors">바이브코딩</span>
        </Link>

        <div className="nav-links hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-bold transition-all hover:text-primary ${
                pathname === link.href ? 'text-primary' : 'text-foreground/60'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="nav-actions flex items-center gap-4">
          <button 
            onClick={toggleTheme} 
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 text-foreground hover:scale-110 transition-all border border-border shadow-sm"
            aria-label="테마 변경"
          >
            {mounted && (
              theme === 'light' ? <Moon size={18} className="text-slate-700" /> : <Sun size={18} className="text-yellow-400" />
            )}
          </button>
          <Link 
            href="/login" 
            className="hidden sm:block bg-primary text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:opacity-90 transition-all shadow-md shadow-primary/20"
            id="login-button"
          >
            로그인
          </Link>
        </div>
      </div>
    </nav>
  );
}
