import React from 'react';
import { 
  Search, Code2, Layers, ArrowRight, Zap, CheckCircle2, 
  Bookmark, Edit3, PlayCircle, 
  ChevronDown, Bell, Star, 
  PlusCircle, Upload, Moon, MessageSquare, LineChart, 
  ShieldCheck, MoreHorizontal, Lightbulb
} from 'lucide-react';
import Link from 'next/link';

export default function PracticePage() {
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
            <Link href="/practice" className="text-white border-b-2 border-indigo-500 pb-1">기능실습</Link>
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
            V
          </div>
        </div>
      </nav>

      {/* --- Header Area --- */}
      <header className="bg-[#0f172a] text-white px-6 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-4">
            <h1 className="text-3xl font-black">기능 실습</h1>
            <p className="text-slate-400 max-w-md leading-relaxed text-sm">
              작은 기능부터 직접 만들어보며 실력을 쌓아보세요.<br />
              실전에서 자주 사용하는 기능들을 단계별로 구현해보고<br />
              코딩 감각을 익히고 응용력을 키워보세요.
            </p>
            <div className="flex gap-3 pt-2">
              <button className="bg-indigo-600 hover:bg-indigo-500 px-5 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-all">
                <PlusCircle className="w-4 h-4" /> 실습 프로젝트 추가 제안
              </button>
              <button className="bg-white/10 hover:bg-white/20 border border-white/10 px-5 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-all">
                <Bookmark className="w-4 h-4" /> 내 실습 모아보기
              </button>
            </div>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-md border border-white/10 rounded-3xl p-6 w-full max-w-lg grid grid-cols-4 gap-4 text-center">
            <header className="col-span-4 hidden invisible">Status</header>
            <StatusCard icon={Layers} label="전체 실습" count="24" unit="개" color="text-purple-400" />
            <StatusCard icon={CheckCircle2} label="완료한 실습" count="8" unit="개" color="text-green-400" />
            <StatusCard icon={LineChart} label="진행 중" count="5" unit="개" color="text-orange-400" />
            <StatusCard icon={Star} label="찜한 실습" count="12" unit="개" color="text-yellow-400" />
          </div>
        </div>
      </header>

      {/* --- Main Content --- */}
      <main className="max-w-7xl mx-auto w-full px-6 py-10 flex flex-col lg:flex-row gap-8">
        
        {/* Sidebar Filters */}
        <aside className="lg:w-64 space-y-8 shrink-0">
          <div className="space-y-6">
            <FilterSection title="난이도">
              <Checkbox label="전체" checked />
              <Checkbox label="입문" />
              <Checkbox label="초급" />
              <Checkbox label="중급" />
              <Checkbox label="고급" />
            </FilterSection>

            <FilterSection title="카테고리">
              <Checkbox label="전체" checked />
              <Checkbox label="UI/UX" />
              <Checkbox label="데이터 처리" />
              <Checkbox label="인증/보안" />
              <Checkbox label="CRUD" />
              <Checkbox label="파일 관리" />
              <Checkbox label="상태 관리" />
              <Checkbox label="API 연동" />
              <Checkbox label="기타" />
            </FilterSection>

            <div className="space-y-3">
              <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest">연계 커리큘럼</h3>
              <div className="relative">
                <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm font-bold text-slate-600 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option>전체 단계</option>
                  <option>1단계 - 기본 기초</option>
                  <option>2단계 - 상태 관리</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest">기술 스택</h3>
              <div className="relative">
                <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm font-bold text-slate-600 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option>전체</option>
                  <option>React</option>
                  <option>TypeScript</option>
                  <option>Tailwind CSS</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Suggestion Box */}
          <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5 space-y-3">
            <h4 className="text-xs font-black text-indigo-600 flex items-center gap-1.5">
              <Lightbulb className="w-3.5 h-3.5" /> 실습 아이디어 제안
            </h4>
            <p className="text-[10px] text-slate-500 leading-relaxed">
              직접 만들고 싶은 기능이 있으신가요?<br />
              실습 프로젝트로 추가 제안해 주세요!
            </p>
            <button className="w-full bg-white py-2 rounded-lg text-[10px] font-black text-indigo-600 shadow-sm hover:shadow-md transition-all border border-indigo-50">
              아이디어 제안하기 →
            </button>
          </div>
        </aside>

        {/* Practice Grid Area */}
        <div className="flex-1 space-y-8">
          {/* Controls Bar */}
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="실습 프로젝트 검색 (예: 로그인, 게시판, 필터...)" 
                className="w-full bg-white border border-slate-200 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
              />
            </div>
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="flex gap-1 bg-slate-100 p-1 rounded-xl">
                <TabItem label="전체" active />
                <TabItem label="인기 실습" />
                <TabItem label="신규 추가" />
                <TabItem label="진행 중" />
                <TabItem label="완료" />
              </div>
              <div className="relative">
                <select className="bg-white border border-slate-200 rounded-xl px-4 py-2 text-xs font-bold text-slate-600 appearance-none pr-8">
                  <option>최신순</option>
                  <option>인기순</option>
                  <option>성공률순</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <ProjectCard 
              icon={ShieldCheck} 
              level="입문" 
              title="로그인 기능 만들기" 
              desc="이메일/비밀번호 로그인 기능을 구현해보세요." 
              tags={['인증', '폼 처리']} 
              link="2회차 - 인증 기초"
              views="12.4K"
              rate="85%"
            />
            <ProjectCard 
              icon={CheckCircle2} 
              level="입문" 
              title="할 일 리스트 (Todo)" 
              desc="할 일 추가, 수정, 삭제가 가능한 Todo 앱을 만들어보세요." 
              tags={['CRUD', '로컬스토리지']} 
              link="3회차 - 상태 관리"
              views="8.7K"
              rate="78%"
            />
            <ProjectCard 
              icon={Upload} 
              level="초급" 
              title="파일 업로드 기능" 
              desc="이미지 파일을 선택하고 미리보기 및 업로드를 구현해보세요." 
              tags={['파일', '업로드', '미리보기']} 
              link="6회차 - 파일 처리"
              views="6.2K"
              rate="72%"
            />
            <ProjectCard 
              icon={Search} 
              level="초급" 
              title="검색 & 필터 기능" 
              desc="검색어 입력과 필터링 기능을 구현해보세요." 
              tags={['검색', '필터', 'UI/UX']} 
              link="5회차 - 데이터 필터링"
              views="5.1K"
              rate="81%"
            />
            <ProjectCard 
              icon={Edit3} 
              level="중급" 
              title="게시판 CRUD" 
              desc="게시글 등록, 조회, 수정, 삭제 기능을 구현해보세요." 
              tags={['CRUD', '폼', 'API']} 
              link="8회차 - CRUD 구현"
              views="12.4K"
              rate="76%"
            />
            <ProjectCard 
              icon={LineChart} 
              level="중급" 
              title="차트/그래프 만들기" 
              desc="데이터를 시각화하는 차트 기능을 구현해보세요." 
              tags={['차트', '데이터 시각화']} 
              link="10회차 - 데이터 시각화"
              views="4.2K"
              rate="68%"
            />
            <ProjectCard 
              icon={MessageSquare} 
              level="중급" 
              title="댓글 기능 구현" 
              desc="게시글에 댓글을 작성하고 관리하는 기능을 구현해보세요." 
              tags={['댓글', '대화형', 'CRUD']} 
              link="9회차 - 관계형 데이터"
              views="6.8K"
              rate="74%"
            />
            <ProjectCard 
              icon={Moon} 
              level="입문" 
              title="다크모드 전환" 
              desc="라이트/다크 모드 전환 기능을 구현해보세요." 
              tags={['UI/UX', '테마', 'CSS']} 
              link="1회차 - UI 기본"
              views="7.3K"
              rate="85%"
            />
          </div>

          {/* More Button */}
          <div className="flex justify-center pt-8">
            <button className="bg-white border border-slate-200 px-8 py-3 rounded-2xl font-bold text-slate-600 hover:shadow-md transition-all flex items-center gap-2">
              더 많은 실습 보기 <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </main>

      {/* --- Connection Footer --- */}
      <section className="bg-white border-t border-slate-100 py-16 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-black text-slate-800">커리큘럼과 연계된 실습</h2>
            <Link href="/curriculum" className="text-xs font-bold text-indigo-600 hover:underline">커리큘럼 전체 보기 →</Link>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-4">
            <StepItem step="1단계" title="기본 기초" count="2" />
            <StepArrow />
            <StepItem step="2단계" title="상태 관리" count="3" active />
            <StepArrow />
            <StepItem step="3단계" title="데이터 처리" count="4" />
            <StepArrow />
            <StepItem step="4단계" title="API 연동" count="3" />
            <StepArrow />
            <StepItem step="5단계" title="실전 프로젝트" count="2" />
          </div>
          
          <div className="bg-indigo-50 rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 border border-indigo-100 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-indigo-600 text-white rounded-2xl">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <p className="text-indigo-600 font-black text-sm uppercase tracking-widest mb-1">TIP</p>
                <p className="text-slate-700 text-sm font-bold">실습을 완료하고 나면 커리큘럼 회차에 기록해 보세요!</p>
                <p className="text-slate-500 text-xs mt-1">학습 기록을 남기면 나중에 복습하기에도 좋아요.</p>
              </div>
            </div>
            <Link href="/curriculum" className="bg-white px-6 py-3 rounded-xl text-indigo-600 font-bold text-sm shadow-sm hover:shadow-md transition-all border border-indigo-50">
              커리큘럼으로 기록하기 →
            </Link>
          </div>
        </div>
      </section>

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
function StatusCard({ icon: Icon, label, count, unit, color }: { icon: React.ElementType, label: string, count: string, unit: string, color: string }) {
  return (
    <div className="space-y-2 group cursor-pointer">
      <div className={`p-2 rounded-xl bg-white/5 border border-white/5 flex justify-center group-hover:bg-white/10 transition-colors`}>
        <Icon className={`w-5 h-5 ${color}`} />
      </div>
      <div>
        <p className="text-[10px] text-slate-500 font-medium whitespace-nowrap">{label}</p>
        <p className="text-xl font-bold">{count}<span className="text-xs font-normal ml-0.5">{unit}</span></p>
      </div>
    </div>
  );
}

