import { 
  Layers, ArrowRight, Zap, CheckCircle2, 
  Bookmark, Edit3, PlayCircle, 
  Star, 
  PlusCircle, Upload, Moon, MessageSquare, LineChart, 
  ShieldCheck, MoreHorizontal, Lightbulb, Search, ChevronDown
} from 'lucide-react';
import Link from 'next/link';

export default function PracticePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans transition-colors">

      {/* --- Header Area --- */}
      <header className="bg-slate-50 dark:bg-[#0f172a] text-slate-900 dark:text-white py-12 transition-colors border-b border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="space-y-4">
            <h1 className="text-3xl font-black">기능 실습</h1>
            <p className="text-slate-400 max-w-md leading-relaxed text-sm">
              작은 기능부터 직접 만들어보며 실력을 쌓아보세요.<br />
              실전에서 자주 사용하는 기능들을 단계별로 구현해보고<br />
              코딩 감각을 익히고 응용력을 키워보세요.
            </p>
            <div className="flex gap-3 pt-2">
              <button className="bg-indigo-600 hover:bg-indigo-500 px-5 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all">
                <PlusCircle className="w-4 h-4" /> 실습 프로젝트 추가 제안
              </button>
              <button className="bg-white/10 hover:bg-white/20 border border-white/10 px-5 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all">
                <Bookmark className="w-4 h-4" /> 내 실습 모아보기
              </button>
            </div>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 w-full max-w-lg grid grid-cols-4 gap-4 text-center">
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
              <h3 className="text-xs font-black text-slate-800 dark:text-white uppercase tracking-widest">연계 커리큘럼</h3>
              <div className="relative">
                <select className="w-full bg-card dark:bg-slate-800/50 border border-border rounded-lg px-4 py-2 text-sm font-bold text-slate-600 dark:text-slate-400 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors cursor-pointer">
                  <option>전체 단계</option>
                  <option>1단계 - 기본 기초</option>
                  <option>2단계 - 상태 관리</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-black text-slate-800 dark:text-white uppercase tracking-widest">기술 스택</h3>
              <div className="relative">
                <select className="w-full bg-card dark:bg-slate-800/50 border border-border rounded-lg px-4 py-2 text-sm font-bold text-slate-600 dark:text-slate-400 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors cursor-pointer">
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
          <div className="bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 rounded-xl p-5 space-y-3 transition-colors">
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
               <Lightbulb className="w-4 h-4" />
               <h4 className="text-xs font-black">실습 아이디어</h4>
            </div>
            <p className="text-[10px] text-indigo-700/70 dark:text-indigo-300/60 leading-relaxed font-medium">
              직접 만들어보고 싶은 기능이 있나요? 아이디어를 제안해주시면 실습 리스트에 추가됩니다!
            </p>
            <button className="w-full bg-white dark:bg-white/10 py-2 rounded-lg text-[10px] font-black text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white transition-all shadow-sm">
              아이디어 제안하기
            </button>
          </div>
        </aside>

        {/* Practice Grid */}
        <div className="flex-1 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
             <div className="relative flex-1">
               <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
               <input 
                 type="text" 
                 placeholder="어떤 기능을 구현해볼까요?" 
                 className="w-full bg-card dark:bg-slate-800/50 border border-border rounded-2xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors dark:text-white"
               />
             </div>
             <div className="flex gap-2">
               <button className="px-4 py-3 bg-card dark:bg-slate-800/50 border border-border rounded-xl text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-indigo-600 transition-colors">최신순</button>
               <button className="px-4 py-3 bg-card dark:bg-slate-800/50 border border-border rounded-xl text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-indigo-600 transition-colors">인기순</button>
               <button className="px-4 py-3 bg-card dark:bg-slate-800/50 border border-border rounded-xl text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-indigo-600 transition-colors">난이도순</button>
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
            <button className="bg-white border border-slate-200 px-8 py-3 rounded-xl font-bold text-slate-600 hover:shadow-md transition-all flex items-center gap-2">
              더 많은 실습 보기 <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </main>

      {/* --- Connection Footer --- */}
      <section className="bg-white border-t border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
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
          
          <div className="bg-indigo-50 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 border border-indigo-100 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-indigo-600 text-white rounded-xl">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <p className="text-indigo-600 dark:text-indigo-400 font-black text-sm uppercase tracking-widest mb-1">TIP</p>
                <p className="text-slate-700 dark:text-slate-200 text-sm font-bold">실습을 완료하고 나면 커리큘럼 회차에 기록해 보세요!</p>
                <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">학습 기록을 남기면 나중에 복습하기에도 좋아요.</p>
              </div>
            </div>
            <Link href="/curriculum" className="bg-white dark:bg-white/10 px-6 py-3 rounded-lg text-indigo-600 dark:text-indigo-400 font-bold text-sm shadow-sm hover:shadow-md transition-all border border-indigo-50 dark:border-white/10">
              커리큘럼으로 기록하기 →
            </Link>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
    </div>
  );
}

