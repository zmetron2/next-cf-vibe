import React from 'react';
import { 
  Search, Code2, ArrowRight, Zap, 
  Bell, 
  Cloud,
  ChevronRight,
  BookOpen, Laptop, 
  Target, Rocket, Users, ShieldCheck
} from 'lucide-react';
import Link from 'next/link';

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

export default function GuidePage() {
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
            <Link href="/curriculum" className="hover:text-white transition-colors">커리큘럼</Link>
            <Link href="/practice" className="hover:text-white transition-colors">기능실습</Link>
            <Link href="/resources" className="hover:text-white transition-colors">자료실</Link>
            <Link href="/guide" className="text-white border-b-2 border-indigo-500 pb-1">기본가이드</Link>
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
            V
          </div>
        </div>
      </nav>

      {/* --- Header Area --- */}
      <header className="bg-[#0f172a] text-white px-6 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-4">
            <h1 className="text-3xl font-black">기본 가이드</h1>
            <p className="text-indigo-400 font-bold text-xl">바이브 코딩을 제대로 이해하고 시작해요</p>
            <p className="text-slate-400 max-w-md leading-relaxed text-sm">
              바이브 코딩의 개념부터 도구, 학습 방법, 생산성 팁까지<br />
              바이브 코딩을 위한 모든 기본 지식을 모았습니다.
            </p>
            <div className="pt-2">
              <button className="bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all hover:-translate-y-1 shadow-lg shadow-indigo-600/20">
                초보자를 위한 시작 가이드 <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-md border border-white/10 rounded-3xl p-6 w-full max-w-lg">
            <h3 className="text-xs font-bold text-slate-300 mb-6 uppercase tracking-widest">가이드 한눈에 보기</h3>
            <div className="grid grid-cols-4 gap-4 text-center">
              <StatusCard icon={BookOpen} label="전체 가이드" count="24" color="text-purple-400" />
              <StatusCard icon={Target} label="학습 가이드" count="8" color="text-blue-400" />
              <StatusCard icon={Laptop} label="도구 가이드" count="10" color="text-pink-400" />
              <StatusCard icon={Zap} label="팁 & 노하우" count="6" color="text-yellow-400" />
            </div>
          </div>
        </div>
      </header>

      {/* --- Main Content --- */}
      <main className="max-w-7xl mx-auto w-full px-6 py-10 flex flex-col lg:flex-row gap-8">
        
        {/* Left Sidebar Index */}
        <aside className="lg:w-64 space-y-8 shrink-0">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-6 shadow-sm">
            <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest">가이드 목차</h3>
            <div className="space-y-6">
              <div className="bg-indigo-50 p-3 rounded-xl flex items-center gap-2 text-indigo-600 font-bold text-sm cursor-pointer border border-indigo-100">
                <BookOpen className="w-4 h-4" /> 바이브 코딩이란?
              </div>
              
              <SidebarGroup title="시작하기">
                <SidebarLink label="바이브 코딩의 개념" />
                <SidebarLink label="왜 바이브 코딩인가?" />
                <SidebarLink label="필요한 준비물" />
              </SidebarGroup>

              <SidebarGroup title="개발 환경 설정">
                <SidebarLink label="필수 도구 설치" />
                <SidebarLink label="추천 개발 환경" />
                <SidebarLink label="IDE 설정 가이드" />
              </SidebarGroup>

              <SidebarGroup title="학습 방법">
                <SidebarLink label="효과적인 학습 로드맵" />
                <SidebarLink label="연습 방법" />
                <SidebarLink label="프로젝트 기반 학습" />
              </SidebarGroup>

              <SidebarGroup title="생산성 향상">
                <SidebarLink label="프롬프트 작성 팁" />
                <SidebarLink label="디버깅 전략" />
                <SidebarLink label="코드 관리 팁" />
              </SidebarGroup>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-4 shadow-sm">
            <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest">궁금한 점이 있나요?</h3>
            <p className="text-[10px] text-slate-500 leading-relaxed">
              자주 묻는 질문에서 답변을 찾아보세요.
            </p>
            <button className="w-full bg-slate-50 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-indigo-600 hover:text-white transition-all border border-slate-100 flex items-center justify-center gap-2">
              FAQ 보러가기 <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </aside>

        {/* Main Guide Content */}
        <div className="flex-1 space-y-12">
          {/* Hero Section: What is Vibe Coding? */}
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-black text-slate-800">바이브 코딩이란?</h2>
              <button className="text-[10px] font-bold text-slate-400 hover:text-indigo-600 flex items-center gap-1">더 알아보기 <ChevronRight className="w-3 h-3" /></button>
            </div>
            <div className="bg-white rounded-[32px] border border-slate-200 overflow-hidden shadow-sm flex flex-col md:flex-row h-full md:h-[340px]">
              <div className="p-10 flex-1 space-y-6 flex flex-col justify-center">
                <h3 className="text-2xl font-black text-slate-800">바이브 코딩 (Vibe Coding)이란?</h3>
                <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
                  AI와 함께 아이디어를 빠르게 코드로 구현하고, 실험하고, 개선해 나가는 새로운 개발 방식입니다. 직관적인 대화와 도구를 활용해 더 빠르게, 더 창의적으로 개발할 수 있습니다.
                </p>
                <button className="w-fit bg-slate-50 border border-slate-100 px-6 py-2.5 rounded-xl text-sm font-bold text-indigo-600 hover:bg-indigo-50 transition-all flex items-center gap-2">
                  자세히 보기 <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="bg-slate-900 flex-1 relative p-10 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.2),transparent)] pointer-events-none" />
                <div className="relative z-10 w-full space-y-4">
                  {/* Mock Chat UI */}
                  <div className="bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-2xl w-4/5 self-start">
                    <p className="text-[10px] text-white/50 mb-1">사용자</p>
                    <p className="text-xs text-white">로그인 기능이 있는 회원 관리 페이지를 만들어줘</p>
                  </div>
                  <div className="bg-indigo-600/80 backdrop-blur-md border border-indigo-500/50 p-4 rounded-2xl w-4/5 self-end ml-auto">
                    <p className="text-[10px] text-white/50 mb-1">AI 어시스턴트</p>
                    <p className="text-xs text-white">회원 관리 페이지를 생성해드렸습니다.</p>
                  </div>
                </div>
                {/* Floating Mock UI Card */}
                <div className="absolute -bottom-10 -right-10 bg-white rounded-2xl shadow-2xl p-6 w-64 border border-slate-200 transform rotate-[-5deg] group-hover:rotate-0 transition-transform duration-500">
                  <h4 className="text-xs font-black text-slate-800 mb-4">회원 관리</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-[10px] pb-2 border-b border-slate-50">
                      <span className="font-bold text-slate-400">이름</span>
                      <span className="font-bold text-slate-800">김코딩</span>
                    </div>
                    <div className="flex items-center justify-between text-[10px] pb-2 border-b border-slate-50">
                      <span className="font-bold text-slate-400">상태</span>
                      <span className="text-green-500 font-bold">활성</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Guide Categories */}
          <section className="space-y-6">
            <h2 className="text-xl font-black text-slate-800">가이드 카테고리</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <CategoryCard icon={BookOpen} title="시작하기" desc="바이브 코딩의 기본 개념과 시작하는 방법을 알아보세요." count="3" color="text-indigo-600" bg="bg-indigo-50" />
              <CategoryCard icon={Laptop} title="개발 환경 설정" desc="효율적인 개발을 위한 환경 설정과 필수 도구를 안내합니다." count="5" color="text-blue-600" bg="bg-blue-50" />
              <CategoryCard icon={Target} title="학습 방법" desc="효과적인 학습 로드맵과 연습 방법을 소개합니다." count="4" color="text-green-600" bg="bg-green-50" />
              <CategoryCard icon={Rocket} title="생산성 향상" desc="개발 속도를 높여주는 팁과 노하우를 공유합니다." count="6" color="text-pink-600" bg="bg-pink-50" />
              <CategoryCard icon={Users} title="커뮤니티 & 리소스" desc="유용한 커뮤니티와 학습 자료를 모아두었습니다." count="4" color="text-purple-600" bg="bg-purple-50" />
              <CategoryCard icon={ShieldCheck} title="보안 & 배포" desc="안전한 개발과 서비스 배포 방법을 안내합니다." count="2" color="text-cyan-600" bg="bg-cyan-50" />
            </div>
          </section>

          {/* Lists Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-black text-slate-800">인기 가이드</h3>
                <button className="text-[10px] font-bold text-indigo-600 hover:underline">전체 보기 →</button>
              </div>
              <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden divide-y divide-slate-100 shadow-sm">
                <PopularGuideItem rank="01" title="바이브 코딩 완벽 가이드" category="시작하기" views="12.4K" />
                <PopularGuideItem rank="02" title="Cursor 완전 정복 가이드" category="개발 환경 설정" views="8.7K" />
                <PopularGuideItem rank="03" title="효과적인 프롬프트 작성법" category="생산성 향상" views="6.2K" />
                <PopularGuideItem rank="04" title="프로젝트로 배우는 바이브 코딩" category="학습 방법" views="5.1K" />
                <PopularGuideItem rank="05" title="배포까지 한 번에: 완전 가이드" category="보안 & 배포" views="4.3K" />
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-black text-slate-800">최근 업데이트</h3>
                <button className="text-[10px] font-bold text-indigo-600 hover:underline">전체 보기 →</button>
              </div>
              <div className="bg-white rounded-3xl border border-slate-200 p-2 shadow-sm space-y-1">
                <RecentUpdateItem icon={Laptop} title="Cursor AI 신기능 활용 팁" date="2024.05.20" />
                <RecentUpdateItem icon={Zap} title="효과적인 디버깅 전략" date="2024.05.18" />
                <RecentUpdateItem icon={Code2} title="GitHub Copilot 활용 가이드" date="2024.05.15" />
                <RecentUpdateItem icon={Rocket} title="자동화로 생산성 2배 높이기" date="2024.05.12" />
                <RecentUpdateItem icon={Cloud} title="Vercel 배포 완벽 가이드" date="2024.05.10" />
              </div>
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="bg-indigo-600 rounded-[32px] p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-indigo-600/20 text-white overflow-hidden relative group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700" />
            <div className="flex items-center gap-4 relative z-10">
              <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl">
                <Zap className="w-8 h-8 text-white fill-white/20" />
              </div>
              <div>
                <h4 className="text-lg font-black">이 가이드가 도움이 되셨나요?</h4>
                <p className="text-white/70 text-sm">바이브 코딩 여정을 함께하는 개발자들과 경험을 공유해보세요!</p>
              </div>
            </div>
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-bold hover:scale-105 transition-all shadow-lg relative z-10">
              커뮤니티 참여하기 →
            </button>
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
            <div className="flex items-center gap-4">
              <GithubIcon className="w-5 h-5 text-slate-500 hover:text-indigo-600 cursor-pointer transition-colors" />
              <MoonIcon className="w-5 h-5 text-slate-500 hover:text-indigo-600 cursor-pointer transition-colors" />
              <HashIcon className="w-5 h-5 text-slate-500 hover:text-indigo-600 cursor-pointer transition-colors" />
            </div>
            <a href="#" className="hover:text-indigo-600 transition-colors">문의하기</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">업데이트 로그</a>
          </div>
          <div className="text-xs text-slate-400">
            © 2024 Vibe Coding. All rights reserved.
          </div>
          <button className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/20 md:hidden">
            <ChevronDownIcon className="w-6 h-6 rotate-180" />
          </button>
        </div>
      </footer>
      
      {/* Top Button for Desktop */}
      <button className="fixed bottom-8 right-8 w-12 h-12 bg-indigo-600 rounded-full hidden md:flex items-center justify-center hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-600/40 text-white z-40">
        <ChevronDownIcon className="w-6 h-6 rotate-180" />
      </button>
    </div>
  );
}

