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

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  );
}

function HashIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
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
    <footer className="bg-white dark:bg-[#0f172a] text-slate-900 dark:text-white px-6 py-16 mt-auto border-t border-slate-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4 col-span-1 md:col-span-1">
          <div className="flex items-center gap-3 font-bold text-xl tracking-tight text-slate-900 dark:text-white">
            <Logo size={32} />
            <span>엘쯔의 바이브코딩</span>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">함께 배우고 성장하는 바이브 코딩 스터디 공간</p>
          <div className="flex gap-4 pt-2">
            <GithubIcon className="w-5 h-5 text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors" />
            <MoonIcon className="w-5 h-5 text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors" />
            <HashIcon className="w-5 h-5 text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
        
        <FooterNav title="사이트" links={['커리큘럼', '기능실습', '자료실', '기본가이드']} />
        <FooterNav title="문의" links={['문의하기', '피드백', '자료 제안']} isLink />
        <FooterNav title="기타" links={['업데이트 로그', '이용 약관', '개인정보 처리방침']} />
      </div>
      <div className="max-w-7xl mx-auto border-t border-slate-200 dark:border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-slate-500">© 2024 엘쯔의 바이브코딩. All rights reserved.</p>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/20"
          id="scroll-to-top"
        >
          <ChevronDownIcon className="w-6 h-6 rotate-180" />
        </button>
      </div>
    </footer>
  );
}

function FooterNav({ title, links, isLink }: { title: string, links: string[], isLink?: boolean }) {
  return (
    <div className="space-y-4">
      <h4 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-widest">{title}</h4>
      <div className="flex flex-col gap-2">
        {links.map((link) => (
          isLink && link === '문의하기' ? 
          <Link key={link} href="/contact" className="text-xs text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">{link}</Link>
          :
          <a key={link} href="#" className="text-xs text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">{link}</a>
        ))}
      </div>
    </div>
  );
}
