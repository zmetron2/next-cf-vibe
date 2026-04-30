'use client';

import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, Zap, CheckCircle2, 
  PlayCircle, Edit3, 
  Clock, ChevronDown, ChevronRight, LayoutGrid, Timer, Target, Database, Cpu, Globe
} from 'lucide-react';
import Link from 'next/link';

export default function BasicCurriculumPage() {
  const [activeSection, setActiveSection] = useState('core');

  // ScrollSpy Logic
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-150px 0px -60% 0px',
      threshold: 0
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sections = ['core', 'track-a', 'track-b', 'track-c'];
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans transition-colors scroll-smooth">

      {/* --- Header Area --- */}
      <header className="bg-slate-50 dark:bg-[#0f172a] text-slate-900 dark:text-white py-12 transition-colors border-b border-slate-200 dark:border-white/5 text-left">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="space-y-4">
            <h1 className="text-3xl font-black">커리큘럼</h1>
            <p className="text-slate-400 max-w-md leading-relaxed text-sm">
              시스템의 동작 원리를 이해하고 구조화된 개발 사고를 기릅니다.<br />
              단순한 호출을 넘어 데이터가 흐르는 지도를 그려보세요.
            </p>
            <div className="flex gap-3 pt-2">
              <button className="bg-indigo-600 hover:bg-indigo-500 px-5 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-all text-white">
                <PlayCircle className="w-4 h-4" /> 이어보기
              </button>
              <button className="bg-slate-200 dark:bg-white/10 hover:bg-slate-300 dark:hover:bg-white/20 border border-slate-300 dark:border-white/10 px-5 py-2 rounded-xl text-sm font-bold transition-all">
                학습 진도
              </button>
            </div>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-bold text-slate-300">기초 단계 진행률</span>
              <span className="text-lg font-black text-indigo-400">12%</span>
            </div>
            <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full w-[12%] rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">전체 미션</p>
                <p className="text-xl font-bold">12</p>
              </div>
              <div className="border-x border-white/10">
                <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">완료 미션</p>
                <p className="text-xl font-bold text-blue-400">1</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">남은 미션</p>
                <p className="text-xl font-bold text-orange-400">11</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- Main Section --- */}
      <main className="max-w-7xl mx-auto w-full px-6 py-10 space-y-8">
        
        {/* Roadmap Bar */}
        <div className="bg-card rounded-xl border border-border p-2 flex items-center gap-2 overflow-x-auto shadow-sm no-scrollbar transition-colors relative z-20">
          <div className="flex items-center gap-2 px-4 whitespace-nowrap group cursor-pointer">
            <LayoutGrid className="w-4 h-4 text-slate-400" />
            <span className="text-sm font-bold text-slate-500 dark:text-slate-400">커리큘럼 로드맵</span>
          </div>
          <div className="h-6 w-[1px] bg-slate-100 dark:bg-white/10 mx-2" />
          <RoadmapItem label="1. 입문" rounds="Mindset & Comm." href="/curriculum" />
          <RoadmapArrow />
          <RoadmapItem label="2. 기초" rounds="System & Structure" href="/curriculum/basic" active />
          <RoadmapArrow />
          <RoadmapItem label="3. 실전" rounds="Execution & Build" href="/curriculum/practice" />
          <RoadmapArrow />
          <RoadmapItem label="4. 심화" rounds="Scale & Real World" href="/curriculum/advanced" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sidebar */}
          <aside className="lg:col-span-3 space-y-6 sticky top-24">
            <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm transition-colors text-left">
              <div className="p-5 border-b border-border bg-slate-50/50 dark:bg-slate-800/50 flex flex-col gap-1 transition-colors">
                <h3 className="text-sm font-black text-slate-800 dark:text-white flex items-center gap-2">
                  <span className="bg-blue-600 text-white w-5 h-5 rounded flex items-center justify-center text-[10px]">2</span> 
                  기초 단계
                </h3>
                <p className="text-[10px] text-blue-500 font-bold">"왜 결과가 달라지는지 이해하는 단계"</p>
              </div>
              <div className="divide-y divide-border">
                <SidebarItem 
                  title="핵심 주제 (Core)" 
                  active={activeSection === 'core'} 
                  onClick={() => scrollToSection('core')}
                />
                
                <div className="flex flex-col">
                  <SidebarItem 
                    title="선택형 실습 트랙" 
                    active={['track-a', 'track-b', 'track-c'].includes(activeSection)}
                    onClick={() => scrollToSection('track-a')}
                  />
                  
                  <div className="bg-slate-50/50 dark:bg-white/5 py-1">
                    <SidebarItem 
                      title="트랙 A: 웹 구조 이해" 
                      active={activeSection === 'track-a'} 
                      onClick={() => scrollToSection('track-a')}
                      isSubItem
                    />
                    <SidebarItem 
                      title="트랙 B: 데이터 흐름" 
                      active={activeSection === 'track-b'} 
                      onClick={() => scrollToSection('track-b')}
                      isSubItem
                    />
                    <SidebarItem 
                      title="트랙 C: AI 구조 이해" 
                      active={activeSection === 'track-c'} 
                      onClick={() => scrollToSection('track-c')}
                      isSubItem
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Selection Guide */}
            <div className="bg-card rounded-2xl border border-border p-6 space-y-6 shadow-sm transition-colors text-left">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-sm text-slate-800 dark:text-white flex items-center gap-2">
                  <span className="text-lg">🎁</span> 실습 선택 가이드
                </h3>
              </div>
              <div className="space-y-5">
                <div className="space-y-2">
                  <p className="text-[10px] font-black text-indigo-500 uppercase tracking-widest">트랙 A 선택 시</p>
                  <ul className="space-y-1.5">
                    <BenefitItem text="프론트/백엔드 연결 흐름 이해" />
                    <BenefitItem text="API 통신의 기본 원리 습득" />
                  </ul>
                </div>
                <div className="h-[1px] bg-border" />
                <div className="space-y-2">
                  <p className="text-[10px] font-black text-teal-500 uppercase tracking-widest">트랙 B 선택 시</p>
                  <ul className="space-y-1.5">
                    <BenefitItem text="데이터베이스(DB) 핵심 개념" />
                    <BenefitItem text="CRUD 데이터 수명 주기 설계" />
                  </ul>
                </div>
                <div className="h-[1px] bg-border" />
                <div className="space-y-2">
                  <p className="text-[10px] font-black text-orange-500 uppercase tracking-widest">트랙 C 선택 시</p>
                  <ul className="space-y-1.5">
                    <BenefitItem text="LLM 호출 아키텍처 파악" />
                    <BenefitItem text="API 기반 지능형 서비스 설계" />
                  </ul>
                </div>
              </div>
            </div>
          </aside>

          {/* Content Area */}
          <div className="lg:col-span-9 space-y-16">
            <div className="bg-card rounded-2xl border border-border p-8 shadow-sm space-y-12 transition-colors">
              {/* Content Header */}
              <div className="flex flex-col md:flex-row justify-between items-start gap-4 pb-8 border-b border-border text-left">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="bg-blue-100 text-blue-600 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">System & Structure</span>
                  </div>
                  <h2 className="text-3xl font-black text-slate-800 dark:text-white tracking-tight">2. 기초: 시스템 사고의 시작</h2>
                  <p className="text-blue-600 font-bold text-lg leading-relaxed max-w-2xl">
                    "왜 결과가 달라지는지 이해하는 단계"
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    AI가 결과를 만들어내는 기술적 배경과 데이터의 흐름을 학습합니다.<br />
                    구조를 이해하면 더 복잡하고 안정적인 서비스를 설계할 수 있습니다.
                  </p>
                </div>
              </div>

              {/* Core Topics */}
              <div id="core" className="scroll-mt-32 space-y-6 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <Database size={24} />
                  </div>
                  <h3 className="text-xl font-black text-slate-800 dark:text-white">핵심 주제 (Common Core)</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: "서버 / 클라이언트 구조", desc: "요청(Request)과 응답(Response)의 기본 메커니즘 이해" },
                    { title: "실행 환경 (로컬 vs 클라우드)", desc: "개발 환경과 배포 환경의 차이 및 에지 런타임 개념" },
                    { title: "도메인 / DNS 설정", desc: "웹 사이트 주소의 원리와 도메인 네임 서버 연결 방법" },
                    { title: "컨텍스트 & 기억 구조", desc: "AI가 정보를 유지하는 방식(Window Context)과 한계" },
                    { title: "에이전트 한계 (일관성 문제)", desc: "할루시네이션 및 비결정적 응답에 대응하는 전략" },
                    { title: "아키텍처 다이어그램 기초", desc: "복잡한 시스템 구성을 한눈에 그리는 설계 기법" },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-slate-50 dark:bg-white/5 p-5 rounded-2xl border border-slate-100 dark:border-white/5 hover:border-blue-500/30 transition-all flex items-start gap-4 group">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                      <div>
                        <h4 className="text-sm font-bold text-slate-800 dark:text-white mb-1 group-hover:text-blue-600 transition-colors">{item.title}</h4>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Optional Tracks */}
              <div className="pt-4 border-t border-border text-left">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-500/10 flex items-center justify-center text-teal-600 dark:text-teal-400">
                    <Globe size={24} />
                  </div>
                  <h3 className="text-xl font-black text-slate-800 dark:text-white">선택형 실습 트랙 (Optional Tracks)</h3>
                </div>
                
                <div className="space-y-12">
                  {/* Track A */}
                  <div id="track-a" className="scroll-mt-32 bg-white dark:bg-slate-900 rounded-3xl border-2 border-blue-100 dark:border-blue-500/20 p-8 space-y-6 hover:border-blue-500 transition-all group shadow-sm">
                    <div className="flex justify-between items-center">
                      <div className="inline-flex bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Track A</div>
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                        <Clock size={14} className="text-blue-400" /> 예상 70분
                      </div>
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-slate-800 dark:text-white mb-2">웹 구조 이해</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">프론트엔드와 백엔드가 어떻게 데이터를 주고받는지 실습합니다.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                      <div className="bg-slate-50 dark:bg-white/5 p-4 rounded-xl border border-slate-100 dark:border-white/5">
                        <p className="text-xs font-bold mb-2">실습 01. 연결 흐름 분석</p>
                        <p className="text-[11px] text-slate-500 leading-relaxed">네트워크 탭을 통해 데이터가 오가는 전 과정을 모니터링합니다.</p>
                      </div>
                      <div className="bg-slate-50 dark:bg-white/5 p-4 rounded-xl border border-slate-100 dark:border-white/5">
                        <p className="text-xs font-bold mb-2">실습 02. API 호출 미션</p>
                        <p className="text-[11px] text-slate-500 leading-relaxed">외부 API를 연동하여 실시간 데이터를 화면에 출력해봅니다.</p>
                      </div>
                    </div>
                    <button className="w-full py-4 bg-slate-900 dark:bg-white/10 text-white font-black rounded-2xl hover:bg-blue-600 transition-all">웹 구조 실습 시작</button>
                  </div>

                  {/* Track B */}
                  <div id="track-b" className="scroll-mt-32 bg-white dark:bg-slate-900 rounded-3xl border-2 border-teal-100 dark:border-teal-500/20 p-8 space-y-6 hover:border-teal-500 transition-all group shadow-sm">
                    <div className="flex justify-between items-center">
                      <div className="inline-flex bg-teal-50 dark:bg-teal-500/10 text-teal-600 dark:text-teal-400 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Track B</div>
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                        <Clock size={14} className="text-teal-400" /> 예상 90분
                      </div>
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-slate-800 dark:text-white mb-2">데이터 흐름</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">데이터의 저장, 수정, 삭제(CRUD) 과정을 설계하고 직접 구현합니다.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                      <div className="bg-slate-50 dark:bg-white/5 p-4 rounded-xl border border-slate-100 dark:border-white/5">
                        <p className="text-xs font-bold mb-2">실습 01. DB 스키마 설계</p>
                        <p className="text-[11px] text-slate-500 leading-relaxed">효율적인 데이터 보관을 위한 테이블 구조를 AI와 함께 설계합니다.</p>
                      </div>
                      <div className="bg-slate-50 dark:bg-white/5 p-4 rounded-xl border border-slate-100 dark:border-white/5">
                        <p className="text-xs font-bold mb-2">실습 02. CRUD 로직 구현</p>
                        <p className="text-[11px] text-slate-500 leading-relaxed">데이터베이스에 직접 접근하여 정보를 다루는 API를 제작합니다.</p>
                      </div>
                    </div>
                    <button className="w-full py-4 bg-slate-900 dark:bg-white/10 text-white font-black rounded-2xl hover:bg-teal-600 transition-all">데이터 실습 시작</button>
                  </div>

                  {/* Track C */}
                  <div id="track-c" className="scroll-mt-32 bg-white dark:bg-slate-900 rounded-3xl border-2 border-orange-100 dark:border-orange-500/20 p-8 space-y-6 hover:border-orange-500 transition-all group shadow-sm">
                    <div className="flex justify-between items-center">
                      <div className="inline-flex bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Track C</div>
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                        <Clock size={14} className="text-orange-400" /> 예상 80분
                      </div>
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-slate-800 dark:text-white mb-2">AI 구조 이해</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">LLM API가 어떻게 작동하며 서비스와 어떻게 결합되는지 파악합니다.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                      <div className="bg-slate-50 dark:bg-white/5 p-4 rounded-xl border border-slate-100 dark:border-white/5">
                        <p className="text-xs font-bold mb-2">실습 01. LLM API 핸들링</p>
                        <p className="text-[11px] text-slate-500 leading-relaxed">프롬프트를 API 파라미터로 전송하고 응답을 받는 구조를 실습합니다.</p>
                      </div>
                      <div className="bg-slate-50 dark:bg-white/5 p-4 rounded-xl border border-slate-100 dark:border-white/5">
                        <p className="text-xs font-bold mb-2">실습 02. 서비스 파이프라인</p>
                        <p className="text-[11px] text-slate-500 leading-relaxed">사용자 입력부터 AI 처리, 최종 출력까지의 전체 흐름을 완성합니다.</p>
                      </div>
                    </div>
                    <button className="w-full py-4 bg-slate-900 dark:bg-white/10 text-white font-black rounded-2xl hover:bg-orange-600 transition-all">AI 구조 실습 시작</button>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="pt-8 border-t border-border flex justify-between">
                <Link href="/curriculum">
                  <button className="bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-200 transition-all">
                    <ArrowRight className="w-4 h-4 rotate-180" /> 1. 입문 단계로
                  </button>
                </Link>
                <Link href="/curriculum/practice">
                  <button className="bg-slate-900 dark:bg-white/20 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-emerald-600 transition-all shadow-lg hover:shadow-emerald-500/20">
                    3. 실전 단계: 프로덕트 빌딩 <ChevronRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function BenefitItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2 group cursor-default">
      <CheckCircle2 className="w-3 h-3 text-green-500 mt-0.5 shrink-0 transition-transform group-hover:scale-125" />
      <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors leading-tight">
        {text}
      </span>
    </li>
  );
}

