import React from 'react';
import { 
  Code2, BookOpen, Layers, 
  Terminal, ArrowRight, Zap, FileText, ChevronRight,
  Flame, Database, Upload, Moon, Lightbulb,
  MessageSquare, Layout
} from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col transition-colors">
      <Navbar />

      {/* --- Hero Section --- */}
      <section className="bg-slate-50 dark:bg-[#0f172a] text-slate-900 dark:text-white px-6 pt-16 pb-24 relative overflow-hidden transition-colors">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.1),transparent)] dark:bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.15),transparent)] pointer-events-none" />
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl font-black leading-tight text-slate-900 dark:text-white">
              바이브 코딩 커리큘럼<br />
              <span className="text-indigo-600 dark:text-indigo-400">직접 만들며 배우는 실전 학습</span>
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-lg leading-relaxed">
              스터디 기록과 실습 프로젝트, 유용한 자료를 한 곳에서.<br />
              함께 성장하는 바이브 코딩 스터디 공간입니다.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/curriculum" className="bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all hover:-translate-y-1 shadow-lg shadow-indigo-600/20 text-white">
                <BookOpen className="w-5 h-5" />
                커리큘럼 시작하기 <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/practice" className="bg-white dark:bg-white/10 hover:bg-slate-50 dark:hover:bg-white/20 border border-slate-200 dark:border-white/10 px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all text-slate-700 dark:text-white">
                <Terminal className="w-5 h-5" />
                기능 실습 보러가기 <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-md relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-20 dark:opacity-30 group-hover:opacity-40 dark:group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
            <div className="bg-white dark:bg-[#1e293b] rounded-2xl border border-slate-200 dark:border-white/10 shadow-xl dark:shadow-2xl overflow-hidden relative">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-slate-800/50">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-4 text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest">Welcome.jsx</span>
              </div>
              <div className="p-6 font-mono text-sm leading-relaxed">
                <div className="text-slate-400 dark:text-slate-500 mb-2">1  export default function Welcome() &#123;</div>
                <div className="text-slate-400 dark:text-slate-500 mb-2">2    return (</div>
                <div className="text-slate-400 dark:text-slate-500 ml-4 mb-2">3      &lt;div className=&quot;welcome&quot;&gt;</div>
                <div className="text-indigo-600 dark:text-white ml-8 mb-2">4        &lt;h1&gt;Vibe Coding&lt;/h1&gt;</div>
                <div className="text-slate-600 dark:text-slate-300 ml-8 mb-2">5        &lt;p&gt;코딩의 즐거움, 함께 성장해요 🚀&lt;/p&gt;</div>
                <div className="text-slate-400 dark:text-slate-500 ml-4 mb-2">6      &lt;/div&gt;</div>
                <div className="text-slate-400 dark:text-slate-500 mb-2">7    )</div>
                <div className="text-slate-400 dark:text-slate-500">8  &#125;</div>
              </div>
              <div className="absolute bottom-4 right-4 bg-indigo-600/90 text-white text-xs font-bold px-4 py-2 rounded-lg backdrop-blur-md shadow-xl border border-white/20">
                Let&apos;s Vibe Coding! ✨
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- Main Content --- */}
      <main className="max-w-6xl mx-auto w-full px-6 -mt-12 space-y-12 pb-24 relative z-20">
        
        {/* Progress Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-3xl shadow-sm border border-border flex flex-col justify-between group hover:shadow-xl transition-all duration-500 cursor-pointer">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-indigo-100 dark:bg-indigo-500/20 rounded-2xl text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">현재 진행 중</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-white">3회차: 상태관리 이해</h3>
              <div className="mt-4 mb-2 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>진행률</span>
                <span className="font-bold text-indigo-600 dark:text-indigo-400">75%</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-white/5 h-2 rounded-full overflow-hidden">
                <div className="bg-indigo-500 h-full w-3/4 rounded-full" />
              </div>
            </div>
            <button className="mt-6 text-sm font-bold text-slate-400 hover:text-indigo-600 dark:hover:text-white flex items-center gap-1 transition-colors">
              이어보기 <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-card p-6 rounded-3xl shadow-sm border border-border flex flex-col justify-between group hover:shadow-xl transition-all duration-500 cursor-pointer">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-green-100 dark:bg-green-500/20 rounded-2xl text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform">
                <BookOpen className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">처음 오셨나요?</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-white">입문부터 시작하기</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">1회차부터 차근차근 학습해보세요.</p>
            </div>
            <button className="mt-10 bg-slate-100 dark:bg-white/10 px-4 py-2 rounded-xl text-sm font-bold text-slate-600 dark:text-slate-300 group-hover:bg-green-600 group-hover:text-white transition-all flex items-center justify-center gap-1">
              1회차 바로가기 <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-card p-6 rounded-3xl shadow-sm border border-border flex flex-col justify-between group hover:shadow-xl transition-all duration-500 cursor-pointer">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-orange-100 dark:bg-orange-500/20 rounded-2xl text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform">
                <Flame className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">인기 실습 프로젝트</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-white">로그인 기능 만들기</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">가장 많이 학습한 실습 프로젝트예요.</p>
            </div>
            <button className="mt-10 text-sm font-bold text-slate-400 hover:text-orange-600 dark:hover:text-white flex items-center gap-1 transition-colors">
              실습 보러가기 <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Roadmap & Highlights Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Roadmap */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold flex items-center gap-2 text-slate-900 dark:text-white">
                커리큘럼 로드맵 <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              </h2>
              <a href="#" className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline">전체 커리큘럼 보기 →</a>
            </div>
            <div className="bg-card p-8 rounded-3xl border border-border shadow-sm flex items-center justify-between relative overflow-hidden">
               <div className="absolute top-1/2 left-0 w-full h-[1px] bg-slate-100 dark:bg-white/5 -translate-y-1/2 z-0" />
               <div className="flex flex-col items-center gap-3 z-10">
                 <div className="p-3 bg-green-50 dark:bg-green-500/10 rounded-2xl text-green-600 dark:text-green-400 shadow-sm">
                   <Zap className="w-6 h-6" />
                 </div>
                 <span className="text-xs font-bold text-green-600 dark:text-green-400">입문</span>
               </div>
               <div className="flex flex-col items-center gap-3 z-10">
                 <div className="p-3 bg-blue-50 dark:bg-blue-500/10 rounded-2xl text-blue-600 dark:text-blue-400 shadow-sm">
                   <Code2 className="w-6 h-6" />
                 </div>
                 <span className="text-xs font-bold text-slate-600 opacity-50">기초</span>
               </div>
               <div className="flex flex-col items-center gap-3 z-10">
                 <div className="p-3 bg-purple-50 rounded-2xl text-purple-600 shadow-sm border-2 border-purple-200 animate-bounce">
                   <Layers className="w-6 h-6" />
                 </div>
                 <span className="text-xs font-bold text-purple-600">실전</span>
               </div>
               <div className="flex flex-col items-center gap-3 z-10">
                 <div className="p-3 bg-orange-50 rounded-2xl text-orange-600 shadow-sm">
                   <Lightbulb className="w-6 h-6" />
                 </div>
                 <span className="text-xs font-bold text-slate-600 opacity-50">심화</span>
               </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">기능 실습 하이라이트</h2>
              <a href="#" className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline">전체 실습 보기 →</a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                { icon: Database, label: "CRUD 구현", color: "text-green-500", bg: "bg-green-50 dark:bg-green-500/10" },
                { icon: Upload, label: "파일 업로드", color: "text-orange-500", bg: "bg-orange-50 dark:bg-orange-500/10" },
                { icon: Moon, label: "다크모드", color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-500/10" },
                { icon: Terminal, label: "CLI 툴", color: "text-slate-500", bg: "bg-slate-50 dark:bg-white/5" }
              ].map((item, i) => (
                <div key={i} className="bg-card p-4 rounded-3xl border border-border hover:-translate-y-1 transition-all cursor-pointer group">
                  <div className={`p-3 ${item.bg} ${item.color} rounded-2xl mb-3 flex justify-center group-hover:rotate-12 transition-transform`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Lists Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          {/* Latest Records */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-slate-900 dark:text-white">최신 스터디 기록</h3>
              <button className="text-xs text-indigo-600 dark:text-indigo-400 font-bold hover:underline">전체 보기 →</button>
            </div>
            <div className="bg-card rounded-3xl border border-border overflow-hidden divide-y divide-border">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-white/5 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-lg">
                      <FileText className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{i}회차 - 실습 기록</span>
                  </div>
                  <span className="text-xs text-slate-400">2024.05.{20-i}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Library */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-slate-900 dark:text-white">자료실 하이라이트</h3>
              <button className="text-xs text-indigo-600 dark:text-indigo-400 font-bold hover:underline">전체 보기 →</button>
            </div>
            <div className="space-y-3">
              {[
                { title: "유용한 웹사이트 모음", badge: "사이트", color: "bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400" },
                { title: "AI 개발 도구 모음", badge: "도구", color: "bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400" },
                { title: "디자인 리소스 모음", badge: "리소스", color: "bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400" }
              ].map((item, i) => (
                <div key={i} className="bg-card p-4 rounded-2xl border border-border flex items-center justify-between hover:border-indigo-300 dark:hover:border-indigo-500 transition-all cursor-pointer">
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{item.title}</span>
                  <span className={`text-[10px] px-2 py-1 rounded-full font-black ${item.color}`}>{item.badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Guide */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-slate-900 dark:text-white">기본 가이드</h3>
              <button className="text-xs text-indigo-600 dark:text-indigo-400 font-bold hover:underline">전체 보기 →</button>
            </div>
            <div className="space-y-3">
              {[
                { title: "바이브 코딩이란?", icon: Zap },
                { title: "어떻게 공부해야 할까?", icon: MessageSquare },
                { title: "추천 학습 순서", icon: Layout }
              ].map((item, i) => (
                <div key={i} className="bg-indigo-600 p-4 rounded-2xl text-white flex items-center justify-between hover:bg-indigo-500 transition-all cursor-pointer group shadow-lg shadow-indigo-600/10">
                  <div className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-indigo-200" />
                    <span className="text-sm font-bold">{item.title}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
