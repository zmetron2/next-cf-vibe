'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Code2, ArrowRight, Zap, Cloud, ChevronRight, BookOpen, Laptop, Target, Rocket, Users, ShieldCheck,
  Brain, MessageSquare, Layout, Lock, Globe, AlertTriangle, CheckSquare, PlayCircle, Eye, HelpCircle, 
  X, Plus, Minus, Database, Server, Monitor, Compass, Terminal, Link2, Key, EyeOff, ShieldAlert, 
  FileCode, Phone, Share2, Layers, AlertCircle, CheckCircle2, RefreshCcw, Trophy, Mail, Smile, Flag, Sparkles, Copy, Check
} from 'lucide-react';

export default function GuidePage() {
  const [activeMenu, setActiveMenu] = useState('시작하기');
  const [checks, setChecks] = useState<Record<string, boolean>>({});
  const [copied, setCopied] = useState(false);

  // 메뉴 변경 시 상단으로 스크롤
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeMenu]);

  const toggleCheck = (id: string) => {
    setChecks(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const MENU_ITEMS = [
    { label: '시작하기', icon: Rocket, desc: '바이브 코딩의 여정을 시작합니다.' },
    { label: 'AI 이해', icon: Brain, desc: '인공지능과 협업하는 마인드셋을 배웁니다.' },
    { label: '요청하는 법', icon: MessageSquare, desc: 'AI가 정확히 이해하도록 프롬프트를 작성합니다.' },
    { label: '웹/앱 구조', icon: Layout, desc: '서비스가 돌아가는 시스템 구조를 파헤칩니다.' },
    { label: '개발 환경', icon: Laptop, desc: '효율적인 코딩을 위한 최적의 도구를 세팅합니다.' },
    { label: '보안 기초', icon: Lock, desc: '내 소중한 데이터와 서비스를 안전하게 보호합니다.' },
    { label: '도메인 기초', icon: Globe, desc: '인터넷상의 주소인 도메인을 이해하고 연결합니다.' },
    { label: '실수 모음', icon: AlertTriangle, desc: '초보자가 자주 겪는 함정들을 미리 피합니다.' },
    { label: '준비 체크', icon: CheckSquare, desc: '실전 프로젝트 시작 전 최종 점검을 수행합니다.' },
    { label: '빠른 체험', icon: PlayCircle, desc: '5분 만에 결과물을 만들어보는 실전 체험입니다.' }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans transition-colors selection:bg-indigo-100 selection:text-indigo-900">

      {/* --- Header Area --- */}
      <header className="relative py-16 md:py-24 px-6 overflow-hidden border-b border-slate-200 dark:border-white/5">
        <div className="absolute inset-0 bg-slate-50 dark:bg-[#0b0f1a] -z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.08),transparent_50%)] -z-10" />
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="space-y-6 flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-black uppercase tracking-widest">
              <BookOpen className="w-3 h-3" /> Step-by-Step Learning
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight tracking-tighter">
              코딩의 첫 단추,<br />
              <span className="text-indigo-600">사전 학습 코스</span>
            </h1>
            <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto lg:mx-0 leading-relaxed text-sm md:text-base font-medium">
              실무 코딩을 시작하기 전, 기초 체력을 다지는 필수 과정입니다.
            </p>
          </div>
          <div className="flex-1 w-full max-w-lg">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-white/50 dark:bg-slate-900/40 backdrop-blur-xl rounded-3xl border border-white dark:border-white/5 shadow-2xl shadow-indigo-500/5">
              <StatusCard icon={Target} label="학습 현황" count="In Progress" color="text-indigo-500" isText />
              <StatusCard icon={Brain} label="학습 단계" count="10" color="text-blue-500" />
              <StatusCard icon={Zap} label="난이도" count="Easy" color="text-emerald-500" isText />
              <StatusCard icon={Users} label="수강생" count="1.2K" color="text-amber-500" isText />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto w-full px-6 py-12 flex flex-col lg:flex-row gap-10">
        
        {/* Sidebar Menu */}
        <aside className="lg:w-72 shrink-0">
          <div className="sticky top-24 space-y-6">
            <div className="bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-white/10 p-5 space-y-5 shadow-sm">
              <h3 className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] px-2">Curriculum</h3>
              <div className="space-y-1">
                {MENU_ITEMS.map((item) => (
                  <SidebarItem 
                    key={item.label}
                    label={item.label}
                    icon={item.icon}
                    active={activeMenu === item.label}
                    onClick={() => setActiveMenu(item.label)}
                  />
                ))}
              </div>
            </div>
            
            <Link href="/faq" className="bg-indigo-600 rounded-2xl p-6 space-y-4 shadow-xl shadow-indigo-600/20 text-white relative overflow-hidden group block text-center transition-transform hover:-translate-y-1">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform"><HelpCircle className="w-12 h-12" /></div>
              <h3 className="text-xs font-black uppercase tracking-wider mb-2 text-white">도움이 필요하신가요?</h3>
              <div className="w-full bg-white text-indigo-600 py-3 rounded-xl text-xs font-black hover:bg-indigo-50 transition-all flex items-center justify-center gap-2 shadow-lg">FAQ 보러가기 <ArrowRight className="w-3.5 h-3.5" /></div>
            </Link>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 space-y-24 min-w-0 pb-32">
          
          {/* 1. 시작하기 */}
          {activeMenu === '시작하기' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-20">
              <section className="space-y-8">
                <div className="space-y-2 text-center md:text-left">
                  <span className="text-xs font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-[0.2em]">01. Introduction</span>
                  <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">이 강의는 무엇인가</h2>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-white/10 p-8 md:p-12 shadow-xl shadow-indigo-500/5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-5"><Zap className="w-40 h-40 text-indigo-600" /></div>
                  <div className="relative z-10 space-y-8">
                    <p className="text-xl md:text-2xl font-black text-slate-800 dark:text-white leading-tight">
                      👉 코딩을 배우는 강의가 아니라, <span className="text-indigo-600">AI를 활용해 결과물을 만드는 법</span>을 배우는 과정입니다.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                      <HighlightCard icon={MessageSquare} title="지시하는 능력" desc="문법보다 중요한 것은 명확한 지시입니다." />
                      <HighlightCard icon={Rocket} title="반복과 개선" desc="빠르게 만들고 반복하며 완성도를 높입니다." />
                      <HighlightCard icon={CheckSquare} title="동작하는 결과" desc="완벽한 이해보다 돌아가는 코드가 먼저입니다." />
                    </div>
                  </div>
                </div>
              </section>

              <section className="space-y-8">
                <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">이렇게 배우게 됩니다</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-slate-50 dark:bg-white/5 p-8 rounded-3xl border border-slate-100 dark:border-white/10 text-center space-y-4">
                    <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center mx-auto shadow-sm text-indigo-600 font-black">1</div>
                    <p className="text-sm font-black dark:text-white leading-relaxed">설명 → 바로 실습 → 결과 확인<br/><span className="text-xs text-slate-500">이론보다 경험 중심</span></p>
                  </div>
                  <div className="bg-slate-50 dark:bg-white/5 p-8 rounded-3xl border border-slate-100 dark:border-white/10 text-center space-y-4">
                    <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center mx-auto shadow-sm text-indigo-600 font-black">2</div>
                    <p className="text-sm font-black dark:text-white leading-relaxed">이론 최소, 결과 중심<br/><span className="text-xs text-slate-500">최소한의 기본기로 최대 결과</span></p>
                  </div>
                  <div className="bg-slate-50 dark:bg-white/5 p-8 rounded-3xl border border-slate-100 dark:border-white/10 text-center space-y-4">
                    <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center mx-auto shadow-sm text-indigo-600 font-black">3</div>
                    <p className="text-sm font-black dark:text-white leading-relaxed">반복을 통한 정확도 향상<br/><span className="text-xs text-slate-500">점진적 완성도 향상</span></p>
                  </div>
                </div>
                <p className="text-center font-black text-indigo-600 uppercase tracking-widest text-xs">“보고 이해 → 바로 만들기 → 다시 개선”</p>
              </section>

              <section className="space-y-8">
                <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">꼭 알고 시작하세요 (기대치 조정)</h2>
                <div className="bg-amber-50 dark:bg-amber-500/10 rounded-3xl border border-amber-100 dark:border-amber-500/20 p-8 md:p-10 space-y-6">
                  <div className="flex items-center gap-3 text-amber-600">
                    <AlertCircle className="w-6 h-6" />
                    <span className="text-lg font-black tracking-tight">AI 협업 마인드셋</span>
                  </div>
                  <ul className="space-y-4 text-slate-700 dark:text-slate-300 font-bold text-sm md:text-base">
                    <li className="flex gap-3"><span>•</span> AI는 완벽하지 않습니다. 비서라고 생각하세요.</li>
                    <li className="flex gap-3"><span>•</span> 한 번에 원하는 결과가 나오지 않을 수 있습니다. 당연한 과정입니다.</li>
                    <li className="flex gap-3"><span>•</span> 결국 결과는 “어떻게 요청하느냐”에 따라 달라집니다.</li>
                  </ul>
                  <div className="pt-4 border-t border-amber-200 dark:border-amber-500/20">
                    <p className="text-center font-black text-amber-700 dark:text-amber-400 uppercase tracking-[0.2em]">👉 문법보다 대화가 중요합니다</p>
                  </div>
                </div>
              </section>

              <section className="text-center pt-10">
                <button onClick={() => setActiveMenu('AI 이해')} className="group bg-indigo-600 hover:bg-indigo-500 text-white px-10 py-5 rounded-2xl font-black text-lg shadow-2xl transition-all hover:-translate-y-1 flex items-center gap-4 mx-auto">
                  다음 단계: AI 이해하기 <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </button>
              </section>
            </div>
          )}

          {/* 2. AI 이해 */}
          {activeMenu === 'AI 이해' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-20">
              <section className="space-y-8">
                <div className="space-y-2 text-center md:text-left">
                  <span className="text-xs font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-[0.2em]">02. Understanding AI</span>
                  <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">AI는 무엇인가</h2>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-white/10 p-8 md:p-12 shadow-xl shadow-indigo-500/5">
                  <p className="text-xl md:text-2xl font-black text-slate-800 dark:text-white leading-tight mb-8">
                    👉 AI는 생각하는 존재가 아니라, <span className="text-indigo-600">“패턴을 예측해서 답을 만드는 시스템”</span>입니다.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <HighlightCard icon={Brain} title="그럴듯한 답 생성" desc="질문을 이해하는 것이 아니라, 문맥상 가장 확률 높은 답을 만듭니다." />
                    <HighlightCard icon={Target} title="확률적 출력" desc="정답이 아니라 “확률적으로 가장 맞는 답”을 선택하여 출력합니다." />
                    <HighlightCard icon={Zap} title="입력값의 중요성" desc="입력(질문)이 조금만 바뀌어도 결과는 크게 달라집니다." />
                  </div>
                </div>
              </section>

              <section className="space-y-8">
                <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">AI는 이렇게 동작합니다 (워크플로우)</h2>
                <div className="bg-slate-50 dark:bg-white/5 p-10 rounded-3xl border border-slate-100 dark:border-white/10 overflow-hidden">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                    <ProcessStep step="입력" desc="사용자의 요청(프롬프트)" />
                    <ArrowRight className="hidden md:block w-6 h-6 text-slate-300" />
                    <ProcessStep step="해석" desc="문맥과 패턴 분석" />
                    <ArrowRight className="hidden md:block w-6 h-6 text-slate-300" />
                    <ProcessStep step="생성" desc="가장 적절한 답 구성" />
                    <ArrowRight className="hidden md:block w-6 h-6 text-slate-300" />
                    <ProcessStep step="출력" desc="결과 제공" />
                  </div>
                </div>
                <p className="text-center font-black text-indigo-600 uppercase tracking-widest text-xs pt-4">“어떻게 말하느냐”에 따라 결과가 달라집니다</p>
              </section>

              <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-emerald-50 dark:bg-emerald-500/5 rounded-3xl p-8 border border-emerald-100 dark:border-emerald-500/20 space-y-6">
                  <h3 className="text-lg font-black text-emerald-600 flex items-center gap-2"><CheckCircle2 className="w-5 h-5" /> AI가 잘하는 것</h3>
                  <ul className="space-y-4 text-sm font-bold text-slate-700 dark:text-slate-300">
                    <li>• 반복적이고 정형화된 작업</li>
                    <li>• 방대한 데이터를 기반으로 한 패턴 생성</li>
                    <li>• 코드 작성, 문서 요약, 번역</li>
                    <li>• 빠른 초안 도출 (속도)</li>
                  </ul>
                  <p className="text-xs font-black text-emerald-600 uppercase tracking-widest pt-2">👉 속도 + 반복 + 정리 = AI의 강점</p>
                </div>
                <div className="bg-rose-50 dark:bg-rose-500/5 rounded-3xl p-8 border border-rose-100 dark:border-rose-500/20 space-y-6">
                  <h3 className="text-lg font-black text-rose-600 flex items-center gap-2"><AlertCircle className="w-5 h-5" /> AI가 약한 것</h3>
                  <ul className="space-y-4 text-sm font-bold text-slate-700 dark:text-slate-300">
                    <li>• 아주 애매하고 모호한 지시 (기준 없음)</li>
                    <li>• 최신 정보 반영 (데이터 학습 시점 한계)</li>
                    <li>• 복잡한 논리 구조를 한 번에 해결하기</li>
                    <li>• 아주 세밀한 디자인/의도 반영</li>
                  </ul>
                  <p className="text-xs font-black text-rose-600 uppercase tracking-widest pt-2">👉 모호함 + 최신성 + 복잡성 = 주의 필요</p>
                </div>
              </section>

              <section className="text-center py-10 bg-indigo-600 rounded-3xl text-white shadow-2xl">
                <p className="text-xl md:text-2xl font-black mb-4">“AI는 마법이 아니라 도구입니다”</p>
                <p className="text-xs md:text-sm font-medium opacity-80 mb-8 uppercase tracking-[0.3em]">사용자가 지휘자가 되어야 합니다</p>
                <button onClick={() => setActiveMenu('요청하는 법')} className="group bg-white text-indigo-600 px-10 py-5 rounded-2xl font-black text-lg shadow-xl transition-all hover:bg-slate-50 active:scale-95 flex items-center gap-4 mx-auto">
                  다음 단계: 요청하는 법 배우기 <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </button>
              </section>
            </div>
          )}

          {/* 3. 요청하는 법 */}
          {activeMenu === '요청하는 법' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-20">
              <section className="space-y-8">
                <div className="space-y-2 text-center md:text-left">
                  <span className="text-xs font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-[0.2em]">03. Prompting Basics</span>
                  <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">왜 요청이 중요한가</h2>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-white/10 p-8 md:p-12 shadow-xl shadow-indigo-500/5">
                  <p className="text-xl md:text-2xl font-black text-slate-800 dark:text-white leading-tight">
                    👉 결과의 품질은 <span className="text-indigo-600 text-3xl">요청의 품질</span>로 결정됩니다.
                  </p>
                  <p className="text-sm font-medium text-slate-500 mt-6 leading-relaxed">
                    같은 AI라도 요청 방식에 따라 결과는 천차만별입니다. 코딩 문제의 90%는 AI의 능력이 아니라 사용자의 "요청 방식"에서 시작됩니다.
                  </p>
                </div>
              </section>

              <section className="space-y-8">
                <h2 className="text-3xl font-black">좋은 요청 vs 나쁜 요청 (OX 비교)</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-rose-50 dark:bg-rose-500/5 rounded-3xl p-8 border border-rose-100 dark:border-rose-500/10 space-y-4">
                    <p className="text-xs font-black text-rose-500 uppercase tracking-widest">❌ 나쁜 요청 (모호함)</p>
                    <p className="text-lg font-bold italic opacity-70">“로그인 기능 만들어줘”</p>
                    <p className="text-xs text-slate-400 font-medium pt-2 leading-relaxed">→ 어떤 기술을 쓸지, 어떤 디자인일지, 어떤 데이터가 필요할지 AI가 추측해야 합니다. 결과가 중구난방일 확률이 높습니다.</p>
                  </div>
                  <div className="bg-emerald-50 dark:bg-emerald-500/5 rounded-3xl p-8 border border-emerald-100 dark:border-emerald-500/10 space-y-4">
                    <p className="text-xs font-black text-emerald-500 uppercase tracking-widest">⭕ 좋은 요청 (구체적)</p>
                    <p className="text-lg font-bold leading-tight">“이메일/비밀번호 로그인 기능을 만들어줘. React 기반, 간단한 UI 포함, 에러 메시지 표시까지 구현해줘.”</p>
                    <p className="text-xs text-emerald-700/60 dark:text-emerald-300/40 font-medium pt-2 leading-relaxed">→ AI에게 명확한 가이드라인을 제시했습니다. 한 번에 원하는 결과가 나올 확률이 비약적으로 올라갑니다.</p>
                  </div>
                </div>
                <p className="text-center font-black text-indigo-600 uppercase tracking-widest text-xs">“애매하면 틀리고, 구체적이면 맞는다”</p>
              </section>

              <section className="space-y-8">
                <h2 className="text-3xl font-black">요청의 골든 공식 (3요소)</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <StructureCard num="1" title="역할 (Role)" desc="AI에게 전문적인 역할을 부여하세요." example="프론트엔드 개발자처럼" />
                  <StructureCard num="2" title="목표 (Goal)" desc="무엇을 만들지 아주 명확히 정의하세요." example="로그인 페이지 UI 구현" />
                  <StructureCard num="3" title="조건 (Constraint)" desc="기술 스택, 스타일, 한계 등을 명시하세요." example="React 사용, 모바일 대응" />
                </div>
                <div className="bg-indigo-600 rounded-3xl p-12 text-center text-white shadow-2xl shadow-indigo-600/30">
                  <p className="text-2xl md:text-3xl font-black mb-4">역할 + 목표 + 조건 = <span className="text-amber-300 underline underline-offset-8">완벽한 지시</span></p>
                  <p className="text-xs font-black opacity-70 uppercase tracking-[0.3em]">지휘자의 언어를 배우세요</p>
                </div>
              </section>

              <section className="text-center py-10">
                <button onClick={() => setActiveMenu('웹/앱 구조')} className="group bg-indigo-600 hover:bg-indigo-500 text-white px-10 py-5 rounded-2xl font-black text-lg shadow-2xl transition-all hover:-translate-y-1 flex items-center gap-4 mx-auto">
                  다음 단계: 웹/앱 구조 파헤치기 <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </button>
              </section>
            </div>
          )}

          {/* 4. 웹/앱 구조 */}
          {activeMenu === '웹/앱 구조' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-20">
              <section className="space-y-8">
                <div className="space-y-2 text-center md:text-left">
                  <span className="text-xs font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-[0.2em]">04. Architecture</span>
                  <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">웹/앱은 어떻게 동작할까</h2>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-white/10 p-8 md:p-12 shadow-xl shadow-indigo-500/5">
                  <p className="text-xl md:text-2xl font-black text-slate-800 dark:text-white leading-tight mb-8">
                    👉 사용자의 요청이 <span className="text-indigo-600">서버를 거쳐 다시 화면으로</span> 돌아오는 구조입니다.
                  </p>
                  <div className="bg-slate-50 dark:bg-white/5 p-10 rounded-3xl border border-slate-100 dark:border-white/10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                      <ProcessStep step="사용자" desc="클릭 / 입력" />
                      <ArrowRight className="hidden md:block w-6 h-6 text-slate-300" />
                      <ProcessStep step="서버" desc="요청 처리" />
                      <ArrowRight className="hidden md:block w-6 h-6 text-slate-300" />
                      <ProcessStep step="데이터" desc="저장 / 조회" />
                      <ArrowRight className="hidden md:block w-6 h-6 text-slate-300" />
                      <ProcessStep step="결과" desc="화면에 표시" />
                    </div>
                  </div>
                </div>
              </section>

              <section className="space-y-8">
                <h2 className="text-3xl font-black">핵심 3요소 (이것만 알면 충분)</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-white/10 space-y-4 hover:border-indigo-500 transition-colors group text-center">
                    <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-500/10 rounded-2xl flex items-center justify-center mx-auto text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all"><Monitor className="w-7 h-7" /></div>
                    <h4 className="text-lg font-black tracking-tight">1. 클라이언트 (Frontend)</h4>
                    <p className="text-xs text-slate-500 font-bold leading-relaxed">사용자가 직접 보고 만지는 화면.<br/>버튼, 입력창, 디자인 요소 전체.</p>
                  </div>
                  <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-white/10 space-y-4 hover:border-indigo-500 transition-colors group text-center">
                    <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-500/10 rounded-2xl flex items-center justify-center mx-auto text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all"><Server className="w-7 h-7" /></div>
                    <h4 className="text-lg font-black tracking-tight">2. 서버 (Backend)</h4>
                    <p className="text-xs text-slate-500 font-bold leading-relaxed">화면 뒤에서 요청을 처리하는 엔진.<br/>로그인 인증, 데이터 계산 기능 수행.</p>
                  </div>
                  <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-white/10 space-y-4 hover:border-indigo-500 transition-colors group text-center">
                    <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-500/10 rounded-2xl flex items-center justify-center mx-auto text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all"><Database className="w-7 h-7" /></div>
                    <h4 className="text-lg font-black tracking-tight">3. 데이터베이스 (DB)</h4>
                    <p className="text-xs text-slate-500 font-bold leading-relaxed">정보가 영구적으로 보관되는 창고.<br/>회원 정보, 게시글 등을 안전하게 저장.</p>
                  </div>
                </div>
                <p className="text-center font-black text-indigo-600 uppercase tracking-widest text-xs pt-4">“화면 / 처리 / 저장 = 서비스의 기본 구조”</p>
              </section>

              <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-white/10 p-10 space-y-6">
                  <h3 className="text-xl font-black text-indigo-600">로그인 과정으로 예시 들어보기</h3>
                  <div className="space-y-4">
                    {[
                      { s: '사용자가 아이디와 비밀번호를 입력합니다.', i: Laptop },
                      { s: '입력된 정보가 서버로 전달됩니다.', i: ArrowRight },
                      { s: '서버가 DB에서 회원 정보를 조회해 비교합니다.', i: Database },
                      { s: '일치하면 성공 결과를 화면에 다시 띄웁니다.', i: Monitor },
                    ].map((step, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-white/5 rounded-2xl">
                        <div className="w-10 h-10 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center shadow-sm text-indigo-600"><step.i className="w-5 h-5" /></div>
                        <p className="text-sm font-bold text-slate-700 dark:text-slate-300">{step.s}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-slate-900 rounded-3xl p-10 space-y-8 text-white relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 p-10 opacity-10"><Brain className="w-48 h-48" /></div>
                  <div className="relative z-10 space-y-6">
                    <h3 className="text-2xl font-black">왜 구조를 알아야 할까?</h3>
                    <div className="space-y-4 opacity-80 font-bold text-sm leading-relaxed">
                      <p>• 문제가 발생했을 때 어디를 고쳐야 할지(화면? 서버? DB?) 정확히 알 수 있습니다.</p>
                      <p>• AI에게 요청할 때 "UI와 서버 로직을 분리해줘"처럼 전문가다운 지시가 가능해집니다.</p>
                      <p>• 기능을 논리적 단계로 나누어 하나씩 정복할 수 있습니다.</p>
                    </div>
                    <div className="pt-6 border-t border-white/10">
                      <p className="text-indigo-400 font-black text-sm uppercase tracking-widest italic">👉 구조를 알면 AI는 훨씬 더 정확하게 동작합니다</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="text-center py-10">
                <button onClick={() => setActiveMenu('개발 환경')} className="group bg-indigo-600 hover:bg-indigo-500 text-white px-10 py-5 rounded-2xl font-black text-lg shadow-2xl transition-all hover:-translate-y-1 flex items-center gap-4 mx-auto">
                  다음 단계: 개발 환경 이해하기 <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </button>
              </section>
            </div>
          )}

          {/* 5. 개발 환경 */}
          {activeMenu === '개발 환경' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-20">
              <section className="space-y-8 text-center md:text-left">
                <div className="space-y-2">
                  <span className="text-xs font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-[0.2em]">05. Environments</span>
                  <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">개발 환경이란?</h2>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-white/10 p-10 md:p-12 shadow-xl shadow-indigo-500/5">
                  <p className="text-xl md:text-2xl font-black text-slate-800 dark:text-white leading-tight mb-8">
                    👉 내가 만든 코드가 <span className="text-indigo-600">“어디에서 실행되는지”</span>를 의미합니다.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm font-bold text-slate-500 leading-relaxed">
                    <p>• 같은 코드라도 실행되는 환경(로컬/서버)에 따라 결과가 달라질 수 있습니다.</p>
                    <p>• 위치에 따라 동작 방식과 설정(API 주소 등)이 완전히 다릅니다.</p>
                  </div>
                </div>
              </section>

              <section className="space-y-8">
                <h2 className="text-3xl font-black">실행되는 위치 3가지</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-white/10 space-y-4 hover:border-indigo-500 transition-colors group text-center">
                    <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-500/10 rounded-2xl flex items-center justify-center mx-auto text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all"><Monitor className="w-7 h-7" /></div>
                    <h4 className="text-lg font-black tracking-tight">1. 로컬 (내 컴퓨터)</h4>
                    <p className="text-xs text-slate-500 font-bold leading-relaxed">개발/테스트 용도.<br/>내 PC에서만 접근 가능.<br/>빠르고 자유로운 수정 가능.</p>
                  </div>
                  <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-white/10 space-y-4 hover:border-indigo-500 transition-colors group text-center">
                    <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-500/10 rounded-2xl flex items-center justify-center mx-auto text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all"><Cloud className="w-7 h-7" /></div>
                    <h4 className="text-lg font-black tracking-tight">2. 서버 (클라우드)</h4>
                    <p className="text-xs text-slate-500 font-bold leading-relaxed">인터넷상의 전용 컴퓨터.<br/>전 세계 사용자가 접속 가능.<br/>실제 서비스가 이루어지는 곳.</p>
                  </div>
                  <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-white/10 space-y-4 hover:border-indigo-500 transition-colors group text-center">
                    <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-500/10 rounded-2xl flex items-center justify-center mx-auto text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all"><Compass className="w-7 h-7" /></div>
                    <h4 className="text-lg font-black tracking-tight">3. 브라우저 (사용자)</h4>
                    <p className="text-xs text-slate-500 font-bold leading-relaxed">사용자가 직접 보는 화면.<br/>크롬, 사파리 등 환경.<br/>프론트엔드 코드가 도달하는 최종지.</p>
                  </div>
                </div>
                <p className="text-center font-black text-indigo-600 uppercase tracking-widest text-xs pt-4">“내 컴퓨터 → 인터넷 서버 → 사용자 화면”</p>
              </section>

              <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-rose-50 dark:bg-rose-500/5 rounded-3xl p-10 border border-rose-100 dark:border-rose-500/10 space-y-6">
                  <div className="flex items-center gap-3 text-rose-500 font-black">
                    <AlertTriangle className="w-6 h-6" />
                    <span>가장 많이 겪는 상황</span>
                  </div>
                  <p className="text-lg font-black leading-tight italic opacity-70">“내 컴퓨터에서는 잘 되는데 왜 배포하면 안 되지?”</p>
                  <div className="space-y-3 pt-4 border-t border-rose-200">
                    <p className="text-xs font-bold text-rose-800/60 dark:text-rose-300/60">주요 원인:</p>
                    <ul className="text-xs text-rose-700/80 dark:text-rose-300/50 space-y-2 font-medium">
                      <li>• 로컬과 서버의 실행 환경(OS, Node 버전) 차이</li>
                      <li>• 환경변수(.env) 설정 누락 혹은 잘못된 주소값</li>
                      <li>• 파일 경로 인식 차이 및 권한 문제</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-indigo-600 rounded-3xl p-10 text-white shadow-2xl space-y-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-10"><Terminal className="w-40 h-40" /></div>
                  <h3 className="text-2xl font-black relative z-10">AI와 환경의 관계</h3>
                  <p className="text-base font-bold relative z-10 leading-relaxed opacity-90">
                    환경을 명시하지 않으면 AI는 최적의 코드를 줄 수 없습니다. <br/><br/>
                    <span className="text-amber-300">❌ “서버 만들어줘”</span> (추측 기반)<br/>
                    <span className="text-emerald-300">⭕ “Node.js 서버를 로컬에서 실행하고 싶어. 이후 클라우드에 배포할 예정이야.”</span> (환경 맞춤형)
                  </p>
                  <p className="text-xs font-black uppercase tracking-widest opacity-60 relative z-10 italic pt-4">👉 환경을 알면 결과물의 안정성이 올라갑니다</p>
                </div>
              </section>

              <section className="space-y-8">
                <h2 className="text-xl font-black text-center uppercase tracking-[0.2em]">꼭 기억할 필수 개념</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <ConceptCard icon={Terminal} title="포트 (Port)" desc="localhost:3000 같은 전용 통로" />
                  <ConceptCard icon={Link2} title="URL" desc="인터넷상의 접속 주소 이름" />
                  <ConceptCard icon={Key} title="환경변수 (.env)" desc="보안 및 환경별 설정 정보" />
                  <ConceptCard icon={Lock} title="API 키" desc="외부 서비스 사용 인증 열쇠" />
                </div>
              </section>

              <section className="text-center py-10">
                <div className="max-w-md mx-auto space-y-6">
                  <h2 className="text-3xl font-black text-slate-900 dark:text-white leading-tight">
                    문제의 절반은 코드가 아니라,<br/>
                    👉 <span className="text-indigo-600">“환경”</span>에서 발생합니다.
                  </h2>
                  <button onClick={() => setActiveMenu('보안 기초')} className="group bg-indigo-600 hover:bg-indigo-500 text-white px-10 py-5 rounded-2xl font-black text-lg shadow-2xl transition-all hover:-translate-y-1 flex items-center gap-4 mx-auto">
                    다음 단계: 보안 기초 배우기 <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </section>
            </div>
          )}

          {/* 6. 보안 기초 */}
          {activeMenu === '보안 기초' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-20">
              <section className="space-y-8 text-center md:text-left">
                <div className="space-y-2">
                  <span className="text-xs font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-[0.2em]">06. Security Basics</span>
                  <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">왜 보안이 중요한가</h2>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-white/10 p-10 shadow-xl shadow-indigo-500/5">
                  <p className="text-xl md:text-2xl font-black text-slate-800 dark:text-white leading-tight mb-8">
                    👉 보안은 선택이 아니라 <span className="text-indigo-600">기본</span>입니다.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <HighlightCard icon={ShieldAlert} title="데이터 노출 위험" desc="API 키, 사용자 정보가 외부에 노출되면 돌이킬 수 없습니다." />
                    <HighlightCard icon={Zap} title="비용 폭탄 주의" desc="노출된 API 키로 인해 막대한 사용료가 청구될 수 있습니다." />
                    <HighlightCard icon={AlertTriangle} title="실수가 사고로" desc="작은 코드 실수 하나가 서비스 전체의 위협이 됩니다." />
                  </div>
                </div>
              </section>

              <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-rose-50 dark:bg-rose-500/5 rounded-3xl p-10 border border-rose-100 dark:border-rose-500/20 space-y-6">
                  <h3 className="text-lg font-black text-rose-600 flex items-center gap-2"><AlertTriangle className="w-5 h-5" /> 가장 많이 하는 실수</h3>
                  <ul className="space-y-4 text-sm font-bold text-slate-700 dark:text-slate-300">
                    <li className="flex gap-2"><span>•</span> API 키를 소스코드에 그대로 작성 (하드코딩)</li>
                    <li className="flex gap-2"><span>•</span> API 키가 포함된 코드를 GitHub 등에 그대로 업로드</li>
                    <li className="flex gap-2"><span>•</span> 누구나 볼 수 있는 곳(메모, 주석)에 정보 노출</li>
                  </ul>
                  <p className="text-xs font-black text-rose-500 uppercase tracking-widest pt-4">👉 반드시 공감하고 피해야 할 함정</p>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-3xl p-10 border border-slate-200 dark:border-white/10 space-y-6 shadow-sm">
                  <h3 className="text-lg font-black text-indigo-600 flex items-center gap-2"><Key className="w-5 h-5" /> API 키란 무엇인가?</h3>
                  <p className="text-xl font-black text-slate-800 dark:text-white leading-snug">
                    👉 서비스에 접근할 수 있는 <span className="text-indigo-600 text-2xl italic underline decoration-indigo-200 underline-offset-4">“비밀번호”</span>입니다.
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed font-bold">
                    외부 서비스(OpenAI, Google 등)를 이용할 때 나임을 증명하는 열쇠입니다. 노출되면 누구나 내 지갑을 쓸 수 있는 것과 같습니다.
                  </p>
                </div>
              </section>

              <section className="bg-slate-900 rounded-3xl p-12 text-white space-y-10 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-12 opacity-5 rotate-12"><ShieldAlert className="w-48 h-48" /></div>
                <h2 className="text-2xl font-black text-rose-500 flex items-center gap-3 relative z-10 uppercase tracking-tighter">
                  <Lock className="w-8 h-8" /> 절대 하면 안 되는 것 (Danger Zone)
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                  <div className="p-8 bg-white/5 border border-white/10 rounded-2xl text-center space-y-3 hover:bg-rose-500/10 transition-colors cursor-default">
                    <span className="text-3xl">❌</span>
                    <p className="text-sm font-black uppercase tracking-widest">코드 직접 입력</p>
                  </div>
                  <div className="p-8 bg-white/5 border border-white/10 rounded-2xl text-center space-y-3 hover:bg-rose-500/10 transition-colors cursor-default">
                    <span className="text-3xl">❌</span>
                    <p className="text-sm font-black uppercase tracking-widest">공개 저장소 업로드</p>
                  </div>
                  <div className="p-8 bg-white/5 border border-white/10 rounded-2xl text-center space-y-3 hover:bg-rose-500/10 transition-colors cursor-default">
                    <span className="text-3xl">❌</span>
                    <p className="text-sm font-black uppercase tracking-widest">타인과 키 공유</p>
                  </div>
                </div>
              </section>

              <section className="space-y-8">
                <h2 className="text-xl font-black text-slate-900 dark:text-white">안전하게 사용하는 표준 방식 (.env)</h2>
                <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-white/10 p-10 space-y-8 shadow-sm">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex-1 space-y-4">
                      <h4 className="text-lg font-black flex items-center gap-2 text-emerald-600"><CheckCircle2 className="w-6 h-6" /> 환경변수 사용하기</h4>
                      <p className="text-sm font-bold text-slate-500 leading-relaxed">중요한 보안 정보는 소스코드와 분리하여 별도의 <span className="text-indigo-600">.env</span> 파일에서 관리합니다.</p>
                    </div>
                    <div className="flex-1 w-full bg-slate-900 rounded-2xl p-6 font-mono text-sm text-indigo-300 shadow-xl border border-white/5">
                      <p className="text-slate-500 text-xs mb-3 uppercase tracking-[0.2em] italic font-sans"># .env 파일 예시</p>
                      <p>API_KEY=<span className="text-amber-300">sk-secret-ai-key-1234</span></p>
                      <p>DB_PASSWORD=<span className="text-amber-300">my-very-strong-pass</span></p>
                    </div>
                  </div>
                  <p className="text-center font-black text-slate-700 dark:text-slate-300 uppercase tracking-widest text-xs pt-4">👉 코드에서는 직접 쓰지 않고 <span className="text-indigo-600 underline underline-offset-4 decoration-2">불러서</span> 사용합니다</p>
                </div>
              </section>

              <section className="bg-amber-50 dark:bg-amber-500/10 rounded-3xl p-10 border border-amber-100 dark:border-amber-500/20 space-y-8">
                <div className="flex items-center gap-3 text-amber-600"><Brain className="w-7 h-7" /><h2 className="text-xl font-black">AI 협업 보안 가이드</h2></div>
                <p className="text-lg font-black text-slate-800 dark:text-slate-200 leading-tight">👉 <span className="text-amber-600 underline underline-offset-4 decoration-2">AI에게도 민감한 정보는 주지 마세요.</span></p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-amber-800/70 dark:text-amber-200/50 font-bold leading-relaxed">
                  <div className="p-4 bg-white/50 dark:bg-black/20 rounded-xl border border-amber-200/50 flex flex-col gap-2"><span className="text-amber-500">•</span> 프롬프트에 API 키 직접 노출 금지</div>
                  <div className="p-4 bg-white/50 dark:bg-black/20 rounded-xl border border-amber-200/50 flex flex-col gap-2"><span className="text-amber-500">•</span> 실명, 연락처 등 개인정보 입력 주의</div>
                  <div className="p-4 bg-white/50 dark:bg-black/20 rounded-xl border border-amber-200/50 flex flex-col gap-2"><span className="text-amber-500">•</span> 실제 데이터 대신 가상의 테스트 데이터 사용</div>
                </div>
              </section>

              <section className="text-center py-10">
                <div className="max-w-md mx-auto space-y-6">
                  <h2 className="text-3xl font-black text-slate-900 dark:text-white leading-tight">
                    개발 실력보다 먼저 필요한 건,<br/>
                    👉 <span className="text-indigo-600">“안전하게 만드는 습관”</span>입니다.
                  </h2>
                  <button onClick={() => setActiveMenu('도메인 기초')} className="group bg-indigo-600 hover:bg-indigo-500 text-white px-10 py-5 rounded-2xl font-black text-lg shadow-2xl transition-all hover:-translate-y-1 flex items-center gap-4 mx-auto">
                    다음 단계: 도메인 이해하기 <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </section>
            </div>
          )}

          {/* 7. 도메인 기초 */}
          {activeMenu === '도메인 기초' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-20">
              <section className="space-y-8 text-center md:text-left">
                <div className="space-y-2">
                  <span className="text-xs font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-[0.2em]">07. Domain & DNS</span>
                  <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">도메인이란?</h2>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-white/10 p-10 md:p-12 shadow-xl shadow-indigo-500/5">
                  <p className="text-xl md:text-2xl font-black text-slate-800 dark:text-white leading-tight mb-8">
                    👉 웹사이트의 <span className="text-indigo-600">“주소 이름”</span>입니다.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm font-bold text-slate-500 leading-relaxed">
                    <p>• 사람이 기억하기 쉽게 문자로 만든 주소입니다. (예: google.com, naver.com)</p>
                    <p>• 실제로는 복잡한 숫자로 된 서버의 위치(IP 주소)를 가리킵니다.</p>
                  </div>
                </div>
              </section>

              <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-slate-900 rounded-3xl p-10 border border-slate-200 dark:border-white/10 space-y-6 shadow-sm">
                  <h3 className="text-lg font-black text-indigo-600 flex items-center gap-2"><Share2 className="w-6 h-6" /> DNS란?</h3>
                  <p className="text-xl font-black text-slate-800 dark:text-white leading-tight mb-4">
                    👉 도메인을 실제 <span className="text-indigo-600 text-2xl underline underline-offset-8 decoration-2 decoration-indigo-200">서버 주소(IP)</span>로 바꿔주는 시스템입니다.
                  </p>
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-500/5 rounded-3xl p-10 border border-indigo-100 dark:border-indigo-500/10 space-y-6">
                  <h3 className="text-xs font-black text-indigo-600 uppercase tracking-[0.2em] flex items-center gap-2"><Phone className="w-5 h-5" /> 쉽게 이해하기 (전화번호부 비유)</h3>
                  <div className="space-y-4 text-sm font-black text-slate-700 dark:text-slate-300 leading-relaxed">
                    <p>• 도메인 = 연락처 이름 (홍길동)</p>
                    <p>• 서버 주소(IP) = 실제 전화번호 (010-1234-5678)</p>
                    <p>• DNS = 이름을 번호로 바꿔주는 <span className="text-indigo-600 underline underline-offset-4">연락처 앱 자체</span></p>
                  </div>
                </div>
              </section>

              <section className="space-y-8">
                <h2 className="text-3xl font-black text-center">웹사이트 접속 흐름</h2>
                <div className="bg-white dark:bg-slate-900 rounded-3xl p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-200 dark:border-white/10 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500" />
                  <ProcessStep step="1. 주소 입력" desc="사용자가 도메인 입력" />
                  <ArrowRight className="hidden md:block w-6 h-6 text-slate-300" />
                  <ProcessStep step="2. DNS 조회" desc="서버 주소(IP) 찾기" />
                  <ArrowRight className="hidden md:block w-6 h-6 text-slate-300" />
                  <ProcessStep step="3. 서버 연결" desc="서버에 요청 전달" />
                  <ArrowRight className="hidden md:block w-6 h-6 text-slate-300" />
                  <ProcessStep step="4. 결과 표시" desc="웹사이트 화면 출력" />
                </div>
                <p className="text-center font-black text-indigo-600 uppercase tracking-widest text-xs pt-4">“주소 입력 → 서버 찾기 → 결과 보기”</p>
              </section>

              <section className="space-y-8">
                <h2 className="text-xl font-black text-slate-900 dark:text-white">서브도메인이란?</h2>
                <div className="bg-slate-50 dark:bg-white/5 rounded-3xl p-10 border border-slate-100 dark:border-white/10 space-y-8">
                  <p className="text-base font-bold text-slate-500 leading-relaxed text-center">하나의 도메인을 목적이나 기능에 따라 나눠서 사용하는 방식입니다.</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-white/10 space-y-3 shadow-sm hover:shadow-md transition-shadow text-center">
                      <p className="text-xs font-black text-indigo-600 uppercase tracking-widest">Main Site</p>
                      <p className="text-lg font-black text-slate-800 dark:text-white">www.vibe.com</p>
                      <p className="text-xs text-slate-400 font-bold">일반적인 정보 제공 페이지</p>
                    </div>
                    <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-white/10 space-y-3 shadow-sm hover:shadow-md transition-shadow text-center">
                      <p className="text-xs font-black text-indigo-600 uppercase tracking-widest">Backend API</p>
                      <p className="text-lg font-black text-slate-800 dark:text-white">api.vibe.com</p>
                      <p className="text-xs text-slate-400 font-bold">데이터를 처리하는 서버용 주소</p>
                    </div>
                    <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-white/10 space-y-3 shadow-sm hover:shadow-md transition-shadow text-center">
                      <p className="text-xs font-black text-indigo-600 uppercase tracking-widest">Admin Page</p>
                      <p className="text-lg font-black text-slate-800 dark:text-white">admin.vibe.com</p>
                      <p className="text-xs text-slate-400 font-bold">관리자 전용 설정 페이지</p>
                    </div>
                  </div>
                  <p className="text-center font-black text-indigo-600 uppercase tracking-[0.2em] text-xs pt-4">👉 기능별로 효율적인 관리가 가능해집니다</p>
                </div>
              </section>

              <section className="bg-indigo-600 rounded-3xl p-10 text-white shadow-2xl space-y-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10"><Globe className="w-48 h-48" /></div>
                <div className="relative z-10 space-y-6">
                  <h3 className="text-2xl font-black">AI와 도메인의 관계</h3>
                  <p className="text-base font-bold leading-relaxed opacity-90">
                    도메인을 구체적으로 명시하지 않으면 AI는 배포 설정(DNS 설정, SSL 인증 등)을 완벽하게 돕기 어렵습니다. <br/><br/>
                    <span className="text-rose-300">❌ “사이트 만들어줘”</span> (배포 지시 누락)<br/>
                    <span className="text-emerald-300">⭕ “example.com 도메인에 연결해서 웹사이트가 바로 접속 가능하게 만들어줘.”</span> (완벽한 배포 준비)
                  </p>
                </div>
              </section>

              <section className="text-center py-10">
                <div className="max-w-md mx-auto space-y-6">
                  <h2 className="text-3xl font-black text-slate-900 dark:text-white leading-tight">
                    웹사이트를 만든다는 것은<br/>
                    👉 <span className="text-indigo-600">“주소를 만들고 연결하는 것”</span>입니다.
                  </h2>
                  <button onClick={() => setActiveMenu('실수 모음')} className="group bg-indigo-600 hover:bg-indigo-500 text-white px-10 py-5 rounded-2xl font-black text-lg shadow-2xl transition-all hover:-translate-y-1 flex items-center gap-4 mx-auto">
                    다음 단계: 자주 하는 실수 확인하기 <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </section>
            </div>
          )}

          {/* 8. 실수 모음 */}
          {activeMenu === '실수 모음' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-20">
              <section className="space-y-8 text-center md:text-left">
                <div className="space-y-2">
                  <span className="text-xs font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-[0.2em]">08. Avoiding Mistakes</span>
                  <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">왜 자주 실수를 할까</h2>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-white/10 p-10 md:p-12 shadow-xl shadow-indigo-500/5">
                  <p className="text-xl md:text-2xl font-black text-slate-800 dark:text-white leading-tight mb-8">
                    👉 대부분의 문제는 AI가 아니라 <span className="text-indigo-600 text-3xl italic underline decoration-indigo-200 underline-offset-4">“사용 방식”</span>에서 발생합니다.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm font-bold text-slate-500 leading-relaxed text-center">
                    <div className="p-4 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-100">처음이라 기준이 없음</div>
                    <div className="p-4 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-100">어떻게 요청해야 하는지 모름</div>
                    <div className="p-4 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-100">구조 설계 없이 무작정 시작함</div>
                  </div>
                </div>
              </section>

              <section className="space-y-10">
                <h2 className="text-3xl font-black text-slate-900 dark:text-white">가장 많이 하는 실수 TOP 5</h2>
                <div className="space-y-6">
                  <MistakeItem num="1" title="너무 애매하게 말함" bad="“예쁘게 만들어줘”, “좋게 수정해줘”" solve="색상(Hex), 레이아웃 구조, 특정 기능을 명확한 기준으로 제시하세요." />
                  <MistakeItem num="2" title="한 번에 다 시키기" bad="“로그인+DB+디자인 다 한꺼번에 만들어줘”" solve="복잡도가 올라가면 오류도 정비례합니다. 작은 단위로 나누어 지시하세요." />
                  <MistakeItem num="3" title="구조 없이 시작" bad="기획서나 구조 정의 없이 바로 코드 생성 요청" solve="먼저 전체적인 구조(UI, API, DB)를 텍스트로 정의하고 시작하세요." />
                  <MistakeItem num="4" title="결과 확인 안 하고 진행" bad="“대충 된 것 같으니 바로 다음 단계 가자”" solve="작은 오류가 나중에 큰 눈덩이가 됩니다. 매 단계 정상 동작을 확인하세요." />
                  <MistakeItem num="5" title="환경을 말하지 않음" bad="“서버 만들어줘” (어디서? 어떤 기술로?)" solve="로컬 환경인지 클라우드인지, 사용 기술 스택을 명시하세요." />
                </div>
              </section>

              <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-indigo-50 dark:bg-indigo-500/5 rounded-3xl p-10 border border-indigo-100 dark:border-indigo-500/10 space-y-6">
                  <h3 className="text-xl font-black text-indigo-600 flex items-center gap-2"><RefreshCcw className="w-6 h-6" /> 고급 실수: 컨텍스트 넘침</h3>
                  <p className="text-sm font-bold text-slate-500 leading-relaxed mb-4">대화가 너무 길어지면 AI가 초기에 정한 규칙을 잊어버리거나 헷갈려합니다.</p>
                  <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-indigo-100 text-xs font-black text-indigo-600 shadow-sm leading-relaxed">
                    ✔️ 해결: 대화가 너무 길어지면 새 대화를 시작하거나, 핵심 규칙을 다시 한 번 상기시키세요.
                  </div>
                </div>
                <div className="bg-amber-50 dark:bg-amber-500/5 rounded-3xl p-10 border border-amber-100 dark:border-amber-500/10 space-y-6">
                  <h3 className="text-xl font-black text-amber-600 flex items-center gap-2"><ShieldCheck className="w-6 h-6" /> 고급 실수: 일관성 붕괴</h3>
                  <p className="text-sm font-bold text-slate-500 leading-relaxed mb-4">프로젝트 진행 도중 코드 스타일이나 기술 스택이 계속 바뀌어 전체 구조가 꼬이는 현상입니다.</p>
                  <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-amber-100 text-xs font-black text-amber-600 shadow-sm leading-relaxed">
                    ✔️ 해결: 프로젝트 시작 시 '기술 스택, 디자인 시스템' 규칙을 미리 정의하고 AI에게 복사해주기.
                  </div>
                </div>
              </section>

              <section className="space-y-8">
                <h2 className="text-2xl font-black text-center">실수 방지 3대 원칙</h2>
                <div className="flex flex-col md:flex-row justify-center gap-6">
                  {['구체적으로 말한다', '단계적으로 진행한다', '매 단계 확인한다'].map((t, i) => (
                    <div key={i} className="px-10 py-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/10 rounded-3xl text-sm font-black text-slate-500 uppercase tracking-tighter shadow-sm flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs">{i+1}</div>
                      {t}
                    </div>
                  ))}
                </div>
              </section>

              <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-rose-50 dark:bg-rose-500/5 rounded-3xl p-10 border border-rose-100 dark:border-rose-500/20 space-y-8">
                  <div className="flex items-center gap-3 text-rose-600 font-black"><AlertCircle className="w-7 h-7" /> 이렇게 하면 실패한다</div>
                  <div className="space-y-5 text-sm font-bold text-rose-800/60 dark:text-rose-300/40 leading-relaxed">
                    <p>• 대충 말하고 AI가 다 알아서 해주길 바란다</p>
                    <p>• 모든 기능을 한꺼번에 요구한다</p>
                    <p>• 중간 결과를 확인하지 않고 계속 덮어씌운다</p>
                    <p className="pt-6 font-black text-rose-500 italic text-base underline underline-offset-4 decoration-2">결과: 끊임없는 수정 지옥과 오류 발생</p>
                  </div>
                </div>
                <div className="bg-emerald-50 dark:bg-emerald-500/5 rounded-3xl p-10 border border-emerald-100 dark:border-emerald-500/20 space-y-8">
                  <div className="flex items-center gap-3 text-emerald-600 font-black"><CheckCircle2 className="w-7 h-7" /> 이렇게 하면 성공한다</div>
                  <div className="space-y-5 text-sm font-black text-emerald-800 dark:text-emerald-300 leading-relaxed">
                    <p>• 구조와 기획을 먼저 텍스트로 정리한다</p>
                    <p>• 기능별로 단계를 쪼개어 하나씩 요청한다</p>
                    <p>• 매 단계가 정상 작동하는지 눈으로 확인한다</p>
                    <p className="pt-6 font-black text-emerald-500 italic text-base underline underline-offset-4 decoration-2">결과: 빠르고 안정적인 서비스 완성</p>
                  </div>
                </div>
              </section>

              <section className="text-center py-10">
                <div className="max-w-md mx-auto space-y-6">
                  <h2 className="text-3xl font-black text-slate-900 dark:text-white leading-tight">
                    잘하는 사람은 실수를 안 하는 사람이 아니라,<br/>
                    👉 <span className="text-indigo-600">“같은 실수를 반복하지 않는 사람”</span>입니다.
                  </h2>
                  <button onClick={() => setActiveMenu('준비 체크')} className="group bg-indigo-600 hover:bg-indigo-500 text-white px-10 py-5 rounded-2xl font-black text-lg shadow-2xl transition-all hover:-translate-y-1 flex items-center gap-4 mx-auto">
                    다음 단계: 실전 준비 체크하기 <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </section>
            </div>
          )}

          {/* 9. 준비 체크 */}
          {activeMenu === '준비 체크' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-20">
              <section className="space-y-8 text-center md:text-left">
                <div className="space-y-2">
                  <span className="text-xs font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-[0.2em]">09. Ready Check</span>
                  <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">왜 준비가 필요한가</h2>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-white/10 p-10 md:p-12 shadow-xl shadow-indigo-500/5">
                  <p className="text-xl md:text-2xl font-black text-slate-800 dark:text-white leading-tight mb-8">
                    👉 준비가 되어 있으면 <span className="text-indigo-600">학습 속도가 2배</span> 빨라집니다.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm font-bold text-slate-500 leading-relaxed text-center">
                    <div className="p-4 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-100">수업 중 막히는 시간을 줄이기 위함</div>
                    <div className="p-4 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-100">환경 문제로 흐름 끊기는 것 방지</div>
                    <div className="p-4 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-100">바로 실습에만 집중하기 위해</div>
                  </div>
                </div>
              </section>

              <section className="space-y-8">
                <h2 className="text-3xl font-black text-slate-900 dark:text-white">필수 준비 체크 (반드시 되어 있어야 함)</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <CheckItem id="pc" icon={Monitor} title="기기 준비" desc="PC 또는 노트북 사용 가능, 인터넷 연결 안정적" checked={checks['pc']} onToggle={() => toggleCheck('pc')} />
                  <CheckItem id="env" icon={Globe} title="기본 환경" desc="Chrome 브라우저 권장, 기본적인 인터넷 사용 능력" checked={checks['env']} onToggle={() => toggleCheck('env')} />
                  <CheckItem id="ai" icon={Brain} title="AI 도구" desc="AI 서비스 로그인 완료 및 기본 사용 경험 보유" checked={checks['ai']} onToggle={() => toggleCheck('ai')} />
                </div>
              </section>

              <section className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-white/10 p-10 space-y-8 shadow-sm">
                <h3 className="text-xl font-black text-indigo-600 flex items-center gap-3"><Mail className="w-6 h-6" /> 계정 준비 (실습에 필요한 것)</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {['이메일 계정', 'GitHub 계정 (선택)', '클라우드 서비스 계정 (선택)'].map((acc, i) => (
                    <div key={i} className="p-6 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-100 flex items-center gap-4 group">
                      <div className="w-2.5 h-2.5 rounded-full bg-indigo-400 group-hover:scale-150 transition-transform" />
                      <span className="text-sm font-black text-slate-700 dark:text-slate-300">{acc}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-400 font-bold italic text-center">※ 계정이 없어도 괜찮습니다. 수업 중에 함께 생성할 수 있습니다.</p>
              </section>

              <section className="space-y-8">
                <h2 className="text-xl font-black text-center">마인드 체크 (이게 가장 중요합니다)</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-10 bg-indigo-600 text-white rounded-3xl shadow-2xl shadow-indigo-600/20 text-center space-y-4">
                    <Smile className="w-10 h-10 mx-auto opacity-80" />
                    <p className="text-sm font-black italic leading-relaxed">“완벽하게 이해하지 않아도 괜찮다”</p>
                  </div>
                  <div className="p-10 bg-slate-900 text-white rounded-3xl shadow-2xl shadow-slate-900/20 text-center space-y-4">
                    <RefreshCcw className="w-10 h-10 mx-auto opacity-80" />
                    <p className="text-sm font-black italic leading-relaxed">“한 번에 안 되면 반복한다”</p>
                  </div>
                  <div className="p-10 bg-indigo-600 text-white rounded-3xl shadow-2xl shadow-indigo-600/20 text-center space-y-4">
                    <PlayCircle className="w-10 h-10 mx-auto opacity-80" />
                    <p className="text-sm font-black italic leading-relaxed">“직접 해보면서 배우는 과정이다”</p>
                  </div>
                </div>
              </section>

              <section className="bg-slate-50 dark:bg-white/5 rounded-3xl p-12 space-y-10 border border-slate-100 dark:border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-5"><Flag className="w-48 h-48" /></div>
                <h2 className="text-2xl font-black text-center flex items-center justify-center gap-3 relative z-10"><Trophy className="w-8 h-8 text-indigo-600" /> 이런 상태면 준비 완료!</h2>
                <div className="max-w-md mx-auto space-y-5 relative z-10">
                  {[
                    'AI를 한 번이라도 사용해봤다',
                    '웹사이트를 만들어보고 싶다',
                    '직접 손으로 해볼 준비가 되어 있다',
                    '막혀도 계속 시도할 수 있다'
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-5 p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 shadow-sm group">
                      <CheckCircle2 className="w-6 h-6 text-emerald-500 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-black text-slate-800 dark:text-white leading-none">{text}</span>
                    </div>
                  ))}
                </div>
                <p className="text-center text-xs text-slate-400 font-black tracking-[0.3em] relative z-10 uppercase">👉 위 항목 중 3개 이상 체크되면 학습 준비 OK!</p>
              </section>

              <div className="flex flex-col md:flex-row justify-center gap-4">
                {['완벽보다 실행', '이해보다 경험', '한 번에 끝내지 않기'].map(t => (
                  <div key={t} className="px-8 py-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/10 rounded-2xl text-xs font-black text-slate-400 uppercase tracking-widest text-center shadow-sm">{t}</div>
                ))}
              </div>

              <section className="text-center space-y-10 py-10 border-t border-slate-100 dark:border-white/5 pt-24">
                <div className="space-y-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-600 text-xs font-black uppercase tracking-[0.2em] mb-4 shadow-sm"><Sparkles className="w-4 h-4" /> Ready to Vibe</div>
                  <h2 className="text-3xl font-black text-slate-900 dark:text-white leading-tight">
                    준비가 되었다면,<br/>
                    👉 <span className="text-indigo-600">마지막 단계</span>로 이동하세요.
                  </h2>
                  <button onClick={() => setActiveMenu('빠른 체험')} className="group bg-indigo-600 hover:bg-indigo-500 text-white px-12 py-7 rounded-3xl font-black text-xl shadow-2xl shadow-indigo-600/30 transition-all hover:-translate-y-2 active:scale-95 flex items-center gap-4 mx-auto">
                    🚀 빠른 체험 시작하기 <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </section>
            </div>
          )}

          {/* 10. 빠른 체험 */}
          {activeMenu === '빠른 체험' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-20">
              <section className="space-y-8 text-center md:text-left">
                <div className="space-y-2">
                  <span className="text-xs font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-[0.2em]">10. Fast Experience</span>
                  <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">바로 시작하기</h2>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-white/10 p-10 md:p-16 shadow-xl shadow-indigo-500/5 text-center">
                  <p className="text-xl md:text-3xl font-black text-slate-800 dark:text-white leading-tight mb-4">
                    👉 지금 바로 AI로 <span className="text-indigo-600 text-4xl italic">결과를 만들어봅니다.</span>
                  </p>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">(단 1분이면 충분합니다)</p>
                </div>
              </section>

              <section className="space-y-10">
                <h2 className="text-3xl font-black text-slate-900 dark:text-white">따라하기 (아래 내용을 그대로 실행하세요)</h2>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-emerald-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                  <div className="relative bg-slate-900 rounded-3xl p-10 space-y-8 shadow-2xl">
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-rose-500" />
                        <div className="w-3 h-3 rounded-full bg-amber-500" />
                        <div className="w-3 h-3 rounded-full bg-emerald-500" />
                      </div>
                      <button 
                        onClick={() => copyToClipboard('너는 웹 디자이너다.\n간단한 랜딩페이지를 만들어줘.\n\n조건:\n- 제목 1개\n- 설명 1개\n- 버튼 1개\n- 깔끔한 디자인\n- 이미지를 사용하지 말고 그래픽폰트만 사용\n- 모든 코드를 복사하기 쉽게 코드블록에 넣어줘')}
                        className="flex items-center gap-3 px-5 py-2.5 rounded-xl bg-white/10 text-white text-xs font-black hover:bg-white/20 transition-all active:scale-95 border border-white/5 shadow-lg"
                      >
                        {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                        {copied ? '복사 완료!' : '텍스트 복사하기'}
                      </button>
                    </div>
                    <pre className="font-mono text-base md:text-xl text-indigo-100 leading-relaxed whitespace-pre-wrap">
                      {`너는 웹 디자이너다.
간단한 랜딩페이지를 만들어줘.

조건:
- 제목 1개
- 설명 1개
- 버튼 1개
- 깔끔한 디자인
- 이미지를 사용하지 말고 그래픽폰트만 사용
- 모든 코드를 복사하기 쉽게 코드블록에 넣어줘`}
                    </pre>
                  </div>
                </div>
                <p className="text-center text-xs font-black text-slate-400 uppercase tracking-[0.3em] italic">👉 AI 채팅창(ChatGPT, Claude 등)에 붙여넣고 실행하세요</p>
              </section>

              <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-slate-900 rounded-3xl p-12 border border-slate-200 dark:border-white/10 space-y-6 shadow-sm text-center group hover:shadow-xl transition-all">
                  <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto text-emerald-600 group-hover:scale-110 transition-transform"><FileCode className="w-8 h-8" /></div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-black">2단계. 결과 확인 및 저장</h3>
                    <p className="text-xs font-bold text-slate-500 leading-relaxed">
                      AI가 생성한 코드를 모두 복사한 뒤,<br/>
                      메모장 등에 붙여넣고 <span className="text-indigo-600">index.html</span> 파일로 저장하세요.<br/>
                      저장된 파일을 더블 클릭하면 실제 웹페이지가 열립니다!
                    </p>
                  </div>
                </div>
                <div className="bg-indigo-600 rounded-3xl p-12 space-y-6 shadow-xl shadow-indigo-600/20 text-center text-white group hover:scale-[1.02] transition-all">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto text-white group-hover:rotate-12 transition-transform"><RefreshCcw className="w-8 h-8" /></div>
                  <h3 className="text-xl font-black">3단계. 한 번 더 바꿔보기</h3>
                  <div className="p-4 bg-white/10 rounded-2xl border border-white/20 text-sm font-bold italic mb-2 tracking-tight">
                    “버튼 색상을 파란색으로 바꿔줘”
                  </div>
                  <p className="text-xs opacity-80 font-black tracking-widest uppercase italic pt-2">말 한마디로 결과가 완전히 바뀝니다</p>
                </div>
              </section>

              <section className="space-y-10">
                <h2 className="text-2xl font-black text-center uppercase tracking-widest">여기서 중요한 것 (깨달음 포인트)</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {['코드를 몰라도 만들 수 있다', '결과는 요청에 따라 바뀐다', '한 번에 완성할 필요 없다'].map((text, i) => (
                    <div key={i} className="p-8 bg-slate-50 dark:bg-white/5 rounded-3xl border border-slate-100 dark:border-white/10 text-center space-y-4 hover:bg-white dark:hover:bg-slate-800 transition-colors shadow-sm">
                      <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-500/10 rounded-full flex items-center justify-center mx-auto"><CheckCircle2 className="w-6 h-6 text-indigo-600" /></div>
                      <p className="text-base font-black text-slate-900 dark:text-white leading-snug">{text}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-indigo-600 rounded-[3rem] p-16 text-center text-white relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_70%)] opacity-50" />
                <div className="relative z-10 space-y-10">
                  <h2 className="text-3xl md:text-4xl font-black">이게 바로 <span className="text-amber-300 italic tracking-tighter">바이브 코딩</span>입니다</h2>
                  <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-base font-black uppercase tracking-widest">
                    <span className="opacity-60">생각</span>
                    <ArrowRight className="w-5 h-5 opacity-40 hidden md:block" />
                    <span className="opacity-60">말하기</span>
                    <ArrowRight className="w-5 h-5 opacity-40 hidden md:block" />
                    <span className="opacity-60">결과 생성</span>
                    <ArrowRight className="w-5 h-5 opacity-40 hidden md:block" />
                    <span className="px-6 py-2 bg-white text-indigo-600 rounded-2xl shadow-xl scale-125 transform transition-transform duration-500">수정</span>
                  </div>
                </div>
              </section>

              <section className="text-center space-y-12 py-10 border-t border-slate-100 dark:border-white/5 pt-24">
                <div className="space-y-8">
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white leading-tight tracking-tighter">
                    성공 경험을 축하합니다!<br/>
                    👉 이제 <span className="text-indigo-600">“왜 이렇게 되는지”</span> 제대로 배워봅시다.
                  </h2>
                  <Link 
                    href="/contact"
                    className="group bg-indigo-600 hover:bg-indigo-500 text-white px-12 py-7 rounded-3xl font-black text-xl shadow-2xl shadow-indigo-600/30 transition-all hover:-translate-y-2 active:scale-95 flex items-center gap-5 mx-auto w-fit"
                  >
                    💬 교육 문의하기 (상담 신청) <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </section>
            </div>
          )}

          {/* Curriculum Roadmap Footer */}
          <section className="bg-slate-50/50 dark:bg-[#0b0f1a]/50 border-t border-slate-100 dark:border-white/5 py-32 overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(99,102,241,0.03),transparent_70%)]" />
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
              <div className="flex flex-col items-center gap-4 mb-20 text-center">
                <span className="text-xs font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-[0.3em]">Full Curriculum</span>
                <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">사전 학습 여정 한눈에 보기</h2>
                <div className="h-1 w-12 bg-indigo-600 rounded-full" />
              </div>

              <div className="relative">
                {/* Progress Line - Desktop */}
                <div className="absolute top-8 left-0 w-full h-[1px] bg-slate-200 dark:bg-white/10 hidden lg:block" />
                
                <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-y-12 lg:gap-4 relative z-10">
                  {MENU_ITEMS.map((item, index) => {
                    const isActive = activeMenu === item.label;
                    const isPast = MENU_ITEMS.findIndex(m => m.label === activeMenu) > index;
                    
                    return (
                      <div 
                        key={item.label} 
                        onClick={() => {
                          setActiveMenu(item.label);
                          window.scrollTo(0, 0);
                        }}
                        className={`group flex flex-col items-center gap-5 cursor-pointer transition-all duration-500 ${isActive ? 'scale-110' : 'hover:translate-y-[-4px]'}`}
                      >
                        <div className={`
                          w-16 h-16 rounded-[1.5rem] flex items-center justify-center border-2 transition-all duration-500 relative
                          ${isActive ? 'bg-indigo-600 border-indigo-600 text-white shadow-2xl shadow-indigo-600/40 ring-4 ring-indigo-500/10' : 
                            isPast ? 'bg-emerald-500 border-emerald-500 text-white' : 
                            'bg-white dark:bg-slate-900 border-slate-100 dark:border-white/10 text-slate-400 group-hover:border-indigo-400 group-hover:text-indigo-600'}
                        `}>
                          {isPast ? <Check className="w-6 h-6" /> : <item.icon className={`w-6 h-6 ${isActive ? 'animate-pulse' : ''}`} />}
                          
                          {/* Badge for Current Step */}
                          {isActive && (
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-xs font-black text-white px-2 py-1 rounded-full border-2 border-white dark:border-[#0b0f1a] uppercase tracking-tighter">
                              Learning
                            </div>
                          )}
                        </div>

                        <div className="text-center space-y-1.5 px-2">
                          <p className={`text-xs font-black uppercase tracking-widest transition-colors ${isActive ? 'text-indigo-600' : isPast ? 'text-emerald-500' : 'text-slate-400'}`}>
                            {String(index + 1).padStart(2, '0')}
                          </p>
                          <p className={`text-xs font-bold tracking-tight whitespace-nowrap transition-colors ${isActive ? 'text-slate-900 dark:text-white font-black' : isPast ? 'text-slate-600 dark:text-slate-300' : 'text-slate-400'}`}>
                            {item.label}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              <div className="mt-20 text-center max-w-2xl mx-auto">
                <p className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-4">Guidance</p>
                <p className="text-sm font-bold text-slate-500 dark:text-slate-400 leading-relaxed break-keep">
                  본 교육은 사전 학습 없이도 충분히 참여하실 수 있도록 구성되어 있습니다. 하지만 이 10단계를 미리 경험해보신다면, <span className="text-indigo-600 dark:text-indigo-400">실전 프로젝트 진행 시 훨씬 더 깊이 있는 이해와 빠른 성장을 경험</span>하실 수 있습니다.
                </p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}

// --- Subcomponents ---
function HighlightCard({ icon: Icon, title, desc }: { icon: React.ElementType, title: string, desc: string }) {
  return (
    <div className="bg-slate-50 dark:bg-white/5 p-6 rounded-2xl border border-slate-100 dark:border-white/5 space-y-3 group hover:bg-indigo-600 transition-all duration-500">
      <Icon className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors" />
      <h4 className="text-base font-black dark:text-white group-hover:text-white transition-colors tracking-tight">{title}</h4>
      <p className="text-xs text-slate-500 dark:text-slate-400 font-bold group-hover:text-indigo-100 transition-colors leading-relaxed">{desc}</p>
    </div>
  );
}

function StatusCard({ icon: Icon, label, count, color, isText = false }: { icon: React.ElementType, label: string, count: string, color: string, isText?: boolean }) {
  return (
    <div className="space-y-3 group p-2 text-center md:text-left">
      <div className={`w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm mx-auto md:mx-0`}><Icon className={`w-6 h-6 ${color}`} /></div>
      <div>
        <p className="text-xs text-slate-400 font-black uppercase tracking-widest mb-1">{label}</p>
        <p className="text-lg font-black text-slate-900 dark:text-white tracking-tighter">{count}</p>
      </div>
    </div>
  );
}

function SidebarItem({ label, icon: Icon, active, onClick }: { label: string, icon: React.ElementType, active: boolean, onClick: () => void }) {
  return (
    <div 
      onClick={onClick} 
      className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-200 ${
        active 
        ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' 
        : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-slate-900'
      }`}
    >
      <Icon className={`w-4 h-4 ${active ? 'text-white' : 'text-slate-400'}`} />
      <span className="text-xs font-bold tracking-tight">{label}</span>
    </div>
  );
}

function ProcessStep({ step, desc }: { step: string, desc: string }) {
  return (
    <div className="flex flex-col items-center gap-5 group">
      <div className="w-20 h-20 bg-white dark:bg-slate-800 rounded-3xl flex items-center justify-center shadow-lg border border-slate-100 dark:border-white/5 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 transform group-hover:scale-110">
        <span className="text-base font-black tracking-tighter">{step}</span>
      </div>
      <p className="text-xs font-black text-slate-500 dark:text-slate-400 text-center leading-relaxed">{desc}</p>
    </div>
  );
}

function StructureCard({ num, title, desc, example }: { num: string, title: string, desc: string, example: string }) {
  return (
    <div className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] border border-slate-100 dark:border-white/10 shadow-sm space-y-6 hover:border-indigo-500 transition-all group hover:shadow-xl">
      <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-600 font-black text-lg group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">{num}</div>
      <div className="space-y-4">
        <h4 className="text-xl font-black text-slate-800 dark:text-white tracking-tight">{title}</h4>
        <p className="text-xs text-slate-500 dark:text-slate-400 font-bold leading-relaxed">{desc}</p>
        <div className="p-4 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/10 text-xs text-indigo-600 font-black italic shadow-inner">ex) {example}</div>
      </div>
    </div>
  );
}

function ConceptCard({ icon: Icon, title, desc }: { icon: React.ElementType, title: string, desc: string }) {
  return (
    <div className="p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/10 rounded-3xl hover:border-indigo-500 transition-all shadow-sm flex flex-col items-center text-center gap-3 group hover:-translate-y-1">
      <Icon className="w-6 h-6 text-indigo-400 group-hover:text-indigo-600 transition-colors" />
      <p className="text-xs font-black text-slate-800 dark:text-white tracking-tight">{title}</p>
      <p className="text-xs text-slate-400 font-bold leading-tight">{desc}</p>
    </div>
  );
}

function CheckItem({ id, icon: Icon, title, desc, checked, onToggle }: { id: string, icon: React.ElementType, title: string, desc: string, checked: boolean, onToggle: () => void }) {
  return (
    <div 
      onClick={onToggle}
      className={`p-8 rounded-[2rem] border transition-all cursor-pointer select-none space-y-5 text-center relative overflow-hidden group ${checked ? 'bg-emerald-50 border-emerald-200 shadow-xl' : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-white/10 hover:border-indigo-300 shadow-sm'}`}
    >
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto transition-all duration-500 ${checked ? 'bg-emerald-500 text-white scale-110' : 'bg-slate-50 dark:bg-white/5 text-slate-400'}`}>
        <Icon className="w-7 h-7" />
      </div>
      <div>
        <h4 className={`text-base font-black mb-2 tracking-tight transition-colors ${checked ? 'text-emerald-900' : 'text-slate-900 dark:text-white'}`}>{title}</h4>
        <p className={`text-xs font-bold leading-relaxed transition-colors ${checked ? 'text-emerald-700/60' : 'text-slate-400'}`}>{desc}</p>
      </div>
      <div className={`w-8 h-8 rounded-full border-2 mx-auto flex items-center justify-center transition-all duration-500 ${checked ? 'bg-emerald-500 border-emerald-500 scale-110 shadow-lg' : 'border-slate-200'}`}>
        {checked && <CheckSquare className="w-4 h-4 text-white" />}
      </div>
    </div>
  );
}

function MistakeItem({ num, title, bad, solve }: { num: string, title: string, bad: string, solve: string }) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-white/10 overflow-hidden shadow-sm flex flex-col md:flex-row min-h-[120px] group hover:shadow-xl transition-all hover:border-indigo-100">
      <div className="p-8 md:w-56 bg-slate-50 dark:bg-white/5 flex flex-col justify-center border-r border-slate-100 dark:border-white/10 group-hover:bg-indigo-50/50 transition-colors">
        <span className="text-xs font-black text-rose-500 uppercase tracking-[0.3em] mb-2 italic">Error {num}</span>
        <h4 className="text-base font-black text-slate-900 dark:text-white leading-tight tracking-tight">{title}</h4>
      </div>
      <div className="p-8 flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-2">
          <p className="text-xs font-black text-rose-400 uppercase tracking-widest italic flex items-center gap-2"><X className="w-3 h-3" /> Problem (❌)</p>
          <p className="text-[13px] text-rose-800/60 dark:text-rose-300/40 font-bold italic leading-relaxed">“{bad}”</p>
        </div>
        <div className="space-y-2">
          <p className="text-xs font-black text-indigo-500 uppercase tracking-widest italic flex items-center gap-2"><CheckSquare className="w-3 h-3" /> Solution (⭕)</p>
          <p className="text-[13px] text-indigo-600 dark:text-indigo-400 font-black leading-relaxed">{solve}</p>
        </div>
      </div>
    </div>
  );
}
