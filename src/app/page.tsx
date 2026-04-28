import React from 'react';
import { 
  Code2, BookOpen, Layers, 
  Terminal, ArrowRight, Zap, FileText, ChevronRight,
  Flame, Database, Upload, Moon, Lightbulb,
  MessageSquare, Layout
} from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function HomePage() {
  return (
    <div className="home-container">
      <Navbar />

      {/* --- Hero Section --- */}
      <section className="hero">
        <div className="hero-content">
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
              <BookOpen size={20} />
              커리큘럼 시작하기
            </Link>
            <Link href="/practice" className="btn-secondary">
              <Terminal size={20} />
              기능 실습 보러가기
            </Link>
          </div>
        </div>
      </section>

      {/* --- Main Content --- */}
      <main className="main-content">
        <div className="feature-grid">
          <div className="card">
            <Zap className="card-icon" />
            <h3>3회차: 상태관리 이해</h3>
            <p>진행 중인 스터디 내용을 확인하세요.</p>
            <Link href="/curriculum" className="card-link">이어보기</Link>
          </div>
          <div className="card">
            <BookOpen className="card-icon" />
            <h3>입문부터 시작하기</h3>
            <p>1회차부터 차근차근 학습해보세요.</p>
            <Link href="/curriculum" className="card-link">바로가기</Link>
          </div>
          <div className="card">
            <Flame className="card-icon" />
            <h3>로그인 기능 만들기</h3>
            <p>인기 실습 프로젝트를 체험해보세요.</p>
            <Link href="/practice" className="card-link">실습보기</Link>
          </div>
        </div>
      </main>

      <Footer />

      <style jsx>{`
        .home-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        .hero {
          padding: 80px 20px;
          text-align: center;
          background: var(--card);
        }
        .hero-content h1 {
          font-size: 3rem;
          font-weight: 900;
          margin-bottom: 20px;
        }
        .accent {
          color: var(--primary);
        }
        .hero-description {
          font-size: 1.2rem;
          color: var(--foreground);
          opacity: 0.8;
          max-width: 600px;
          margin: 0 auto 40px;
        }
        .hero-buttons {
          display: flex;
          gap: 15px;
          justify-content: center;
        }
        .btn-primary {
          background: var(--primary);
          color: white;
          padding: 15px 30px;
          border-radius: 12px;
          font-weight: bold;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .btn-secondary {
          background: var(--background);
          border: 1px solid var(--border);
          padding: 15px 30px;
          border-radius: 12px;
          font-weight: bold;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .main-content {
          max-width: 1200px;
          margin: -40px auto 80px;
          padding: 0 20px;
          width: 100%;
        }
        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }
        .card {
          background: var(--card);
          padding: 30px;
          border-radius: 20px;
          border: 1px solid var(--border);
          box-shadow: 0 4px 6px rgba(0,0,0,0.05);
        }
        .card-icon {
          color: var(--primary);
          margin-bottom: 20px;
          width: 32px;
          height: 32px;
        }
        .card h3 {
          margin-bottom: 10px;
        }
        .card p {
          font-size: 0.9rem;
          opacity: 0.7;
          margin-bottom: 20px;
        }
        .card-link {
          color: var(--primary);
          font-weight: bold;
          font-size: 0.9rem;
        }
      `}</style>
    </div>
  );
}
