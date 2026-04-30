'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Calendar, CheckCircle2, Clock, MapPin, ArrowRight, Laptop, 
  Settings, PlayCircle, FileText, Download, Zap, 
  ChevronRight, Layout, ShieldCheck, Brain, MessageSquare, 
  Database, CheckSquare, Plus, Save, ExternalLink,
  BookOpen, Trophy, Check
} from 'lucide-react';

export default function MyPage() {
  const [activeTab, setActiveTab] = useState('대시보드');

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0b0f1a] font-sans selection:bg-indigo-100 selection:text-indigo-900 transition-colors">
      
      {/* Top Header Section */}
      <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-white/5 pt-12 pb-8 px-6 transition-colors">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-black uppercase tracking-widest">
              <Zap className="w-3 h-3" /> Preparation Zone
            </div>
            <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter">마이페이지</h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">최상의 교육 결과를 위해 준비 상태를 점검하세요.</p>
          </div>
          
          <div className="flex gap-2 bg-slate-100 dark:bg-white/5 p-1.5 rounded-2xl border border-slate-200 dark:border-white/5">
            {['대시보드', '사전학습', '교육자료', '설정'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-xl text-xs font-black transition-all ${activeTab === tab ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-white shadow-lg' : 'text-slate-400 hover:text-slate-600'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        
        {activeTab === '대시보드' && (
          <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
            
            {/* 1. 교육 대시보드 (핵심) */}
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Education Schedule Card */}
              <div className="lg:col-span-2 bg-indigo-600 rounded-[2.5rem] p-10 text-white shadow-2xl shadow-indigo-600/20 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:scale-110 transition-transform duration-700"><Calendar className="w-48 h-48" /></div>
                <div className="relative z-10 flex flex-col h-full justify-between gap-12">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-[11px] font-black uppercase tracking-widest">수강 예정</span>
                      <span className="text-amber-300 font-black text-xs animate-pulse">D-3 Days Left</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tighter">바이브 코딩<br/>실전 프로젝트 14기</h2>
                  </div>
                  <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                    <div className="space-y-1">
                      <p className="text-xs font-bold opacity-60 uppercase tracking-widest flex items-center gap-2"><Clock className="w-3.5 h-3.5" /> Date & Time</p>
                      <p className="text-lg font-black tracking-tight">2026. 05. 24 (일) 13:00</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs font-bold opacity-60 uppercase tracking-widest flex items-center gap-2"><MapPin className="w-3.5 h-3.5" /> Location</p>
                      <p className="text-lg font-black tracking-tight">강남역 인근 오프라인 교육장</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status & Immediate Actions */}
              <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 border border-slate-200 dark:border-white/5 space-y-10 shadow-sm relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/5 rounded-full blur-3xl group-hover:bg-indigo-500/10 transition-colors" />
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] relative z-10 italic">Now To-Do</h3>
                <div className="space-y-5 relative z-10">
                  <ActionItem icon={Brain} label="사전학습 진행" value="3개 남음" urgent />
                  <ActionItem icon={CheckSquare} label="준비 체크리스트" value="완료 필요" urgent />
                  <ActionItem icon={Laptop} label="환경 세팅 점검" value="미완료" />
                  <ActionItem icon={MessageSquare} label="사전 설문 참여" value="완료" completed />
                </div>
                <Link href="/guide" className="w-full py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-black text-sm flex items-center justify-center gap-2 shadow-xl hover:scale-[1.02] active:scale-95 transition-all relative z-10">
                  사전학습 하러가기 <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </section>

            {/* 2. 사전학습 & 3. 교육 준비 체크 */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Pre-learning Tracker */}
              <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 border border-slate-200 dark:border-white/5 shadow-sm space-y-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-3"><Brain className="w-6 h-6 text-indigo-600" /> 사전학습 현황</h3>
                  <span className="text-xs font-black text-indigo-600 bg-indigo-50 dark:bg-indigo-500/10 px-3 py-1 rounded-full uppercase tracking-widest">70% Completed</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <ProgressStep label="시작하기" completed />
                  <ProgressStep label="AI 이해" completed />
                  <ProgressStep label="요청하는 법" completed />
                  <ProgressStep label="구조 이해" completed />
                  <ProgressStep label="환경 이해" completed />
                  <ProgressStep label="보안/도메인" />
                  <ProgressStep label="실수 모음" />
                  <ProgressStep label="준비 체크" />
                </div>
              </div>

              {/* Preparation Checklist */}
              <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 border border-slate-200 dark:border-white/5 shadow-sm space-y-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-3"><CheckSquare className="w-6 h-6 text-emerald-600" /> 필수 준비물 점검</h3>
                  <span className="text-[11px] font-black text-rose-500 uppercase tracking-widest animate-pulse">Required</span>
                </div>
                <div className="space-y-3">
                  <CheckItem label="개인 노트북 (전원 어댑터 포함)" desc="실전 코딩 실습을 위해 반드시 지참" completed />
                  <CheckItem label="GitHub 계정 생성 및 로그인 확인" desc="코드 저장 및 협업을 위해 필수" completed />
                  <CheckItem label="Chrome 브라우저 최신버전 설치" desc="최적의 실습 환경 보장" />
                  <CheckItem label="AI 서비스(Claude/ChatGPT) 가입" desc="실습 시 사용할 주력 도구" />
                </div>
              </div>
            </section>

            {/* 4. 빠른 체험 & 6. 내 결과물 */}
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1 bg-gradient-to-br from-slate-900 to-indigo-950 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
                <div className="space-y-6 relative z-10">
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center text-indigo-400 border border-white/10"><PlayCircle className="w-8 h-8" /></div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black tracking-tight">1분 빠른 체험</h3>
                    <p className="text-xs font-medium text-slate-400 leading-relaxed">교육 전 AI의 파워를 경험해보세요.<br/>"나도 할 수 있다"는 자신감이 시작입니다.</p>
                  </div>
                  <button className="flex items-center gap-2 text-sm font-black text-indigo-400 group-hover:translate-x-2 transition-transform">체험 시작하기 <ChevronRight className="w-4 h-4" /></button>
                </div>
              </div>

              <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 border border-slate-200 dark:border-white/5 shadow-sm space-y-8">
                <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-3"><Save className="w-6 h-6 text-indigo-600" /> 내 결과물 기록</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/10 flex items-center justify-between group cursor-pointer hover:border-indigo-300 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center text-indigo-600 shadow-sm"><Layout className="w-5 h-5" /></div>
                      <div>
                        <p className="text-sm font-black dark:text-white">빠른 체험 랜딩페이지</p>
                        <p className="text-[10px] text-slate-400 font-medium">2026.04.28 저장됨</p>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-indigo-600" />
                  </div>
                  <div className="p-5 bg-slate-50 dark:bg-white/5 rounded-2xl border border-dashed border-slate-200 dark:border-white/10 flex items-center justify-center gap-3 text-slate-400 hover:text-indigo-600 transition-colors cursor-pointer">
                    <Plus className="w-5 h-5" />
                    <span className="text-sm font-black uppercase tracking-widest">새 실습 추가</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === '교육자료' && (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <section className="space-y-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-3"><FileText className="w-7 h-7 text-indigo-600" /> 실전 교육 자료실</h2>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest italic">Materials for offline intensive session</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ResourceCategory title="사전 제공 자료" desc="교육 전 반드시 읽어봐야 할 기초 자료" badge="Pre-read" icon={BookOpen} color="text-indigo-600">
                  <ResourceItem title="실전 프로젝트 커리큘럼 가이드" type="PDF" size="4.2 MB" />
                  <ResourceItem title="AI 협업 도구 설치 및 가이드북" type="PDF" size="2.8 MB" />
                </ResourceCategory>
                
                <ResourceCategory title="현장 배포 자료" desc="교육 당일 현장에서 제공되는 실습 파일" badge="On-site" icon={MapPin} color="text-amber-500">
                  <div className="bg-slate-50 dark:bg-white/5 border border-dashed border-slate-200 dark:border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-3 text-slate-400">
                    <Clock className="w-8 h-8 opacity-20" />
                    <p className="text-xs font-black">교육 당일 현장에서<br/>활성화됩니다.</p>
                  </div>
                </ResourceCategory>

                <ResourceCategory title="사후 복습 자료" desc="교육 완료 후 제공되는 추가 심화 자료" badge="Post-read" icon={Trophy} color="text-emerald-500">
                  <div className="bg-slate-50 dark:bg-white/5 border border-dashed border-slate-200 dark:border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-3 text-slate-400">
                    <ShieldCheck className="w-8 h-8 opacity-20" />
                    <p className="text-xs font-black">교육 수료 후<br/>오픈됩니다.</p>
                  </div>
                </ResourceCategory>
              </div>
            </section>

            <section className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 border border-slate-200 dark:border-white/5 shadow-sm space-y-10">
              <div className="space-y-2">
                <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">마스터 템플릿 보관소</h3>
                <p className="text-xs font-bold text-slate-400 italic uppercase tracking-widest">Master Prompt & Component Templates</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <TemplateCard title="프롬프트 템플릿" icon={MessageSquare} count="12개" />
                <TemplateCard title="컴포넌트 라이브러리" icon={Layout} count="45개" />
                <TemplateCard title="DB 스키마 예제" icon={Database} count="8개" />
                <TemplateCard title="API 통합 템플릿" icon={Zap} count="15개" />
              </div>
            </section>
          </div>
        )}

        {activeTab === '설정' && (
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 border border-slate-200 dark:border-white/5 shadow-sm space-y-12">
              <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-3"><Settings className="w-7 h-7 text-slate-400" /> 계정 및 알림 설정</h3>
              
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest">사용자 이름</label>
                    <input type="text" defaultValue="이종주" className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-3.5 text-sm font-black dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest">이메일 계정</label>
                    <input type="email" defaultValue="zmetron@nate.com" className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-3.5 text-sm font-black dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
                  </div>
                </div>

                <div className="space-y-4 pt-6 border-t border-slate-100 dark:border-white/5">
                  <h4 className="text-sm font-black text-slate-900 dark:text-white">알림 설정</h4>
                  <div className="space-y-4">
                    <ToggleItem label="교육 일정 리마인드 알림" desc="교육 3일 전, 1일 전 카카오톡/문자 알림" active />
                    <ToggleItem label="사전학습 미완료 알림" desc="교육 일주일 전 미완료 단계 리마인드" active />
                    <ToggleItem label="현장 자료 업로드 알림" desc="교육 당일 실습 파일 활성화 시 알림" />
                  </div>
                </div>

                <button className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-black text-sm shadow-xl shadow-indigo-600/20 hover:-translate-y-1 transition-all active:scale-95">설정 저장하기</button>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}

// --- Helper Components ---
function ActionItem({ icon: Icon, label, value, urgent = false, completed = false }: { icon: React.ElementType, label: string, value: string, urgent?: boolean, completed?: boolean }) {
  return (
    <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/5 group hover:border-indigo-300 transition-all">
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${completed ? 'bg-emerald-50 text-emerald-500' : 'bg-white dark:bg-slate-800 text-slate-400 group-hover:text-indigo-600 shadow-sm'}`}><Icon className="w-5 h-5" /></div>
        <span className={`text-sm font-black ${completed ? 'text-slate-400 line-through' : 'text-slate-700 dark:text-slate-300'}`}>{label}</span>
      </div>
      <span className={`text-[11px] font-black uppercase tracking-tighter ${urgent ? 'text-rose-500 animate-pulse' : completed ? 'text-emerald-500' : 'text-slate-400'}`}>{value}</span>
    </div>
  );
}

function ProgressStep({ label, completed = false }: { label: string, completed?: boolean }) {
  return (
    <div className={`flex items-center gap-3 p-3.5 rounded-xl border transition-all ${completed ? 'bg-indigo-50/50 dark:bg-indigo-500/5 border-indigo-100 dark:border-indigo-500/10 text-indigo-700 dark:text-indigo-400' : 'bg-white dark:bg-slate-800 border-slate-100 dark:border-white/5 text-slate-400'}`}>
      {completed ? <CheckCircle2 className="w-4 h-4 shrink-0" /> : <div className="w-4 h-4 rounded-full border-2 border-slate-200 shrink-0" />}
      <span className="text-xs font-black truncate">{label}</span>
    </div>
  );
}

function CheckItem({ label, desc, completed = false }: { label: string, desc: string, completed?: boolean }) {
  return (
    <div className={`flex items-start gap-4 p-4 rounded-2xl border transition-all ${completed ? 'bg-emerald-50/30 dark:bg-emerald-500/5 border-emerald-100/50' : 'bg-slate-50/50 dark:bg-white/5 border-slate-100/50'}`}>
      <div className={`w-5 h-5 rounded-lg border-2 mt-0.5 flex items-center justify-center shrink-0 transition-all ${completed ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-slate-200 bg-white'}`}>
        {completed && <Check className="w-3 h-3" />}
      </div>
      <div className="space-y-1">
        <p className={`text-sm font-black leading-tight ${completed ? 'text-slate-400 line-through' : 'text-slate-800 dark:text-slate-200'}`}>{label}</p>
        <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">{desc}</p>
      </div>
    </div>
  );
}

function ResourceCategory({ title, desc, badge, icon: Icon, color, children }: { title: string, desc: string, badge: string, icon: React.ElementType, color: string, children: React.ReactNode }) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 border border-slate-200 dark:border-white/5 shadow-sm space-y-6 flex flex-col h-full">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className={`w-12 h-12 rounded-2xl bg-slate-50 dark:bg-white/5 flex items-center justify-center ${color}`}><Icon className="w-6 h-6" /></div>
          <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-md bg-slate-50 dark:bg-white/5 ${color}`}>{badge}</span>
        </div>
        <div className="space-y-1">
          <h3 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">{title}</h3>
          <p className="text-[11px] font-medium text-slate-400 leading-tight">{desc}</p>
        </div>
      </div>
      <div className="space-y-3 flex-1 pt-4 border-t border-slate-50 dark:border-white/5">
        {children}
      </div>
    </div>
  );
}

function ResourceItem({ title, type, size }: { title: string, type: string, size: string }) {
  return (
    <div className="p-4 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/5 flex items-center justify-between group cursor-pointer hover:border-indigo-300 transition-all">
      <div className="flex items-center gap-3 overflow-hidden">
        <div className="w-8 h-8 bg-white dark:bg-slate-800 rounded-lg flex items-center justify-center text-indigo-600 shadow-sm"><Download className="w-4 h-4" /></div>
        <div className="overflow-hidden">
          <p className="text-xs font-black dark:text-white truncate">{title}</p>
          <p className="text-[10px] text-slate-400 font-medium uppercase">{type} • {size}</p>
        </div>
      </div>
    </div>
  );
}

function TemplateCard({ title, icon: Icon, count }: { title: string, icon: React.ElementType, count: string }) {
  return (
    <div className="p-6 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/5 flex flex-col gap-4 group cursor-pointer hover:bg-indigo-600 transition-all">
      <Icon className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors" />
      <div>
        <p className="text-xs font-black dark:text-white group-hover:text-white transition-colors">{title}</p>
        <p className="text-[10px] text-slate-400 font-bold group-hover:text-indigo-200 transition-colors uppercase tracking-widest">{count}</p>
      </div>
    </div>
  );
}

function ToggleItem({ label, desc, active = false }: { label: string, desc: string, active?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-6">
      <div className="space-y-1">
        <p className="text-sm font-black text-slate-900 dark:text-white">{label}</p>
        <p className="text-xs font-medium text-slate-500 dark:text-slate-400">{desc}</p>
      </div>
      <div className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-all ${active ? 'bg-indigo-600' : 'bg-slate-200 dark:bg-white/10'}`}>
        <div className={`w-4 h-4 rounded-full bg-white shadow-md transform transition-transform ${active ? 'translate-x-6' : 'translate-x-0'}`} />
      </div>
    </div>
  );
}
