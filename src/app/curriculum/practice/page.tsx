'use client';

import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, Zap, CheckCircle2, 
  PlayCircle, Edit3, 
  Clock, ChevronDown, ChevronRight, LayoutGrid, Timer, Rocket, Code, Shield, Layers, Box, Monitor, Bot, Newspaper
} from 'lucide-react';
import Link from 'next/link';

export default function PracticeCurriculumPage() {
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
    const sections = ['core', 'track-a', 'track-b', 'track-c', 'track-d', 'track-e'];
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
              아이디어를 실제 동작하는 프로덕트로 구현하는 실습 중심 과정입니다.<br />
              이론을 넘어 시장에 내놓을 수 있는 결과물을 직접 완성해보세요.
            </p>
            <div className="flex gap-3 pt-2">
              <button className="bg-emerald-600 hover:bg-emerald-500 px-5 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-all text-white">
                <PlayCircle className="w-4 h-4" /> 이어보기
              </button>
              <button className="bg-slate-200 dark:bg-white/10 hover:bg-slate-300 dark:hover:bg-white/20 border border-slate-300 dark:border-white/10 px-5 py-2 rounded-xl text-sm font-bold transition-all">
                학습 진도
              </button>
            </div>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-bold text-slate-300">실전 단계 진행률</span>
              <span className="text-lg font-black text-emerald-400">5%</span>
            </div>
            <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden mb-6">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-full w-[5%] rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">프로젝트</p>
                <p className="text-xl font-bold">5</p>
              </div>
              <div className="border-x border-white/10">
                <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">진행중</p>
                <p className="text-xl font-bold text-emerald-400">1</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">완성</p>
                <p className="text-xl font-bold text-slate-400">0</p>
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
          <RoadmapItem label="2. 기초" rounds="System & Structure" href="/curriculum/basic" />
          <RoadmapArrow />
          <RoadmapItem label="3. 실전" rounds="Execution & Build" href="/curriculum/practice" active />
          <RoadmapArrow />
          <RoadmapItem label="4. 심화" rounds="Scale & Real World" href="/curriculum/advanced" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sidebar */}
          <aside className="lg:col-span-3 space-y-6 sticky top-24">
            <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm transition-colors text-left">
              <div className="p-5 border-b border-border bg-slate-50/50 dark:bg-slate-800/50 flex flex-col gap-1 transition-colors">
                <h3 className="text-sm font-black text-slate-800 dark:text-white flex items-center gap-2">
                  <span className="bg-emerald-600 text-white w-5 h-5 rounded flex items-center justify-center text-[10px]">3</span> 
                  실전 단계
                </h3>
                <p className="text-[10px] text-emerald-500 font-bold">"실제로 결과물을 만드는 단계"</p>
              </div>
              <div className="divide-y divide-border">
                <SidebarItem 
                  title="핵심 주제 (Core)" 
                  active={activeSection === 'core'} 
                  onClick={() => scrollToSection('core')}
                />
                
                <div className="flex flex-col">
                  <SidebarItem 
                    title="선택형 프로젝트 트랙" 
                    active={['track-a', 'track-b', 'track-c', 'track-d', 'track-e'].includes(activeSection)}
                    onClick={() => scrollToSection('track-a')}
                  />
                  
                  <div className="bg-slate-50/50 dark:bg-white/5 py-1">
                    <SidebarItem title="트랙 A: 웹 서비스" active={activeSection === 'track-a'} onClick={() => scrollToSection('track-a')} isSubItem />
                    <SidebarItem title="트랙 B: 자동화 툴" active={activeSection === 'track-b'} onClick={() => scrollToSection('track-b')} isSubItem />
                    <SidebarItem title="트랙 C: 크롬 확장" active={activeSection === 'track-c'} onClick={() => scrollToSection('track-c')} isSubItem />
                    <SidebarItem title="트랙 D: AI 서비스" active={activeSection === 'track-d'} onClick={() => scrollToSection('track-d')} isSubItem />
                    <SidebarItem title="트랙 E: 콘텐츠 플랫폼" active={activeSection === 'track-e'} onClick={() => scrollToSection('track-e')} isSubItem />
                  </div>
                </div>
              </div>
            </div>

            {/* Selection Guide */}
            <div className="bg-card rounded-2xl border border-border p-6 space-y-6 shadow-sm transition-colors text-left">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-sm text-slate-800 dark:text-white flex items-center gap-2">
                  <span className="text-lg">🎁</span> 실전 프로젝트 가이드
                </h3>
              </div>
              <div className="space-y-4">
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  본인의 관심 분야나 비즈니스 목표에 맞는 트랙을 선택하세요. 1개 이상의 프로젝트 완성을 권장합니다.
                </p>
                <div className="space-y-3">
                  <BenefitItem text="실질적인 포트폴리오 확보" />
                  <BenefitItem text="상용화 가능한 수준의 개발" />
                  <BenefitItem text="보안 및 운영 기초 습득" />
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
                    <span className="bg-emerald-100 text-emerald-600 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Execution & Build</span>
                  </div>
                  <h2 className="text-3xl font-black text-slate-800 dark:text-white tracking-tight">3. 실전: 프로덕트 빌딩</h2>
                  <p className="text-emerald-600 font-bold text-lg leading-relaxed max-w-2xl">
                    "실제로 결과물을 만드는 단계"
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    설계를 넘어 실제 사용자가 사용할 수 있는 어플리케이션을 구축합니다.<br />
                    보안, 일관성, 확장성을 고려한 프로급 개발 프로세스를 경험하세요.
                  </p>
                </div>
              </div>

              {/* Core Topics */}
              <div id="core" className="scroll-mt-32 space-y-6 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <Layers size={24} />
                  </div>
                  <h3 className="text-xl font-black text-slate-800 dark:text-white">핵심 주제 (Common Core)</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: "프로젝트 구조 설계", desc: "유지보수가 쉬운 파일 구조와 컴포넌트 분리 전략" },
                    { title: "코드 일관성 유지 전략", desc: "린트 설정 및 팀 협업을 위한 코드 컨벤션 수립" },
                    { title: "서브도메인 & 이메일 관리", desc: "서브도메인 할당 원리 및 브랜드 이메일 계정 생성/관리" },
                    { title: "디자인 명시도 개선", desc: "UI 가독성과 사용성을 높이는 디테일한 CSS/UX 튜닝" },
                    { title: "API 활용 및 에러 처리", desc: "외부 서비스 연동 시 발생할 수 있는 예외 상황 대응" },
                    { title: "보안 기초 (.env, 인증)", desc: "API 키 관리 및 사용자 인증(Auth) 시스템의 기본 보안" },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-slate-50 dark:bg-white/5 p-5 rounded-2xl border border-slate-100 dark:border-white/5 hover:border-emerald-500/30 transition-all flex items-start gap-4 group">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                      <div>
                        <h4 className="text-sm font-bold text-slate-800 dark:text-white mb-1 group-hover:text-emerald-600 transition-colors">{item.title}</h4>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Tracks */}
              <div className="pt-4 border-t border-border text-left">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-500/10 flex items-center justify-center text-teal-600 dark:text-teal-400">
                    <Box size={24} />
                  </div>
                  <h3 className="text-xl font-black text-slate-800 dark:text-white">선택형 프로젝트 트랙 (Optional Projects)</h3>
                </div>
                
                <div className="space-y-12">
                  {/* Track A */}
                  <div id="track-a" className="scroll-mt-32 bg-white dark:bg-slate-900 rounded-3xl border-2 border-emerald-100 dark:border-emerald-500/20 p-8 space-y-6 hover:border-emerald-500 transition-all group shadow-sm">
                    <div className="flex justify-between items-center">
                      <div className="inline-flex bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Track A</div>
                      <Monitor className="w-5 h-5 text-emerald-500" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-slate-800 dark:text-white mb-2">웹 서비스 트랙</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">수익화가 가능한 SaaS 형태의 웹 어플리케이션을 구축합니다.</p>
                    </div>
                    <ul className="space-y-3 pt-2">
                      <li className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" /> 로그인 및 회원가입 연동
                      </li>
                      <li className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" /> 사용자 데이터 영구 저장 및 관리
                      </li>
                    </ul>
                    <button className="w-full py-4 bg-emerald-600 text-white font-black rounded-2xl hover:bg-emerald-500 transition-all">웹 프로젝트 시작</button>
                  </div>

                  {/* Track B */}
                  <div id="track-b" className="scroll-mt-32 bg-white dark:bg-slate-900 rounded-3xl border-2 border-blue-100 dark:border-blue-500/20 p-8 space-y-6 hover:border-blue-500 transition-all group shadow-sm">
                    <div className="flex justify-between items-center">
                      <div className="inline-flex bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Track B</div>
                      <Code className="w-5 h-5 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-slate-800 dark:text-white mb-2">자동화 툴 트랙</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">일상의 불편함을 해결하는 맞춤형 업무 자동화 프로그램을 제작합니다.</p>
                    </div>
                    <ul className="space-y-3 pt-2">
                      <li className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-blue-500" /> 웹 크롤링 및 데이터 전처리
                      </li>
                      <li className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-blue-500" /> 주기적 태스크 실행 및 리포트 발송
                      </li>
                    </ul>
                    <button className="w-full py-4 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-500 transition-all">자동화 툴 시작</button>
                  </div>

                  {/* Track C */}
                  <div id="track-c" className="scroll-mt-32 bg-white dark:bg-slate-900 rounded-3xl border-2 border-purple-100 dark:border-purple-500/20 p-8 space-y-6 hover:border-purple-500 transition-all group shadow-sm">
                    <div className="flex justify-between items-center">
                      <div className="inline-flex bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Track C</div>
                      <Zap className="w-5 h-5 text-purple-500" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-slate-800 dark:text-white mb-2">크롬 확장 프로그램</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">브라우저 기능을 확장하여 생산성을 높이는 익스텐션을 개발합니다.</p>
                    </div>
                    <ul className="space-y-3 pt-2">
                      <li className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-purple-500" /> 브라우저 탭 및 DOM 조작 기초
                      </li>
                      <li className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-purple-500" /> 확장 프로그램 전용 UI 및 백그라운드 스크립트
                      </li>
                    </ul>
                    <button className="w-full py-4 bg-purple-600 text-white font-black rounded-2xl hover:bg-purple-500 transition-all">확장 프로그램 시작</button>
                  </div>

                  {/* Track D */}
                  <div id="track-d" className="scroll-mt-32 bg-white dark:bg-slate-900 rounded-3xl border-2 border-orange-100 dark:border-orange-500/20 p-8 space-y-6 hover:border-orange-500 transition-all group shadow-sm">
                    <div className="flex justify-between items-center">
                      <div className="inline-flex bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Track D</div>
                      <Bot className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-slate-800 dark:text-white mb-2">AI 서비스 트랙</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">최신 AI API를 연동하여 지능형 챗봇이나 생성 서비스를 구축합니다.</p>
                    </div>
                    <ul className="space-y-3 pt-2">
                      <li className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-orange-500" /> 스트리밍 응답 처리 및 대화 이력 관리
                      </li>
                      <li className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-orange-500" /> 지능형 에이전트 서비스 기획 및 연동
                      </li>
                    </ul>
                    <button className="w-full py-4 bg-orange-600 text-white font-black rounded-2xl hover:bg-orange-500 transition-all">AI 서비스 시작</button>
                  </div>

                  {/* Track E */}
                  <div id="track-e" className="scroll-mt-32 bg-white dark:bg-slate-900 rounded-3xl border-2 border-indigo-100 dark:border-indigo-500/20 p-8 space-y-6 hover:border-indigo-500 transition-all group shadow-sm">
                    <div className="flex justify-between items-center">
                      <div className="inline-flex bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Track E</div>
                      <Newspaper className="w-5 h-5 text-indigo-500" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-slate-800 dark:text-white mb-2">콘텐츠 플랫폼</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">게시판, 업로드, 관리 기능을 갖춘 커뮤니티 형태의 플랫폼을 개발합니다.</p>
                    </div>
                    <ul className="space-y-3 pt-2">
                      <li className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-indigo-500" /> 멀티미디어 파일 업로드 및 클라우드 저장
                      </li>
                      <li className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-indigo-500" /> 게시글 필터링, 검색 및 관리자 대시보드
                      </li>
                    </ul>
                    <button className="w-full py-4 bg-indigo-600 text-white font-black rounded-2xl hover:bg-indigo-500 transition-all">플랫폼 프로젝트 시작</button>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="pt-8 border-t border-border flex justify-between">
                <Link href="/curriculum/basic">
                  <button className="bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-200 transition-all">
                    <ArrowRight className="w-4 h-4 rotate-180" /> 2. 기초 단계로
                  </button>
                </Link>
                <Link href="/curriculum/advanced">
                  <button className="bg-slate-900 dark:bg-white/20 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-purple-600 transition-all shadow-lg hover:shadow-purple-500/20">
                    4. 심화 단계: 비즈니스 스케일업 <ChevronRight className="w-4 h-4" />
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
      <CheckCircle2 className="w-3 h-3 text-emerald-500 mt-0.5 shrink-0 transition-transform group-hover:scale-125" />
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
        active ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20 scale-105' : 'hover:bg-slate-50 dark:hover:bg-white/5 text-slate-400'
      }`}>
        <span className={`text-xs font-black ${active ? 'text-white' : 'text-slate-400'}`}>{label}</span>
        <span className={`text-[10px] whitespace-nowrap ${active ? 'text-emerald-200' : 'text-slate-400'}`}>{rounds}</span>
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
          ? 'bg-emerald-600/10 border-r-4 border-emerald-600' 
          : 'hover:bg-slate-50 dark:hover:bg-white/5'
      } ${isSubItem ? 'pl-9 py-2.5' : ''}`}
    >
      <span className={`font-bold transition-colors ${
        isSubItem ? 'text-[11px]' : 'text-xs'
      } ${
        active ? 'text-emerald-600' : 'text-slate-600 dark:text-slate-400'
      }`}>
        {title}
      </span>
      {active && !isSubItem && <div className="w-1.5 h-1.5 rounded-full bg-emerald-600" />}
      {active && isSubItem && <div className="w-1 h-1 rounded-full bg-emerald-600/60" />}
    </div>
  );
}
