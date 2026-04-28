'use client';

import React from 'react';
import { BookOpen, Terminal, ArrowRight, Zap, Flame } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function HomePage() {
  return (
    <div className="home-container">
      <Navbar />

      <section className="hero">
        <h1>
          바이브 코딩 커리큘럼<br />
          <span className="accent">직접 만들며 배우는 실전 학습</span>
        </h1>
        <p className="hero-description">
          스터디 기록과 실습 프로젝트, 유용한 자료를 한 곳에서.<br />
          함께 성장하는 바이브 코딩 스터디 공간입니다.
        </p>
        <div className="hero-buttons">
          <Link href="/curriculum" className="btn-primary">
            <BookOpen size={18} />
            커리큘럼 시작하기
            <ArrowRight size={16} />
          </Link>
          <Link href="/practice" className="btn-secondary">
            <Terminal size={18} />
            기능 실습 보러가기
          </Link>
        </div>
      </section>

      <main className="main-content">
        <div className="feature-grid">
          <div className="card">
            <Zap className="card-icon" />
            <h3>3회차: 상태관리 이해</h3>
            <p>현재 진행 중인 스터디 내용을 확인하세요.</p>
            <Link href="/curriculum" className="card-link">이어보기 →</Link>
          </div>
          <div className="card">
            <BookOpen className="card-icon" />
            <h3>입문부터 시작하기</h3>
            <p>1회차부터 차근차근 학습해보세요.</p>
            <Link href="/curriculum" className="card-link">바로가기 →</Link>
          </div>
          <div className="card">
            <Flame className="card-icon" />
            <h3>로그인 기능 만들기</h3>
            <p>가장 인기 있는 실습 프로젝트입니다.</p>
            <Link href="/practice" className="card-link">실습 보기 →</Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
