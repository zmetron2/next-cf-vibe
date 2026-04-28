'use client';

import React from 'react';
import Link from 'next/link';
import Logo from './Logo';

// Custom Icons to avoid lucide-react import issues
function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            <Logo size={24} />
            <span>엘쯔의 바이브코딩</span>
          </Link>
          <p>함께 배우고 성장하는 바이브 코딩 스터디 공간</p>
          <div className="social-links">
            <GithubIcon className="icon" />
          </div>
        </div>
        
        <div className="footer-nav">
          <div className="nav-col">
            <h4>사이트</h4>
            <Link href="/curriculum">커리큘럼</Link>
            <Link href="/practice">기능실습</Link>
          </div>
          <div className="nav-col">
            <h4>문의</h4>
            <Link href="/contact">문의하기</Link>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2024 엘쯔의 바이브코딩. All rights reserved.</p>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="scroll-top">
          <ChevronDownIcon className="icon rotate" />
        </button>
      </div>

      <style jsx>{`
        .footer {
          background: var(--card);
          border-top: 1px solid var(--border);
          padding: 60px 20px;
          margin-top: auto;
        }
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 40px;
        }
        .footer-brand h1 {
          font-size: 1.2rem;
          margin-bottom: 15px;
        }
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: bold;
          margin-bottom: 15px;
        }
        .footer-brand p {
          font-size: 0.9rem;
          opacity: 0.6;
          margin-bottom: 20px;
        }
        .social-links {
          display: flex;
          gap: 15px;
        }
        .icon {
          width: 20px;
          height: 20px;
          opacity: 0.5;
        }
        .footer-nav {
          display: flex;
          gap: 60px;
        }
        .nav-col h4 {
          font-size: 0.8rem;
          text-transform: uppercase;
          margin-bottom: 15px;
          opacity: 0.8;
        }
        .nav-col {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .nav-col a {
          font-size: 0.85rem;
          opacity: 0.6;
        }
        .footer-bottom {
          max-width: 1200px;
          margin: 40px auto 0;
          padding-top: 20px;
          border-top: 1px solid var(--border);
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.8rem;
          opacity: 0.5;
        }
        .scroll-top {
          background: var(--primary);
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .rotate {
          transform: rotate(180deg);
          opacity: 1;
        }
      `}</style>
    </footer>
  );
}
