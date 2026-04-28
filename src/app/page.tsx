import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#ffffff',
      color: '#111827',
      fontFamily: 'sans-serif',
      padding: '0',
      margin: '0'
    }}>
      {/* Hero Section */}
      <section style={{
        padding: '80px 24px',
        backgroundColor: '#f9fafb',
        textAlign: 'center',
        borderBottom: '1px solid #e2e8f0'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '20px' }}>
          바이브 코딩 커리큘럼<br />
          <span style={{ color: '#6366f1' }}>직접 만들며 배우는 실전 학습</span>
        </h1>
        <p style={{ fontSize: '1.1rem', opacity: '0.7', maxWidth: '600px', margin: '0 auto 36px' }}>
          스터디 기록과 실습 프로젝트, 유용한 자료를 한 곳에서.
          함께 성장하는 바이브 코딩 스터디 공간입니다.
        </p>
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center' }}>
          <Link href="/curriculum" style={{
            backgroundColor: '#6366f1',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '10px',
            fontWeight: '700',
            textDecoration: 'none'
          }}>
            커리큘럼 시작하기 →
          </Link>
          <Link href="/practice" style={{
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            padding: '12px 24px',
            borderRadius: '10px',
            fontWeight: '700',
            textDecoration: 'none'
          }}>
            기능 실습 보러가기
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <main style={{ maxWidth: '1200px', margin: '48px auto', padding: '0 24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px'
        }}>
          <div style={{ padding: '30px', borderRadius: '15px', border: '1px solid #e2e8f0', backgroundColor: '#f9fafb' }}>
            <h3 style={{ marginBottom: '10px' }}>3회차: 상태관리 이해</h3>
            <p style={{ fontSize: '0.9rem', opacity: '0.7', marginBottom: '20px' }}>현재 진행 중인 스터디 내용을 확인하세요.</p>
            <Link href="/curriculum" style={{ color: '#6366f1', fontWeight: '700', fontSize: '0.9rem' }}>이어보기 →</Link>
          </div>
          <div style={{ padding: '30px', borderRadius: '15px', border: '1px solid #e2e8f0', backgroundColor: '#f9fafb' }}>
            <h3 style={{ marginBottom: '10px' }}>입문부터 시작하기</h3>
            <p style={{ fontSize: '0.9rem', opacity: '0.7', marginBottom: '20px' }}>1회차부터 차근차근 학습해보세요.</p>
            <Link href="/curriculum" style={{ color: '#6366f1', fontWeight: '700', fontSize: '0.9rem' }}>바로가기 →</Link>
          </div>
          <div style={{ padding: '30px', borderRadius: '15px', border: '1px solid #e2e8f0', backgroundColor: '#f9fafb' }}>
            <h3 style={{ marginBottom: '10px' }}>로그인 기능 만들기</h3>
            <p style={{ fontSize: '0.9rem', opacity: '0.7', marginBottom: '20px' }}>가장 인기 있는 실습 프로젝트입니다.</p>
            <Link href="/practice" style={{ color: '#6366f1', fontWeight: '700', fontSize: '0.9rem' }}>실습 보기 →</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
