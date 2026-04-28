'use client';

import React from 'react';
import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            <Logo size={22} />
            <span>엘쯔의 바이브코딩</span>
          </Link>
          <p>함께 배우고 성장하는 바이브 코딩 스터디 공간</p>
        </div>

        <div className="footer-nav">
          <div className="nav-col">
            <h4>사이트</h4>
            <Link href="/curriculum">커리큘럼</Link>
            <Link href="/practice">기능실습</Link>
            <Link href="/resources">자료실</Link>
            <Link href="/guide">기본가이드</Link>
          </div>
          <div className="nav-col">
            <h4>문의</h4>
            <Link href="/contact">문의하기</Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 엘쯔의 바이브코딩. All rights reserved.</p>
        <button
          className="scroll-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="맨 위로"
          id="scroll-to-top"
        >
          ▲
        </button>
      </div>
    </footer>
  );
}
