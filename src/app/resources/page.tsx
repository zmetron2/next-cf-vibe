import React from 'react';
import { 
  Search, Code2, ArrowRight, Zap, 
  Bookmark, ChevronDown, Bell, Star, 
  Moon, 
  MoreHorizontal, 
  FileText, Globe, Video, Folder, Terminal, 
  Cpu, Palette, Cloud, Database, ExternalLink,
  ChevronLeft, ChevronRight, Hash, Github, Layout
} from 'lucide-react';
import Link from 'next/link';

export default function ResourcesPage() {
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
            <Link href="/resources" className="text-white border-b-2 border-indigo-500 pb-1">자료실</Link>
            <Link href="/guide" className="hover:text-white transition-colors">기본가이드</Link>
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
            <h1 className="text-3xl font-black">자료실</h1>
            <p className="text-slate-400 max-w-md leading-relaxed text-sm">
              스터디에 필요한 유용한 웹사이트와 자료들을 모아두었습니다.<br />
              개발에 도움이 되는 도구, 학습 자료, 참고 사이트를 한 곳에서<br />
              찾아보고 활용해보세요.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="자료 검색 (예: React, 디자인, API...)" 
                  className="bg-white/10 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                />
              </div>
              <button className="bg-white/10 hover:bg-white/20 border border-white/10 px-5 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-all">
                <Star className="w-4 h-4" /> 즐겨찾기 모아보기
              </button>
            </div>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-md border border-white/10 rounded-3xl p-6 w-full max-w-lg grid grid-cols-4 gap-4 text-center">
            <header className="col-span-4 hidden invisible">Statistics</header>
            <StatusCard icon={Folder} label="전체 자료" count="128" color="text-purple-400" />
            <StatusCard icon={Globe} label="웹사이트" count="86" color="text-blue-400" />
            <StatusCard icon={FileText} label="문서/가이드" count="28" color="text-green-400" />
            <StatusCard icon={Video} label="동영상" count="14" color="text-orange-400" />
          </div>
        </div>
      </header>

      {/* --- Main Content --- */}
      <main className="max-w-7xl mx-auto w-full px-6 py-10 flex flex-col lg:flex-row gap-8">
        
        {/* Left Sidebar */}
        <aside className="lg:w-64 space-y-8 shrink-0">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-6 shadow-sm">
            <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest">카테고리</h3>
            <div className="space-y-1">
              <CategoryItem label="전체" count="128" active />
              <CategoryItem label="개발 도구" count="24" icon={Terminal} />
              <CategoryItem label="프론트엔드" count="32" icon={LayoutIcon} />
              <CategoryItem label="백엔드" count="18" icon={Database} />
              <CategoryItem label="데이터베이스" count="12" icon={Cloud} />
              <CategoryItem label="디자인/UX" count="15" icon={Palette} />
              <CategoryItem label="배포/인프라" count="10" icon={Cpu} />
              <CategoryItem label="AI/Automation" count="8" icon={Zap} />
              <CategoryItem label="기타" count="9" icon={MoreHorizontal} />
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-4 shadow-sm">
            <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest">자료 제안하기</h3>
            <p className="text-[10px] text-slate-500 leading-relaxed">
              스터디에 도움이 되는 자료를 공유해주세요!
            </p>
            <button className="w-full bg-slate-50 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-indigo-600 hover:text-white transition-all border border-slate-100 flex items-center justify-center gap-2">
              자료 제안하기 <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest">인기 검색어</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'Tailwind CSS', 'API', 'JavaScript', '디자인 시스템', 'Supabase', 'Figma', 'Git', 'Docker'].map((tag) => (
                <span key={tag} className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-[10px] font-bold text-slate-600 hover:border-indigo-400 hover:text-indigo-600 cursor-pointer transition-all">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest">최근 추가된 자료</h3>
            <div className="space-y-3">
              <RecentResource title="ChatGPT 프롬프트 가이드" category="AI/Automation" date="2024.05.20" icon={Zap} />
              <RecentResource title="Vercel 배포 가이드" category="배포/인프라" date="2024.05.18" icon={Cloud} />
              <RecentResource title="Zustand 상태관리 가이드" category="프론트엔드" date="2024.05.16" icon={LayoutIcon} />
            </div>
            <button className="w-full text-center text-[10px] font-bold text-indigo-600 hover:underline">전체 보기 →</button>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 space-y-8">
          {/* Top Recommendations */}
          <div className="space-y-6">
            <h2 className="text-xl font-black text-slate-800">카테고리별 추천 자료</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 overflow-x-auto no-scrollbar">
              <RecommendCard label="프론트엔드" desc="유용한 프론트엔드 관련 자료 모음" count="32" icon={LayoutIcon} color="bg-indigo-50 text-indigo-600" />
              <RecommendCard label="백엔드" desc="서버, API, 백엔드 관련 자료 모음" count="18" icon={Database} color="bg-blue-50 text-blue-600" />
              <RecommendCard label="디자인/UX" desc="UI 디자인과 UX 관련 자료 모음" count="15" icon={Palette} color="bg-pink-50 text-pink-600" />
              <RecommendCard label="배포/인프라" desc="서비스 배포와 인프라 관련 자료 모음" count="10" icon={Cloud} color="bg-orange-50 text-orange-600" />
              <RecommendCard label="AI/Automation" desc="AI 도구와 자동화 관련 자료 모음" count="8" icon={Zap} color="bg-purple-50 text-purple-600" />
            </div>
          </div>

          {/* List Controls */}
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center border-b border-slate-200 pb-4">
            <div className="flex gap-1 bg-slate-100 p-1 rounded-xl">
              <TabItem label="최신순" active />
              <TabItem label="인기순" />
              <TabItem label="즐겨찾기순" />
            </div>
            <div className="relative">
              <select className="bg-white border border-slate-200 rounded-xl px-4 py-2 text-xs font-bold text-slate-600 appearance-none pr-8">
                <option>전체 유형</option>
                <option>웹사이트</option>
                <option>문서/가이드</option>
                <option>동영상</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
            </div>
          </div>

          {/* Resource List */}
          <div className="space-y-4">
            <ResourceItem 
              icon="MDN" 
              title="MDN Web Docs" 
              desc="웹 개발을 위한 종합 문서. HTML, CSS, JavaScript 등 웹 기술에 대한 상세한 가이드와 레퍼런스를 제공합니다." 
              tags={['웹사이트', '프론트엔드']} 
              provider="모질라 개발자 네트워크"
              rating="4.9"
              date="2024.05.20"
            />
            <ResourceItem 
              icon="React" 
              title="React 공식 문서" 
              desc="React 공식 문서 사이트. React의 모든 기능과 개념에 대한 상세한 가이드와 예제를 제공합니다." 
              tags={['웹사이트', '프론트엔드']} 
              provider="React Team"
              rating="4.8"
              date="2024.05.19"
            />
            <ResourceItem 
              icon="Tailwind" 
              title="Tailwind CSS 문서" 
              desc="유틸리티 퍼스트 CSS 프레임워크인 Tailwind CSS의 공식 문서입니다. 빠른 UI 개발을 위한 다양한 유틸리티 클래스를 제공합니다." 
              tags={['웹사이트', '프론트엔드', 'CSS']} 
              provider="Tailwind Labs"
              rating="4.7"
              date="2024.05.18"
            />
            <ResourceItem 
              icon="Git" 
              title="Git 공식 문서" 
              desc="Git의 모든 명령어와 개념에 대한 공식 문서입니다. 버전 관리 시스템을 완벽하게 이해할 수 있습니다." 
              tags={['웹사이트', '개발 도구', '백엔드']} 
              provider="Git"
              rating="4.8"
              date="2024.05.17"
            />
            <ResourceItem 
              icon="Next" 
              title="Next.js 공식 문서" 
              desc="React 기반의 풀스택 웹 프레임워크 Next.js의 공식 문서입니다. App Router, Server Components 등 최신 기능을 다룹니다." 
              tags={['웹사이트', '프론트엔드', '백엔드']} 
              provider="Vercel"
              rating="4.9"
              date="2024.05.16"
            />
            <ResourceItem 
              icon="Figma" 
              title="Figma 디자인 시스템 가이드" 
              desc="효과적인 디자인 시스템 구축을 위한 Figma 가이드입니다. 컴포넌트, 스타일, 라이브러리 관리 방법을 다룹니다." 
              tags={['문서', '디자인/UX']} 
              provider="Figma"
              rating="4.6"
              date="2024.05.15"
            />
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 pt-8">
            <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400"><ChevronLeft className="w-4 h-4" /></button>
            <button className="w-8 h-8 rounded-lg bg-indigo-600 text-white text-xs font-bold">1</button>
            <button className="w-8 h-8 rounded-lg hover:bg-slate-100 text-slate-500 text-xs font-bold">2</button>
            <button className="w-8 h-8 rounded-lg hover:bg-slate-100 text-slate-500 text-xs font-bold">3</button>
            <span className="text-slate-300">...</span>
            <button className="w-8 h-8 rounded-lg hover:bg-slate-100 text-slate-500 text-xs font-bold">11</button>
            <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400"><ChevronRight className="w-4 h-4" /></button>
          </div>
        </div>
      </main>

      {/* --- Footer --- */}
      <footer className="bg-[#0f172a] text-white px-6 py-16 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4 col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
              <div className="bg-indigo-500 p-1 rounded-lg">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span>Vibe Coding</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">함께 배우고 성장하는 바이브 코딩 스터디 공간</p>
            <div className="flex gap-4 pt-2">
              <Github className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer transition-colors" />
              <Moon className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer transition-colors" />
              <Hash className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
          
          <FooterNav title="사이트" links={['커리큘럼', '기능실습', '자료실', '기본가이드']} />
          <FooterNav title="문의" links={['문의하기', '피드백', '자료 제안']} />
          <FooterNav title="기타" links={['업데이트 로그', '이용 약관', '개인정보 처리방침']} />
        </div>
        <div className="max-w-7xl mx-auto border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">© 2024 Vibe Coding. All rights reserved.</p>
          <button className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/20">
            <ChevronDown className="w-6 h-6 rotate-180" />
          </button>
        </div>
      </footer>
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
        <p className="text-xl font-bold">{count}</p>
      </div>
    </div>
  );
}

