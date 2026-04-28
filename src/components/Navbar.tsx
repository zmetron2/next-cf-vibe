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
    <nav className="navbar">
      <div className="nav-container">
        <Link href="/" className="nav-logo">
          <Logo size={28} />
          <span>엘쯔의 바이브코딩</span>
        </Link>

        <div className="nav-links">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={pathname === link.href ? 'active' : ''}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="nav-actions">
          <button onClick={toggleTheme} className="theme-toggle">
            {mounted && (theme === 'light' ? <Moon size={20} /> : <Sun size={20} />)}
          </button>
          <Link href="/login" className="login-btn">로그인</Link>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          background: var(--background);
          border-bottom: 1px solid var(--border);
          padding: 15px 20px;
          position: sticky;
          top: 0;
          z-index: 1000;
        }
        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: bold;
          font-size: 1.2rem;
        }
        .nav-links {
          display: flex;
          gap: 30px;
        }
        .nav-links a {
          font-size: 0.9rem;
          color: var(--foreground);
          opacity: 0.7;
          transition: opacity 0.2s;
        }
        .nav-links a:hover, .nav-links a.active {
          opacity: 1;
          color: var(--primary);
          font-weight: bold;
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 15px;
        }
        .theme-toggle {
          background: none;
          border: none;
          cursor: pointer;
          color: var(--foreground);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .login-btn {
          background: var(--primary);
          color: white;
          padding: 8px 20px;
          border-radius: 10px;
          font-weight: bold;
          font-size: 0.9rem;
        }
      `}</style>
    </nav>
  );
}