// Helper Components
function StatusCard({ icon: Icon, label, count, color }: { icon: React.ElementType, label: string, count: string, color: string }) {
  return (
    <div className="space-y-2 group cursor-pointer">
      <div className={`p-2 rounded-xl bg-white/5 border border-white/5 flex justify-center group-hover:bg-white/10 transition-colors`}>
        <Icon className={`w-5 h-5 ${color}`} />
      </div>
      <div>
        <p className="text-[10px] text-slate-500 font-medium whitespace-nowrap">{label}</p>
        <p className="text-xl font-bold">{count}<span className="text-xs font-normal ml-0.5">개</span></p>
      </div>
    </div>
  );
}

function SidebarGroup({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="space-y-3 px-2">
      <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{title}</h4>
      <div className="space-y-2">
        {children}
      </div>
    </div>
  );
}

function SidebarLink({ label }: { label: string }) {
  return (
    <div className="text-sm text-slate-500 hover:text-indigo-600 cursor-pointer transition-colors flex items-center gap-2 group">
      <span className="w-1 h-1 bg-slate-200 rounded-full group-hover:bg-indigo-500 transition-colors" />
      {label}
    </div>
  );
}

function CategoryCard({ icon: Icon, title, desc, count, color, bg }: { icon: React.ElementType, title: string, desc: string, count: string, color: string, bg: string }) {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-4 group hover:shadow-lg transition-all cursor-pointer">
      <div className={`w-12 h-12 ${bg} ${color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h4 className="text-sm font-black text-slate-800 mb-1">{title}</h4>
        <p className="text-[11px] text-slate-500 leading-relaxed">{desc}</p>
      </div>
      <button className={`text-[10px] font-bold ${color} flex items-center gap-1 hover:underline`}>
        {count}개 가이드 <ArrowRight className="w-3 h-3" />
      </button>
    </div>
  );
}

function PopularGuideItem({ rank, title, category, views }: { rank: string, title: string, category: string, views: string }) {
  const categoryColors: Record<string, string> = {
    '시작하기': 'bg-indigo-50 text-indigo-600',
    '개발 환경 설정': 'bg-blue-50 text-blue-600',
    '학습 방법': 'bg-green-50 text-green-600',
    '생산성 향상': 'bg-pink-50 text-pink-600',
    '보안 & 배포': 'bg-cyan-50 text-cyan-600'
  };

  return (
    <div className="p-4 flex items-center gap-4 hover:bg-slate-50 cursor-pointer group transition-colors">
      <span className="text-sm font-black text-slate-300 group-hover:text-indigo-600 transition-colors">{rank}</span>
      <div className="flex-1 overflow-hidden">
        <p className="text-sm font-bold text-slate-800 truncate">{title}</p>
      </div>
      <span className={`text-[9px] font-black px-2 py-0.5 rounded-full whitespace-nowrap ${categoryColors[category]}`}>{category}</span>
      <span className="text-[10px] text-slate-400 flex items-center gap-1 whitespace-nowrap">
        <EyeIcon className="w-3 h-3" /> {views}
      </span>
    </div>
  );
}

function RecentUpdateItem({ icon: Icon, title, date }: { icon: React.ElementType, title: string, date: string }) {
  return (
    <div className="p-3 flex items-center justify-between rounded-2xl hover:bg-slate-50 cursor-pointer group transition-colors">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-slate-50 text-slate-400 rounded-xl group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
          <Icon className="w-4 h-4" />
        </div>
        <span className="text-sm font-bold text-slate-700">{title}</span>
      </div>
      <span className="text-[10px] text-slate-400">{date}</span>
    </div>
  );
}

function EyeIcon({ className }: { className: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  );
}
