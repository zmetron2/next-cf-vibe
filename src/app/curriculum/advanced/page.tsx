'use client';

import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, Zap, CheckCircle2, 
  PlayCircle, Edit3, 
  Clock, ChevronDown, ChevronRight, LayoutGrid, Timer, Crown, Share2, TrendingUp, Smartphone, Globe, Cpu
} from 'lucide-react';
import Link from 'next/link';

export default function AdvancedCurriculumPage() {
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
              개별 프로덕트를 넘어 지속 가능한 서비스 운영과 수익화를 다룹니다.<br />
              글로벌 시장과 모바일, 고성능 인프라까지 영역을 확장하세요.
            </p>
            <div className="flex gap-3 pt-2">
              <button className="bg-purple-600 hover:bg-purple-500 px-5 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-all text-white">
                <PlayCircle className="w-4 h-4" /> 이어보기
              </button>
              <button className="bg-slate-200 dark:bg-white/10 hover:bg-slate-300 dark:hover:bg-white/20 border border-slate-300 dark:border-white/10 px-5 py-2 rounded-xl text-sm font-bold transition-all">
                마스터 인증
              </button>
            </div>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-bold text-slate-300">심화 단계 진행률</span>
              <span className="text-lg font-black text-purple-400">0%</span>
            </div>
            <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden mb-6">
              <div className="bg-gradient-to-r from-purple-500 to-indigo-500 h-full w-[2%] rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">운영중</p>
                <p className="text-xl font-bold">0</p>
              </div>
              <div className="border-x border-white/10">
                <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">글로벌 노출</p>
                <p className="text-xl font-bold text-purple-400">Off</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">수익 모델</p>
                <p className="text-xl font-bold text-slate-400">Draft</p>
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
          <RoadmapItem label="3. 실전" rounds="Execution & Build" href="/curriculum/practice" />
          <RoadmapArrow />
          <RoadmapItem label="4. 심화" rounds="Scale & Real World" href="/curriculum/advanced" active />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sidebar */}
          <aside className="lg:col-span-3 space-y-6 sticky top-24">
            <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm transition-colors text-left">
              <div className="p-5 border-b border-border bg-slate-50/50 dark:bg-slate-800/50 flex flex-col gap-1 transition-colors">
                <h3 className="text-sm font-black text-slate-800 dark:text-white flex items-center gap-2">
                  <span className="bg-purple-600 text-white w-5 h-5 rounded flex items-center justify-center text-[10px]">4</span> 
                  심화 단계
                </h3>
                <p className="text-[10px] text-purple-500 font-bold">"실제 서비스 수준으로 끌어올리는 단계"</p>
              </div>
              <div className="divide-y divide-border">
                <SidebarItem 
                  title="핵심 주제 (Core)" 
                  active={activeSection === 'core'} 
                  onClick={() => scrollToSection('core')}
                />
                
                <div className="flex flex-col">
                  <SidebarItem 
                    title="선택형 심화 트랙" 
                    active={['track-a', 'track-b', 'track-c', 'track-d', 'track-e'].includes(activeSection)}
                    onClick={() => scrollToSection('track-a')}
                  />
                  
                  <div className="bg-slate-50/50 dark:bg-white/5 py-1">
                    <SidebarItem title="트랙 A: SaaS 운영" active={activeSection === 'track-a'} onClick={() => scrollToSection('track-a')} isSubItem />
                    <SidebarItem title="트랙 B: 수익화 트랙" active={activeSection === 'track-b'} onClick={() => scrollToSection('track-b')} isSubItem />
                    <SidebarItem title="트랙 C: 모바일 확장" active={activeSection === 'track-c'} onClick={() => scrollToSection('track-c')} isSubItem />
                    <SidebarItem title="트랙 D: 글로벌 배포" active={activeSection === 'track-d'} onClick={() => scrollToSection('track-d')} isSubItem />
                    <SidebarItem title="트랙 E: 고급 AI 활용" active={activeSection === 'track-e'} onClick={() => scrollToSection('track-e')} isSubItem />
                  </div>
                </div>
              </div>
            </div>

            {/* Selection Guide */}
            <div className="bg-card rounded-2xl border border-border p-6 space-y-6 shadow-sm transition-colors text-left">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-sm text-slate-800 dark:text-white flex items-center gap-2">
                  <span className="text-lg">👑</span> 마스터 클래스 가이드
                </h3>
              </div>
              <div className="space-y-4">
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  개발자를 넘어 서비스 운영자로서의 역량을 기릅니다. 시장의 반응에 대응하고 성장하는 법을 배웁니다.
                </p>
                <div className="space-y-3">
                  <BenefitItem text="실제 수익 모델 구축" />
                  <BenefitItem text="글로벌 서비스 운영 지식" />
                  <BenefitItem text="고급 AI 인프라 활용" />
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
                    <span className="bg-purple-100 text-purple-600 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Scale & Real World</span>
                  </div>
                  <h2 className="text-3xl font-black text-slate-800 dark:text-white tracking-tight">4. 심화: 비즈니스 스케일업</h2>
                  <p className="text-purple-600 font-bold text-lg leading-relaxed max-w-2xl">
                    "실제 서비스 수준으로 끌어올리는 단계"
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    프로덕트를 넘어 실제 사용자 가치를 창출하고 비즈니스로 연결하는 과정을 학습합니다.<br />
                    글로벌 시장 대응과 고도화된 AI 인프라 활용 능력을 완성하세요.
                  </p>
                </div>
              </div>

              {/* Core Topics */}
              <div id="core" className="scroll-mt-32 space-y-6 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400">
                    <Share2 size={24} />
                  </div>
                  <h3 className="text-xl font-black text-slate-800 dark:text-white">핵심 주제 (Common Core)</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: "배포 전략 (로컬 → 글로벌)", desc: "국내 에지 런타임을 넘어 글로벌 CDN과 멀티 리전 배포 전략" },
                    { title: "고급 도메인 & 메일 보안", desc: "멀티도메인 운영, HTTPS 보안 고도화 및 이메일 발송 안정화" },
                    { title: "성능 & 비용 최적화", desc: "API 호출 비용을 줄이고 사용자 경험을 개선하는 성능 튜닝" },
                    { title: "유지보수 (에이전트 자동화)", desc: "AI 에이전트를 활용한 로그 모니터링 및 자동 오류 대응" },
                    { title: "확장 구조 설계", desc: "트래픽 증가에 대응하는 마이크로 서비스 및 서버리스 아키텍처" },
                    { title: "협업/버전 관리 개념", desc: "프로페셔널한 팀 협업을 위한 Git Flow 및 CI/CD 파이프라인" },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-slate-50 dark:bg-white/5 p-5 rounded-2xl border border-slate-100 dark:border-white/5 hover:border-purple-500/30 transition-all flex items-start gap-4 group">
                      <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 shrink-0" />
                      <div>
                        <h4 className="text-sm font-bold text-slate-800 dark:text-white mb-1 group-hover:text-purple-600 transition-colors">{item.title}</h4>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Advanced Tracks */}
              <div className="pt-4 border-t border-border text-left">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                    <Crown size={24} />
                  </div>
                  <h3 className="text-xl font-black text-slate-800 dark:text-white">선택형 심화 트랙 (Advanced Focus)</h3>
                </div>
                
                <div className="space-y-12">
                  {/* Track A */}
                  <div id="track-a" className="scroll-mt-32 bg-white dark:bg-slate-900 rounded-3xl border-2 border-purple-100 dark:border-purple-500/20 p-8 space-y-6 hover:border-purple-500 transition-all group shadow-sm">
                    <div className="flex justify-between items-center">
                      <div className="inline-flex bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Track A</div>
                      <PlayCircle className="w-5 h-5 text-purple-500" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-slate-800 dark:text-white mb-2">SaaS 운영 트랙</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">실제 유료 사용자가 있는 서비스를 운영하는 노하우를 배웁니다.</p>
                    </div>
                    <ul className="space-y-3 pt-2">
                      <li className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-purple-500" /> 정기 결제 및 PG 연동 실무
                      </li>
                      <li className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-purple-500" /> 사용자 CS 및 서비스 안정성 관리
                      </li>
                    </ul>
                    <button className="w-full py-4 bg-purple-600 text-white font-black rounded-2xl hover:bg-purple-500 transition-all">SaaS 트랙 마스터</button>
                  </div>

                  {/* Track B */}
                  <div id="track-b" className="scroll-mt-32 bg-white dark:bg-slate-900 rounded-3xl border-2 border-amber-100 dark:border-amber-500/20 p-8 space-y-6 hover:border-amber-500 transition-all group shadow-sm">
                    <div className="flex justify-between items-center">
                      <div className="inline-flex bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Track B</div>
                      <TrendingUp className="w-5 h-5 text-amber-500" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-slate-800 dark:text-white mb-2">수익화 트랙</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">자동화 시스템을 통해 지속 가능한 수익 모델을 설계합니다.</p>
                    </div>
                    <ul className="space-y-3 pt-2">
                      <li className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-amber-500" /> 콘텐츠 및 툴 자동 판매 구조 구축
                      </li>
                      <li className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-amber-500" /> 제휴 마케팅 및 광고 자동화 전략
                      </li>
                    </ul>
                    <button className="w-full py-4 bg-amber-600 text-white font-black rounded-2xl hover:bg-amber-500 transition-all">수익화 트랙 마스터</button>
                  </div>

                  {/* Track C */}
                  <div id="track-c" className="scroll-mt-32 bg-white dark:bg-slate-900 rounded-3xl border-2 border-blue-100 dark:border-blue-500/20 p-8 space-y-6 hover:border-blue-500 transition-all group shadow-sm">
                    <div className="flex justify-between items-center">
                      <div className="inline-flex bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Track C</div>
                      <Smartphone className="w-5 h-5 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-slate-800 dark:text-white mb-2">모바일 확장</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">웹 서비스를 모바일 환경으로 이식하여 접근성을 극대화합니다.</p>
                    </div>
                    <ul className="space-y-3 pt-2">
                      <li className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-blue-500" /> 웹뷰(WebView) 기반 하이브리드 앱 제작
                      </li>
                      <li className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-blue-500" /> 푸시 알림 및 모바일 전용 기능 연동
                      </li>
                    </ul>
                    <button className="w-full py-4 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-500 transition-all">모바일 트랙 마스터</button>
                  </div>

                  {/* Track D */}
                  <div id="track-d" className="scroll-mt-32 bg-white dark:bg-slate-900 rounded-3xl border-2 border-emerald-100 dark:border-emerald-500/20 p-8 space-y-6 hover:border-emerald-500 transition-all group shadow-sm">
                    <div className="flex justify-between items-center">
                      <div className="inline-flex bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Track D</div>
                      <Globe className="w-5 h-5 text-emerald-500" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-slate-800 dark:text-white mb-2">글로벌 배포</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">전 세계 사용자를 대상으로 하는 다국어 서비스 인프라를 구축합니다.</p>
                    </div>
                    <ul className="space-y-3 pt-2">
                      <li className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" /> 다국어(i18n) 지원 및 통화 변환 처리
                      </li>
                      <li className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" /> 해외 호스팅 최적화 및 레이턴시 개선
                      </li>
                    </ul>
                    <button className="w-full py-4 bg-emerald-600 text-white font-black rounded-2xl hover:bg-emerald-500 transition-all">글로벌 트랙 마스터</button>
                  </div>

                  {/* Track E */}
                  <div id="track-e" className="scroll-mt-32 bg-white dark:bg-slate-900 rounded-3xl border-2 border-slate-200 dark:border-white/20 p-8 space-y-6 hover:border-primary transition-all group shadow-sm">
                    <div className="flex justify-between items-center">
                      <div className="inline-flex bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Track E</div>
                      <Cpu className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-slate-800 dark:text-white mb-2">고급 AI 활용</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">자체 LLM 활용 및 고성능 AI 인프라(GPU) 활용 구조를 이해합니다.</p>
                    </div>
                    <ul className="space-y-3 pt-2">
                      <li className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-primary" /> 개인 서버 내 LLM 배포 및 튜닝 기초
                      </li>
                      <li className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-primary" /> NVIDIA NIM 및 가속 인프라 연결 전략
                      </li>
                    </ul>
                    <button className="w-full py-4 bg-slate-900 dark:bg-white/20 text-white font-black rounded-2xl hover:bg-primary transition-all">AI 마스터 트랙</button>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="pt-8 border-t border-border flex justify-between">
                <Link href="/curriculum/practice">
                  <button className="bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-200 transition-all">
                    <ArrowRight className="w-4 h-4 rotate-180" /> 3. 실전 단계로
                  </button>
                </Link>
                <div className="text-xs font-bold text-slate-400 italic flex items-center gap-2">
                  <Crown className="w-4 h-4 text-amber-500" /> 모든 단계를 완료하셨습니다!
                </div>
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
      <CheckCircle2 className="w-3 h-3 text-purple-500 mt-0.5 shrink-0 transition-transform group-hover:scale-125" />
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
        active ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/20 scale-105' : 'hover:bg-slate-50 dark:hover:bg-white/5 text-slate-400'
      }`}>
        <span className={`text-xs font-black ${active ? 'text-white' : 'text-slate-400'}`}>{label}</span>
        <span className={`text-[10px] whitespace-nowrap ${active ? 'text-purple-200' : 'text-slate-400'}`}>{rounds}</span>
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
          ? 'bg-purple-600/10 border-r-4 border-purple-600' 
          : 'hover:bg-slate-50 dark:hover:bg-white/5'
      } ${isSubItem ? 'pl-9 py-2.5' : ''}`}
    >
      <span className={`font-bold transition-colors ${
        isSubItem ? 'text-[11px]' : 'text-xs'
      } ${
        active ? 'text-purple-600' : 'text-slate-600 dark:text-slate-400'
      }`}>
        {title}
      </span>
      {active && !isSubItem && <div className="w-1.5 h-1.5 rounded-full bg-purple-600" />}
      {active && isSubItem && <div className="w-1 h-1 rounded-full bg-purple-600/60" />}
    </div>
  );
}
