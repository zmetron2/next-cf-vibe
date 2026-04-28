import React from 'react';
import Link from 'next/link';
import { BookOpen, Terminal, ArrowRight, Zap, Flame, Layout, Rocket } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 dark:bg-slate-900/50 py-20 lg:py-32 border-b border-border">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden opacity-30">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6 border border-primary/20">
            <Rocket size={14} />
            <span>2024 New Curriculum Open</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-black tracking-tight mb-8 leading-[1.1]">
            바이브 코딩 커리큘럼<br />
            <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-500">
              직접 만들며 배우는 실전 학습
            </span>
          </h1>
          
          <p className="text-lg lg:text-xl opacity-70 max-w-2xl mx-auto mb-12 leading-relaxed">
            단순한 이론 공부를 넘어 실무에 바로 쓰이는 퍼블리싱과 프런트엔드 지식을 공유합니다. 
            함께 성장하는 바이브 코딩 스터디 공간입니다.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/curriculum" className="group flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg hover:opacity-90 transition-all shadow-lg shadow-primary/25 hover:-translate-y-0.5">
              <BookOpen size={20} />
              커리큘럼 시작하기
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/practice" className="flex items-center gap-2 bg-white dark:bg-slate-800 border border-border px-8 py-4 rounded-2xl font-bold text-lg hover:border-primary transition-all hover:-translate-y-0.5">
              <Terminal size={20} className="text-primary" />
              기능 실습 보러가기
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <main className="max-w-7xl mx-auto px-6 py-20 w-full flex-1">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-border hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/5">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">3회차: 상태관리 이해</h3>
            <p className="text-sm opacity-60 mb-6 leading-relaxed">
              React의 핵심인 상태 관리와 Props Drilling을 해결하는 다양한 방법을 실습과 함께 알아봅니다.
            </p>
            <Link href="/curriculum" className="inline-flex items-center gap-1 text-primary font-bold text-sm hover:underline">
              이어보기 <ArrowRight size={14} />
            </Link>
          </div>

          <div className="group p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-border hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/5">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 mb-6 group-hover:scale-110 transition-transform">
              <Layout size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">입문부터 시작하기</h3>
            <p className="text-sm opacity-60 mb-6 leading-relaxed">
              HTML/CSS 기초부터 시맨틱 마크업, 반응형 웹 디자인의 핵심을 차근차근 학습해보세요.
            </p>
            <Link href="/curriculum" className="inline-flex items-center gap-1 text-primary font-bold text-sm hover:underline">
              바로가기 <ArrowRight size={14} />
            </Link>
          </div>

          <div className="group p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-border hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/5">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform">
              <Flame size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">로그인 기능 만들기</h3>
            <p className="text-sm opacity-60 mb-6 leading-relaxed">
              가장 인기 있는 실습 프로젝트! 사용자 인증과 데이터베이스 연동의 전 과정을 경험합니다.
            </p>
            <Link href="/practice" className="inline-flex items-center gap-1 text-primary font-bold text-sm hover:underline">
              실습 보기 <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