// Helper Components
function StatusCard({ icon: Icon, label, count, unit, color }: { icon: React.ElementType, label: string, count: string, unit: string, color: string }) {
  return (
    <div className="space-y-2 group cursor-pointer">
      <div className={`p-2 rounded-lg bg-white/5 border border-white/5 flex justify-center group-hover:bg-white/10 transition-colors`}>
        <Icon className={`w-5 h-5 ${color}`} />
      </div>
      <div>
        <p className="text-[10px] text-slate-500 font-medium whitespace-nowrap">{label}</p>
        <p className="text-xl font-bold dark:text-white">{count}<span className="text-xs font-normal ml-0.5">{unit}</span></p>
      </div>
    </div>
  );
}

function FilterSection({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h3 className="text-xs font-black text-slate-800 dark:text-white uppercase tracking-widest">{title}</h3>
      <div className="space-y-2">
        {children}
      </div>
    </div>
  );
}

function Checkbox({ label, checked = false }: { label: string, checked?: boolean }) {
  return (
    <label className="flex items-center gap-2.5 group cursor-pointer">
      <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${
        checked ? 'bg-indigo-600 border-indigo-600' : 'border-slate-200 dark:border-slate-700 group-hover:border-indigo-400'
      }`}>
        {checked && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
      </div>
      <span className={`text-xs font-bold transition-colors ${checked ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-200'}`}>{label}</span>
    </label>
  );
}


function ProjectCard({ icon: Icon, level, title, desc, tags, link, views, rate }: { icon: React.ElementType, level: string, title: string, desc: string, tags: string[], link: string, views: string, rate: string }) {
  const levelColors: Record<string, string> = {
    '입문': 'text-green-500 bg-green-50 dark:bg-green-500/10 dark:text-green-400',
    '초급': 'text-orange-500 bg-orange-50 dark:bg-orange-500/10 dark:text-orange-400',
    '중급': 'text-indigo-500 bg-indigo-50 dark:bg-indigo-500/10 dark:text-indigo-400',
    '고급': 'text-red-500 bg-red-50 dark:bg-red-500/10 dark:text-red-400'
  };

  return (
    <div className="bg-card rounded-2xl border border-border p-6 flex flex-col justify-between group hover:shadow-xl hover:border-indigo-200 dark:hover:border-indigo-500/50 transition-all duration-500 cursor-pointer overflow-hidden relative">
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="p-3 bg-slate-50 dark:bg-white/5 rounded-xl text-slate-700 dark:text-slate-300 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-500/10 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            <Icon className="w-6 h-6" />
          </div>
          <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${levelColors[level]}`}>{level}</span>
        </div>
        <div>
          <h4 className="text-sm font-black text-slate-800 dark:text-white mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{title}</h4>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">{desc}</p>
        </div>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {tags.map((tag, i) => (
            <span key={i} className="text-[9px] font-bold px-2 py-0.5 bg-slate-50 dark:bg-white/5 text-slate-400 dark:text-slate-500 rounded-md border border-slate-100 dark:border-border transition-colors">{tag}</span>
          ))}
        </div>
      </div>
      <div className="pt-6 mt-6 border-t border-border space-y-3 transition-colors">
        <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-medium">
          <Layers className="w-3 h-3 text-slate-300 dark:text-slate-700" />
          연계: <span className="text-slate-600 dark:text-slate-400">{link}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Bookmark className="w-4 h-4 text-slate-200 dark:text-slate-700 hover:text-indigo-500 transition-colors" />
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
    <div className={`flex-1 min-w-[140px] p-5 rounded-xl border text-center transition-all ${active ? 'bg-indigo-50 border-indigo-200 shadow-sm' : 'bg-white border-slate-100'}`}>
      <p className="text-[10px] font-black text-slate-400 mb-1">{step}</p>
      <h5 className="text-sm font-black text-slate-800 mb-3">{title}</h5>
      <span className={`text-[10px] px-3 py-1 rounded-full font-bold ${active ? 'bg-indigo-600 text-white' : 'bg-slate-50 text-slate-400'}`}>추천 실습 {count}계</span>
    </div>
  );
}

function StepArrow() {
  return <ArrowRight className="w-5 h-5 text-slate-200 hidden lg:block" />;
}
