import React from 'react';
import { 
  Search, Code2, Layers, 
  ArrowRight, Zap, CheckCircle2, Circle, 
  Bookmark, Download, Copy, Edit3, 
  Clock, Calendar, PlayCircle, ChevronDown, Bell, ChevronRight, Layout
} from 'lucide-react';
import Link from 'next/link';

export default function CurriculumPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fc] flex flex-col font-sans">
      {/* --- Navigation Bar --- */}
      <nav className="bg-[#0f172a] text-white px-6 py-3 flex items-center justify-between border-b border-white/10 sticky top-0 z-50">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <div className="bg-indigo-500 p-1 rounded-lg">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <span>Vibe Coding</span>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
            <Link href="/curriculum" className="text-white border-b-2 border-indigo-500 pb-1">커리큘럼</Link>
            <a href="#" className="hover:text-white transition-colors">기능실습</a>
            <a href="#" className="hover:text-white transition-colors">자료실</a>
            <a href="#" className="hover:text-white transition-colors">기본가이드</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="검색..." 
              className="bg-white/10 border border-white/10 rounded-full py-1.5 pl-10 pr-4 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
          </div>
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors text-slate-300">
            <Bell className="w-5 h-5" />
          </button>
          <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold border border-white/20">
            <UserIcon className="w-4 h-4" />
          </div>
        </div>
      </nav>

      {/* --- Header Area --- */}
      <header className="bg-[#0f172a] text-white px-6 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="space-y-4">
            <h1 className="text-3xl font-black">커리큘럼</h1>
            <p className="text-slate-400 max-w-md leading-relaxed text-sm">
              스터디를 진행하며 회차별 내용을 기록하고 정리합니다.<br />
              단계별 미션을 해결하며 실전 감각을 익혀보세요.
            </p>
            <div className="flex gap-3 pt-2">
              <button className="bg-indigo-600 hover:bg-indigo-500 px-5 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-all">
                <PlayCircle className="w-4 h-4" /> 이어보기
              </button>
              <button className="bg-white/10 hover:bg-white/20 border border-white/10 px-5 py-2 rounded-xl text-sm font-bold transition-all">
                학습 진도
              </button>
            </div>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-md border border-white/10 rounded-3xl p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-bold text-slate-300">전체 진행률</span>
              <span className="text-lg font-black text-indigo-400">35%</span>
            </div>
            <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden mb-6">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full w-[35%] rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)]" />
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">전체 회차</p>
                <p className="text-xl font-bold">16</p>
              </div>
              <div className="border-x border-white/10">
                <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">완료 회차</p>
                <p className="text-xl font-bold text-green-400">5</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">남은 회차</p>
                <p className="text-xl font-bold text-orange-400">11</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- Main Section --- */}
      <main className="max-w-7xl mx-auto w-full px-6 py-10 space-y-8">
        
        {/* Roadmap Bar */}
        <div className="bg-white rounded-2xl border border-slate-200 p-2 flex items-center gap-2 overflow-x-auto shadow-sm no-scrollbar">
          <div className="flex items-center gap-2 px-4 whitespace-nowrap group cursor-pointer">
            <Layout className="w-4 h-4 text-slate-400" />
            <span className="text-sm font-bold text-slate-500">커리큘럼 로드맵</span>
          </div>
          <div className="h-6 w-[1px] bg-slate-100 mx-2" />
          <RoadmapItem label="입문" rounds="1-4 회차" active />
          <RoadmapArrow />
          <RoadmapItem label="기초" rounds="5-8 회차" />
          <RoadmapArrow />
          <RoadmapItem label="실전" rounds="9-13 회차" />
          <RoadmapArrow />
          <RoadmapItem label="심화" rounds="14-16 회차" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sidebar */}
          <aside className="lg:col-span-3 space-y-6 sticky top-24">
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="p-5 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center cursor-pointer group">
                <div>
                  <h3 className="text-sm font-black text-slate-800">입문</h3>
                  <p className="text-[10px] text-slate-400 mt-0.5">1-4 회차</p>
                </div>
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-slate-800 transition-colors" />
              </div>
              <div className="divide-y divide-slate-50">
                <SidebarItem title="1회차: 바이브 코딩이란?" completed />
                <SidebarItem title="2회차: 개발 환경 설정" completed />
                <SidebarItem title="3회차: HTML 기본 구조" completed />
                <SidebarItem title="4회차: CSS 기본 스타일링" current />
              </div>
              <div className="p-4 border-t border-slate-100 bg-slate-50/50 flex justify-between items-center opacity-50">
                <span className="text-sm font-bold text-slate-600">기초 (5-8회차)</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </div>
              <div className="p-4 border-t border-slate-100 bg-slate-50/50 flex justify-between items-center opacity-50">
                <span className="text-sm font-bold text-slate-600">실전 (9-13회차)</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </div>
            </div>

            {/* Stats Summary */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-6 shadow-sm">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-sm">학습 기록</h3>
                <span className="text-[10px] font-bold text-indigo-600 cursor-pointer hover:underline">전체 보기</span>
              </div>
              <div className="space-y-4">
                <StatRow label="최근 학습" value="4회차 - CSS 기본 스타일링" date="2024.05.20" />
                <StatRow label="마지막 학습" value="3회차 - HTML 기본 구조" date="2024.05.18" />
                <div className="pt-2 flex justify-between items-center">
                  <span className="text-[10px] text-slate-400">학습 시간</span>
                  <span className="text-xs font-bold text-slate-700 flex items-center gap-1"><Clock className="w-3 h-3 text-indigo-500" /> 12h 45m</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-slate-400">연속 학습</span>
                  <span className="text-xs font-bold text-slate-700">7일 연속 🔥</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Content Area */}
          <div className="lg:col-span-9 space-y-8">
            <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm space-y-10">
              {/* Content Header */}
              <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="bg-indigo-50 text-indigo-600 text-[10px] font-black px-2 py-0.5 rounded-full">입문</span>
                    <span className="text-xs font-bold text-slate-400">4회차</span>
                  </div>
                  <h2 className="text-3xl font-black text-slate-800 tracking-tight">CSS 기본 스타일링</h2>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-2xl">
                    CSS의 기본 개념과 선택자, 박스 모델, 색상, 타이포그래피 등<br />
                    스타일링의 기초를 학습합니다.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-2 text-xs text-slate-400 font-medium">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-indigo-400" /> 2024.05.20</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-indigo-400" /> 1h 25m</span>
                    <span className="flex items-center gap-1.5"><Layout className="w-3.5 h-3.5 text-indigo-400" /> 핵심 개념</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2.5 bg-slate-50 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all border border-slate-100">
                    <Bookmark className="w-5 h-5" />
                  </button>
                  <div className="flex gap-1.5 bg-slate-50 p-1.5 rounded-xl border border-slate-100">
                    <button className="px-3 py-1.5 text-xs font-bold text-slate-500 hover:text-slate-800 flex items-center gap-1">
                      이전 회차
                    </button>
                    <button className="px-3 py-1.5 text-xs font-bold text-slate-800 bg-white shadow-sm rounded-lg flex items-center gap-1">
                      다음 회차 <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Practice Cards */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-black text-slate-800">연결된 기능 실습</h3>
                  <a href="#" className="text-[10px] font-bold text-indigo-600 hover:underline flex items-center gap-1">전체 실습 보기 <ChevronRight className="w-3 h-3" /></a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <PracticeCard title="카드 컴포넌트 만들기" desc="다양한 스타일이 적용된 카드 컴포넌트를 구현해보세요." badge="CSS" icon={Layers} />
                  <PracticeCard title="네비게이션 바 만들기" desc="반응형 네비게이션 바를 구현하고 스타일을 적용해보세요." badge="CSS" icon={Zap} />
                </div>
              </div>

              {/* Learning Points */}
              <div className="space-y-4">
                <h3 className="font-black text-slate-800">학습 내용</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8 text-sm text-slate-600 font-medium list-disc list-inside marker:text-indigo-400">
                  <li>CSS란 무엇인가?</li>
                  <li>선택자 (Selectors)</li>
                  <li>박스 모델 (Box Model)</li>
                  <li>색상 (Color)</li>
                  <li>타이포그래피 (Typography)</li>
                  <li>레이아웃 기초</li>
                </ul>
              </div>

              {/* Markdown Section */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-black text-slate-800 flex items-center gap-2">회차 기록 <span className="text-[10px] font-normal text-slate-400">(Markdown)</span></h3>
                  <div className="flex gap-2">
                    <button className="text-[10px] font-bold text-slate-400 hover:text-slate-800 flex items-center gap-1 bg-slate-50 px-2 py-1 rounded-md"><Copy className="w-3 h-3" /> 복사</button>
                    <button className="text-[10px] font-bold text-slate-400 hover:text-slate-800 flex items-center gap-1 bg-slate-50 px-2 py-1 rounded-md"><Download className="w-3 h-3" /> 다운로드</button>
                  </div>
                </div>
                <div className="bg-[#1e293b] rounded-2xl p-6 font-mono text-sm text-slate-300 leading-relaxed shadow-inner">
                  <p className="text-indigo-400">## 4회차 - CSS 기본 스타일링</p>
                  <br />
                  <p className="text-slate-500">### 학습 목표</p>
                  <p>- CSS의 기본 개념 이해</p>
                  <p>- 선택자와 박스 모델 이해</p>
                  <p>- 기본 스타일 속성 사용법 익히기</p>
                  <br />
                  <p className="text-slate-500">### 주요 내용</p>
                  <p>#### 1. CSS란?</p>
                  <p>CSS는 HTML 요소의 스타일을 정의하는 언어입니다.</p>
                  <br />
                  <p>#### 2. 선택자</p>
                  <p className="text-green-400"> - 태그 선택자: `p &#123; color: red; &#125;`</p>
                  <p className="text-green-400"> - 클래스 선택자: `.box &#123; padding: 20px; &#125;`</p>
                  <p className="text-green-400"> - 아이디 선택자: `#header &#123; background: blue; &#125;`</p>
                  <p className="text-slate-500">...</p>
                </div>
              </div>

              {/* Reflection */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-black text-slate-800">회고 / 느낀점</h3>
                  <button className="text-[10px] font-bold text-slate-400 hover:text-indigo-600 flex items-center gap-1"><Edit3 className="w-3 h-3" /> 수정</button>
                </div>
                <div className="bg-indigo-50/50 border border-indigo-100 rounded-2xl p-6 text-sm text-slate-600 leading-relaxed italic">
                  &quot;CSS를 사용해 요소를 꾸미는 과정이 재미있었다. 특히 박스 모델을 이해하고 나니 레이아웃을 잡는 것이 훨씬 쉬워졌다. 다음에는 Flexbox를 활용해 반응형 레이아웃을 만들어보고 싶다.&quot;
                </div>
              </div>

              {/* Footer Buttons */}
              <div className="flex justify-between items-center pt-8 border-t border-slate-100">
                <button className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-indigo-600 transition-colors">
                  <ChevronRight className="w-4 h-4 rotate-180" /> 이전 회차
                </button>
                <button className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-indigo-500 transition-all hover:scale-105 shadow-lg shadow-indigo-600/20">
                  다음 회차 <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* --- Footer --- */}
      <footer className="bg-white border-t border-slate-200 px-6 py-12 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center gap-2 font-bold text-lg text-slate-800 justify-center md:justify-start">
              <Code2 className="w-5 h-5 text-indigo-600" />
              <span>Vibe Coding</span>
            </div>
            <p className="text-sm text-slate-400">함께 배우고 성장하는 바이브 코딩 스터디 공간</p>
          </div>
          <div className="flex items-center gap-8 text-sm font-bold text-slate-500">
            <Link href="/" className="hover:text-indigo-600 transition-colors">GitHub</Link>
            <a href="#" className="hover:text-indigo-600 transition-colors">문의하기</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">업데이트 로그</a>
          </div>
          <div className="text-xs text-slate-400">
            © 2024 Vibe Coding. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

// Helper Components
function UserIcon({ className }: { className: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  );
}

function RoadmapItem({ label, rounds, active = false }: { label: string, rounds: string, active?: boolean }) {
  return (
    <div className={`flex flex-col items-center gap-0.5 px-6 py-2 rounded-xl transition-all cursor-pointer ${active ? 'bg-indigo-50 border border-indigo-100 scale-105 shadow-sm' : 'hover:bg-slate-50'}`}>
      <span className={`text-xs font-black ${active ? 'text-indigo-600' : 'text-slate-400'}`}>{label}</span>
      <span className="text-[10px] text-slate-400 whitespace-nowrap">{rounds}</span>
    </div>
  );
}

function RoadmapArrow() {
  return <ArrowRight className="w-4 h-4 text-slate-200 shrink-0" />;
}

function SidebarItem({ title, completed = false, current = false }: { title: string, completed?: boolean, current?: boolean }) {
  return (
    <div className={`p-4 flex items-center justify-between cursor-pointer transition-all ${current ? 'bg-indigo-50/50 border-r-4 border-indigo-500' : 'hover:bg-slate-50'}`}>
      <span className={`text-xs font-bold ${current ? 'text-indigo-600' : 'text-slate-600'}`}>{title}</span>
      {completed ? (
        <CheckCircle2 className="w-4 h-4 text-green-500" />
      ) : current ? (
        <div className="w-4 h-4 rounded-full border-2 border-indigo-300 border-t-indigo-600 animate-spin" />
      ) : (
        <Circle className="w-4 h-4 text-slate-200" />
      )}
    </div>
  );
}

function StatRow({ label, value, date }: { label: string, value: string, date: string }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between items-center">
        <span className="text-[10px] text-slate-400">{label}</span>
        <span className="text-[10px] text-slate-300">{date}</span>
      </div>
      <p className="text-xs font-bold text-slate-700 truncate">{value}</p>
    </div>
  );
}

function PracticeCard({ title, desc, badge, icon: Icon }: { title: string, desc: string, badge: string, icon: React.ElementType }) {
  return (
    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 group hover:border-indigo-200 transition-all cursor-pointer">
      <div className="flex items-start justify-between mb-3">
        <div className="p-2.5 bg-white rounded-xl text-indigo-600 shadow-sm group-hover:scale-110 transition-transform">
          <Icon className="w-5 h-5" />
        </div>
        <span className="text-[10px] font-black px-2 py-0.5 bg-white rounded-full text-slate-400 border border-slate-100 uppercase">{badge}</span>
      </div>
      <h4 className="text-sm font-black text-slate-800 mb-1">{title}</h4>
      <p className="text-[11px] text-slate-500 leading-relaxed mb-4">{desc}</p>
      <button className="text-[10px] font-bold text-indigo-600 flex items-center gap-1 hover:underline">
        실습 보기 <ArrowRight className="w-3 h-3" />
      </button>
    </div>
  );
}