function RoadmapItem({ label, rounds, href, active = false }: { label: string, rounds: string, href: string, active?: boolean }) {
  return (
    <Link href={href} className="block shrink-0">
      <div className={`flex flex-col items-center gap-0.5 px-6 py-2 rounded-xl transition-all cursor-pointer ${
        active ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20 scale-105' : 'hover:bg-slate-50 dark:hover:bg-white/5 text-slate-400'
      }`}>
        <span className={`text-xs font-black ${active ? 'text-white' : 'text-slate-400'}`}>{label}</span>
        <span className={`text-[10px] whitespace-nowrap ${active ? 'text-blue-200' : 'text-slate-400'}`}>{rounds}</span>
      </div>
    </Link>
  );
}

function RoadmapArrow() {
  return <ArrowRight className="w-4 h-4 text-slate-200 shrink-0" />;
}

function SidebarItem({ title, active = false, onClick, isSubItem = false }: { title: string, active?: boolean, onClick: () => void, isSubItem?: boolean }) {
  return (
    <div 
      onClick={onClick}
      className={`p-4 flex items-center justify-between cursor-pointer transition-all ${
        active 
          ? 'bg-blue-600/10 border-r-4 border-blue-600' 
          : 'hover:bg-slate-50 dark:hover:bg-white/5'
      } ${isSubItem ? 'pl-9 py-2.5' : ''}`}
    >
      <span className={`font-bold transition-colors ${
        isSubItem ? 'text-[11px]' : 'text-xs'
      } ${
        active ? 'text-blue-600' : 'text-slate-600 dark:text-slate-400'
      }`}>
        {title}
      </span>
      {active && !isSubItem && <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />}
      {active && isSubItem && <div className="w-1 h-1 rounded-full bg-blue-600/60" />}
    </div>
  );
}
