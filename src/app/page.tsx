import React from 'react';
import Link from 'next/link';
import { 
  BookOpen, Terminal, ArrowRight, Zap, Flame, Layout, Rocket, 
  Leaf, Code2, Star, Lock, ListTodo, Upload, Moon, 
  FileText, Globe, Box, Image as ImageIcon, Info, Compass, Map, Bookmark
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function HomePage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-foreground flex flex-col font-sans">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-12 w-full flex flex-col gap-8">
        
        {/* Top Row: Roadmap & Practice Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* 커리큘럼 로드맵 */}
          <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-black">커리큘럼 로드맵</h2>
              <Link href="/curriculum" className="text-primary text-sm font-bold flex items-center gap-1 hover:underline">
                전체 커리큘럼 보기 <ArrowRight size={14} />
              </Link>
            </div>
            
            <div className="flex flex-wrap justify-between items-start gap-4 relative">
              {/* Roadmap Steps */}
              <div className="flex flex-col items-center text-center gap-4 flex-1 min-w-[100px]">
                <div className="w-14 h-14 rounded-2xl bg-green-50 dark:bg-green-500/10 flex items-center justify-center text-green-500 shadow-inner">
                  <Leaf size={28} />
                </div>
                <div>
                  <div className="font-bold text-green-600 dark:text-green-400 mb-1">입문</div>
                  <div className="text-[11px] opacity-60 leading-tight">HTML, CSS, JS<br/>기본 개념 학습</div>
                </div>
              </div>

              <div className="hidden sm:flex items-center pt-7 opacity-20 flex-1 justify-center">
                <div className="border-t-2 border-dotted border-slate-400 w-full"></div>
              </div>

              <div className="flex flex-col items-center text-center gap-4 flex-1 min-w-[100px]">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-500 shadow-inner">
                  <Code2 size={28} />
                </div>
                <div>
                  <div className="font-bold text-slate-700 dark:text-slate-300 mb-1">기초</div>
                  <div className="text-[11px] opacity-60 leading-tight">JavaScript 심화<br/>API, 비동기 처리</div>
                </div>
              </div>

              <div className="hidden sm:flex items-center pt-7 opacity-20 flex-1 justify-center">
                <div className="border-t-2 border-dotted border-slate-400 w-full"></div>
              </div>

              <div className="flex flex-col items-center text-center gap-4 flex-1 min-w-[100px]">
                <div className="w-14 h-14 rounded-2xl bg-purple-50 dark:bg-purple-500/10 flex items-center justify-center text-purple-500 shadow-inner">
                  <Rocket size={28} />
                </div>
                <div>
                  <div className="font-bold text-primary mb-1">실전</div>
                  <div className="text-[11px] opacity-60 leading-tight">프로젝트로 배우는<br/>실전 개발</div>
                </div>
              </div>

              <div className="hidden sm:flex items-center pt-7 opacity-20 flex-1 justify-center">
                <div className="border-t-2 border-dotted border-slate-400 w-full"></div>
              </div>

              <div className="flex flex-col items-center text-center gap-4 flex-1 min-w-[100px]">
                <div className="w-14 h-14 rounded-2xl bg-orange-50 dark:bg-orange-500/10 flex items-center justify-center text-orange-400 shadow-inner border border-orange-200/50">
                  <Star size={28} />
                </div>
                <div>
                  <div className="font-bold text-slate-700 dark:text-slate-300 mb-1">심화</div>
                  <div className="text-[11px] opacity-60 leading-tight">구조 설계, 성능 최적화<br/>더 나아가기</div>
                </div>
              </div>
            </div>
          </div>

          {/* 기능 실습 하이라이트 */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-black">기능 실습 하이라이트</h2>
              <Link href="/practice" className="text-primary text-sm font-bold flex items-center gap-1 hover:underline">
                전체 실습 보기 <ArrowRight size={14} />
              </Link>
            </div>
            
            <div className="flex flex-col gap-3 flex-1">
              {/* Practice Cards */}
              <div className="group flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-transparent hover:border-primary/30 transition-all cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <Lock size={20} />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-bold flex items-center gap-2">
                    로그인 기능 만들기 <span className="text-[10px] bg-yellow-400/20 text-yellow-600 px-1.5 py-0.5 rounded">인기</span>
                  </div>
                  <div className="text-[11px] opacity-50">로그인/회원가입 기능을 구현해보세요.</div>
                </div>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/30"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/30"></div>
                </div>
              </div>

              <div className="group flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-transparent hover:border-primary/30 transition-all cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-green-100 dark:bg-green-500/20 flex items-center justify-center text-green-600 dark:text-green-400">
                  <ListTodo size={20} />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-bold flex items-center gap-2">
                    게시판 CRUD <span className="text-[10px] bg-slate-200 dark:bg-slate-700 text-slate-500 px-1.5 py-0.5 rounded">데이터</span>
                  </div>
                  <div className="text-[11px] opacity-50">게시글 목록, 작성, 수정, 삭제 기능을 구현해보세요.</div>
                </div>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500/30"></div>
                </div>
              </div>

              <div className="group flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-transparent hover:border-primary/30 transition-all cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-500/20 flex items-center justify-center text-orange-600 dark:text-orange-400">
                  <Upload size={20} />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-bold flex items-center gap-2">
                    파일 업로드 <span className="text-[10px] bg-slate-200 dark:bg-slate-700 text-slate-500 px-1.5 py-0.5 rounded">파일</span>
                  </div>
                  <div className="text-[11px] opacity-50">파일 업로드 및 미리보기 기능을 구현해보세요.</div>
                </div>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500/30"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500/30"></div>
                </div>
              </div>

              <div className="group flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-transparent hover:border-primary/30 transition-all cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Moon size={20} />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-bold flex items-center gap-2">
                    다크모드 구현 <span className="text-[10px] bg-slate-200 dark:bg-slate-700 text-slate-500 px-1.5 py-0.5 rounded">UI/UX</span>
                  </div>
                  <div className="text-[11px] opacity-50">다크모드 전환 기능을 구현해보세요.</div>
                </div>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row: Study Records, Resources, Guide */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* 최신 스터디 기록 */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-black">최신 스터디 기록</h2>
              <Link href="/curriculum" className="text-primary text-sm font-bold flex items-center gap-1 hover:underline">
                전체 보기 <ArrowRight size={14} />
              </Link>
            </div>
            
            <div className="flex flex-col">
              {[
                { title: '5회차 - 상태관리 실습', tag: '기초', date: `${currentYear}.05.20` },
                { title: '4회차 - API 연결하기', tag: '기초', date: `${currentYear}.05.18` },
                { title: '3회차 - 비동기 처리 이해', tag: '기초', date: `${currentYear}.05.15` },
                { title: '2회차 - JavaScript 기본 문법', tag: '입문', date: `${currentYear}.05.12` },
                { title: '1회차 - 개발 환경 설정', tag: '입문', date: `${currentYear}.05.10` },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between py-3 border-b border-slate-100 dark:border-slate-800 last:border-0 group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <FileText size={16} className="text-primary/50 group-hover:text-primary transition-colors" />
                    <span className="text-sm font-medium group-hover:text-primary transition-colors">{item.title}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-slate-500">{item.tag}</span>
                    <span className="text-[10px] opacity-40 font-mono">{item.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 자료실 하이라이트 */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-black">자료실 하이라이트</h2>
              <Link href="/resources" className="text-primary text-sm font-bold flex items-center gap-1 hover:underline">
                전체 자료 보기 <ArrowRight size={14} />
              </Link>
            </div>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer group">
                <div className="w-10 h-10 rounded-xl bg-green-50 dark:bg-green-500/10 flex items-center justify-center text-green-500 shadow-sm">
                  <Globe size={20} />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-bold">유용한 웹사이트 모음</div>
                  <div className="text-[11px] opacity-50">개발에 도움이 되는 사이트들을 모아봤어요.</div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-[10px] px-2 py-0.5 bg-green-50 text-green-600 dark:bg-green-500/20 rounded font-bold">사이트</span>
                  <Bookmark size={14} className="opacity-40 group-hover:text-primary transition-colors" />
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer group">
                <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-500/10 flex items-center justify-center text-purple-500 shadow-sm">
                  <Box size={20} />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-bold">AI 개발 도구 모음</div>
                  <div className="text-[11px] opacity-50">바이브 코딩에 활용하기 좋은 AI 도구들</div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-[10px] px-2 py-0.5 bg-purple-50 text-purple-600 dark:bg-purple-500/20 rounded font-bold">도구</span>
                  <Bookmark size={14} className="opacity-40 group-hover:text-primary transition-colors" />
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer group">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-500 shadow-sm">
                  <ImageIcon size={20} />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-bold">디자인 리소스 모음</div>
                  <div className="text-[11px] opacity-50">프로젝트에 활용할 수 있는 디자인 리소스</div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-[10px] px-2 py-0.5 bg-blue-50 text-blue-600 dark:bg-blue-500/20 rounded font-bold">리소스</span>
                  <Bookmark size={14} className="opacity-40 group-hover:text-primary transition-colors" />
                </div>
              </div>
            </div>
          </div>

          {/* 기본 가이드 */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-black">기본 가이드</h2>
              <Link href="/guide" className="text-primary text-sm font-bold flex items-center gap-1 hover:underline">
                전체 가이드 보기 <ArrowRight size={14} />
              </Link>
            </div>
            
            <div className="flex flex-col gap-4">
              <Link href="/guide" className="flex items-center gap-4 p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 hover:shadow-md transition-all group">
                <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-indigo-500 shadow-sm">
                  <Info size={20} />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-bold">바이브 코딩이란?</div>
                  <div className="text-[11px] opacity-50">바이브 코딩의 개념과 장점을 알아보세요.</div>
                </div>
                <ArrowRight size={16} className="opacity-20 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Link>

              <Link href="/guide" className="flex items-center gap-4 p-4 rounded-2xl bg-teal-50 dark:bg-teal-500/10 hover:shadow-md transition-all group">
                <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-teal-500 shadow-sm">
                  <Compass size={20} />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-bold">어떻게 공부해야 할까?</div>
                  <div className="text-[11px] opacity-50">효과적인 학습 방법과 로드맵을 안내해드려요.</div>
                </div>
                <ArrowRight size={16} className="opacity-20 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Link>

              <Link href="/guide" className="flex items-center gap-4 p-4 rounded-2xl bg-orange-50 dark:bg-orange-500/10 hover:shadow-md transition-all group">
                <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-orange-500 shadow-sm">
                  <Map size={20} />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-bold">추천 학습 순서</div>
                  <div className="text-[11px] opacity-50">초보자를 위한 단계별 학습 순서를 제안해요.</div>
                </div>
                <ArrowRight size={16} className="opacity-20 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