function CategoryItem({ label, count, icon: Icon, active = false }: { label: string, count: string, icon?: React.ElementType, active?: boolean }) {
  return (
    <div className={`flex items-center justify-between p-2 rounded-xl cursor-pointer transition-all ${active ? 'bg-indigo-50 text-indigo-600' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'}`}>
      <div className="flex items-center gap-3">
        {Icon ? <Icon className="w-4 h-4" /> : <div className="w-4 h-4" />}
        <span className="text-xs font-bold">{label}</span>
      </div>
      <span className="text-[10px] font-medium opacity-50">{count}</span>
    </div>
  );
}

function RecentResource({ title, category, date, icon: Icon }: { title: string, category: string, date: string, icon: React.ElementType }) {
  return (
    <div className="flex items-center gap-3 group cursor-pointer">
      <div className="p-2 bg-slate-50 text-slate-400 rounded-lg group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-all">
        <Icon className="w-4 h-4" />
      </div>
      <div className="overflow-hidden">
        <p className="text-[10px] font-bold text-slate-700 truncate">{title}</p>
        <p className="text-[9px] text-slate-400 mt-0.5">{category} · {date}</p>
      </div>
    </div>
  );
}

function RecommendCard({ label, desc, count, icon: Icon, color }: { label: string, desc: string, count: string, icon: React.ElementType, color: string }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 flex flex-col justify-between min-w-[160px] group hover:shadow-lg transition-all cursor-pointer">
      <div className="space-y-3">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${color} group-hover:rotate-12 transition-transform`}>
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <h4 className="text-xs font-black text-slate-800 mb-1">{label}</h4>
          <p className="text-[9px] text-slate-400 leading-tight">{desc}</p>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between">
        <span className="text-[9px] font-bold text-slate-400">{count}개 자료</span>
        <ArrowRight className="w-3 h-3 text-slate-300 group-hover:translate-x-1 transition-all" />
      </div>
    </div>
  );
}

function TabItem({ label, active = false }: { label: string, active?: boolean }) {
  return (
    <button className={`px-4 py-1.5 rounded-lg text-[10px] font-black transition-all ${active ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}>
      {label}
    </button>
  );
}