function FilterSection({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest">{title}</h3>
      <div className="space-y-2">
        {children}
      </div>
    </div>
  );
}

function Checkbox({ label, checked = false }: { label: string, checked?: boolean }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <div className={`w-4 h-4 rounded border transition-all flex items-center justify-center ${checked ? 'bg-indigo-600 border-indigo-600' : 'bg-white border-slate-300 group-hover:border-indigo-400'}`}>
        {checked && <CheckCircle2 className="w-3 h-3 text-white" strokeWidth={3} />}
      </div>
      <span className={`text-sm font-bold transition-colors ${checked ? 'text-indigo-600' : 'text-slate-500 group-hover:text-slate-800'}`}>{label}</span>
    </label>
  );
}

function TabItem({ label, active = false }: { label: string, active?: boolean }) {
  return (
    <button className={`px-4 py-1.5 rounded-lg text-xs font-black transition-all ${active ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}>
      {label}
    </button>
  );
}

function ProjectCard({ icon: Icon, level, title, desc, tags, link, views, rate }: { icon: React.ElementType, level: string, title: string, desc: string, tags: string[], link: string, views: string, rate: string }) {
  const levelColors: Record<string, string> = {
    '입문': 'text-green-500 bg-green-50',
    '초급': 'text-orange-500 bg-orange-50',
    '중급': 'text-indigo-500 bg-indigo-50',
    '고급': 'text-red-500 bg-red-50'
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 flex flex-col justify-between group hover:shadow-xl transition-all duration-500 cursor-pointer">
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="p-3 bg-slate-50 rounded-2xl text-slate-700 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
            <Icon className="w-6 h-6" />
          </div>
          <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${levelColors[level]}`}>{level}</span>
        </div>
        <div>
          <h4 className="text-sm font-black text-slate-800 mb-1 group-hover:text-indigo-600 transition-colors">{title}</h4>
          <p className="text-[11px] text-slate-500 leading-relaxed line-clamp-2">{desc}</p>
        </div>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {tags.map((tag, i) => (
            <span key={i} className="text-[9px] font-bold px-2 py-0.5 bg-slate-50 text-slate-400 rounded-md border border-slate-100">{tag}</span>
          ))}
        </div>
      </div>
      <div className="pt-6 mt-6 border-t border-slate-50 space-y-3">
        <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-medium">
          <Layers className="w-3 h-3 text-slate-300" />
          연계: <span className="text-slate-600">{link}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Bookmark className="w-4 h-4 text-slate-200 hover:text-indigo-500 transition-colors" />
            <div className="flex items-center gap-1 text-[10px] text-slate-400">
              <PlayCircle className="w-3 h-3" /> {views}
            </div>
            <div className="flex items-center gap-1 text-[10px] text-slate-400">
              <Zap className="w-3 h-3" /> {rate}
            </div>
          </div>
          <button className="p-1 text-slate-300 hover:text-slate-600">
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

function StepItem({ step, title, count, active = false }: { step: string, title: string, count: string, active?: boolean }) {
  return (
    <div className={`flex-1 min-w-[140px] p-5 rounded-2xl border text-center transition-all ${active ? 'bg-indigo-50 border-indigo-200 shadow-sm' : 'bg-white border-slate-100'}`}>
      <p className="text-[10px] font-black text-slate-400 mb-1">{step}</p>
      <h5 className="text-sm font-black text-slate-800 mb-3">{title}</h5>
      <span className={`text-[10px] px-3 py-1 rounded-full font-bold ${active ? 'bg-indigo-600 text-white' : 'bg-slate-50 text-slate-400'}`}>추천 실습 {count}계</span>
    </div>
  );
}

function StepArrow() {
  return <ArrowRight className="w-5 h-5 text-slate-200 hidden lg:block" />;
}