function ResourceItem({ icon, title, desc, tags, provider, rating, date }: { icon: string, title: string, desc: string, tags: string[], provider: string, rating: string, date: string }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col md:flex-row gap-6 hover:shadow-md transition-all cursor-pointer group">
      <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-[10px] font-black text-white shrink-0 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div className="flex-1 space-y-3">
        <div className="space-y-1">
          <h4 className="text-base font-black text-slate-800 group-hover:text-indigo-600 transition-colors">{title}</h4>
          <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">{desc}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span key={i} className="text-[9px] font-bold px-2 py-0.5 bg-slate-50 text-slate-400 rounded-md border border-slate-100">{tag}</span>
          ))}
        </div>
      </div>
      <div className="md:w-48 space-y-3 text-right">
        <div className="space-y-1">
          <p className="text-[10px] font-bold text-slate-500">{provider}</p>
          <div className="flex items-center justify-end gap-1 text-[10px] text-yellow-500 font-bold">
            <Star className="w-3 h-3 fill-yellow-500" /> {rating}
          </div>
          <p className="text-[10px] text-slate-300">{date}</p>
        </div>
        <div className="flex justify-end gap-3">
          <Bookmark className="w-4 h-4 text-slate-200 hover:text-indigo-500 transition-colors" />
          <ExternalLink className="w-4 h-4 text-slate-200 hover:text-indigo-600 transition-colors" />
        </div>
      </div>
    </div>
  );
}

function FooterNav({ title, links }: { title: string, links: string[] }) {
  return (
    <div className="space-y-4">
      <h4 className="text-xs font-black text-white uppercase tracking-widest">{title}</h4>
      <div className="flex flex-col gap-2">
        {links.map((link) => (
          <a key={link} href="#" className="text-xs text-slate-500 hover:text-white transition-colors">{link}</a>
        ))}
      </div>
    </div>
  );
}

function LayoutIcon({ className }: { className: string }) {
  return <Layout className={className} />;
}
