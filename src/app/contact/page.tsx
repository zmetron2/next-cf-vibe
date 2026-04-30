import React from 'react';
import { 
  Code2, ArrowRight, 
  BookOpen, 
  Users, ShieldCheck,
  Mail, MessageSquare, Send, Paperclip,
  CheckCircle2, Clock, ExternalLink
} from 'lucide-react';

// Custom Icons to avoid lucide-react import issues
function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.666 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.086 2.157 2.419 0 1.334-.947 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.086 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z" />
    </svg>
  );
}


export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans transition-colors">

      {/* --- Header Area --- */}
      <header className="bg-slate-50 dark:bg-[#0f172a] text-slate-900 dark:text-white py-16 relative overflow-hidden transition-colors border-b border-slate-200 dark:border-white/5">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15),transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-8 relative z-10">
          <div className="space-y-4">
            <h1 className="text-3xl font-black tracking-tight">교육 · 스터디 문의</h1>
            <p className="text-indigo-400 font-bold text-xl">함께 성장하는 학습 여정을 시작하세요</p>
            <p className="text-slate-400 max-w-md leading-relaxed text-sm">
              강의, 스터디 참여, 팀 프로젝트 등 다양한 교육 및 스터디 관련 문의를 남겨주세요.<br />
              빠른 시간 내에 답변드리겠습니다.
            </p>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-slate-900 border border-white/10 rounded-2xl p-8 w-64 h-64 flex flex-col items-center justify-center text-center space-y-4 overflow-hidden">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl" />
              
              <div className="w-16 h-16 bg-white/5 backdrop-blur-md rounded-xl flex items-center justify-center">
                <MessageSquare className="w-8 h-8 text-indigo-400" />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Inquiry</p>
                <p className="text-sm font-black text-white">무엇이든 물어보세요!</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- Main Content --- */}
      <main className="max-w-7xl mx-auto w-full px-6 py-12 space-y-12">
        
        {/* Inquiry Type Selection */}
        <section className="space-y-6">
          <h2 className="text-xl font-black text-slate-800 dark:text-white">문의 유형을 선택해주세요</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <TypeCard icon={Users} title="스터디 참여 문의" desc="스터디 참여 방법, 일정, 비용 등에 대해 문의합니다." active />
            <TypeCard icon={BookOpen} title="교육 / 강의 문의" desc="강의 커리큘럼, 수강 방법, 비용 등에 대해 문의합니다." />
            <TypeCard icon={Code2} title="팀 프로젝트 / 협업 문의" desc="함께 프로젝트를 진행하거나 협업 제안을 하고 싶어요." />
            <TypeCard icon={MessageSquare} title="기타 문의" desc="기타 일반적인 문의사항이 있어요." />
          </div>
        </section>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Inquiry Form */}
          <div className="flex-1 space-y-8">
            <div className="bg-card rounded-2xl border border-border p-10 shadow-sm space-y-8 transition-colors">
              <h3 className="text-lg font-black text-slate-800 dark:text-white">문의 내용 입력</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-700 dark:text-slate-300">이름 <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      placeholder="이름을 입력해주세요" 
                      className="w-full bg-slate-50 dark:bg-white/5 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all dark:text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-700 dark:text-slate-300">이메일 <span className="text-red-500">*</span></label>
                    <input 
                      type="email" 
                      placeholder="이메일을 입력해주세요" 
                      className="w-full bg-slate-50 dark:bg-white/5 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all dark:text-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-700 dark:text-slate-300">문의 제목 <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    placeholder="제목을 입력해주세요" 
                    className="w-full bg-slate-50 dark:bg-white/5 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all dark:text-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-700 dark:text-slate-300">문의 내용 <span className="text-red-500">*</span></label>
                  <textarea 
                    rows={6}
                    placeholder="내용을 상세히 입력해주세요" 
                    className="w-full bg-slate-50 dark:bg-white/5 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all dark:text-white resize-none"
                  ></textarea>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4">
                  <div className="flex items-center gap-3 bg-slate-50 dark:bg-white/5 border border-border px-4 py-2 rounded-lg transition-colors">
                    <Paperclip className="w-4 h-4 text-slate-400" />
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400">파일 첨부하기</span>
                    <span className="text-[10px] text-slate-300">(최대 10MB)</span>
                  </div>
                  <button className="w-full md:w-auto bg-indigo-600 hover:bg-indigo-500 px-8 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all hover:-translate-y-1 shadow-lg shadow-indigo-600/20 text-white">
                    문의 전송하기 <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Sidebar Info */}
          <aside className="lg:w-80 space-y-8">
            <div className="bg-card rounded-2xl border border-border p-8 space-y-6 shadow-sm transition-colors">
              <h3 className="text-sm font-black text-slate-800 dark:text-white tracking-tight">빠른 답변을 약속드려요</h3>
              <div className="space-y-6">
                <InfoItem icon={Clock} title="평일 기준 24시간 내 답변" desc="최대한 빠르게 답변드리겠습니다." />
                <InfoItem icon={CheckCircle2} title="정확하고 친절한 답변" desc="정확한 정보를 바탕으로 답변드려요." />
                <InfoItem icon={ShieldCheck} title="개인정보 보호" desc="안전하게 보호하고, 목적 외 사용하지 않아요." />
              </div>
            </div>

            <div className="bg-indigo-50 dark:bg-indigo-500/10 rounded-2xl p-8 space-y-4 border border-indigo-100 dark:border-indigo-500/20 transition-colors">
              <h3 className="text-sm font-black text-indigo-900 dark:text-indigo-400">스터디 참가 안내</h3>
              <p className="text-xs text-indigo-700 dark:text-indigo-300/80 leading-relaxed">
                바이브 코딩 스터디는 함께 학습하고 성장하는 커뮤니티입니다.
              </p>
              <ul className="space-y-2">
                <CheckItem label="온라인 정기 스터디" />
                <CheckItem label="실습 중심 학습" />
                <CheckItem label="질문 & 피드백 지원" />
                <CheckItem label="프로젝트 협업 기회" />
              </ul>
              <button className="w-full bg-white dark:bg-white/10 py-2.5 rounded-lg text-xs font-black text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white transition-all border border-indigo-200 dark:border-indigo-500/30 flex items-center justify-center gap-2 shadow-sm">
                스터디 자세히 보기 <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-card rounded-2xl border border-border p-8 space-y-6 shadow-sm transition-colors">
              <h3 className="text-sm font-black text-slate-800 dark:text-white tracking-tight">다른 방법으로 문의하기</h3>
              <div className="space-y-4">
                <ContactLink icon={GithubIcon} title="GitHub Discussions" value="커뮤니티를 통해 질문하기" />
                <ContactLink icon={Mail} title="이메일" value="vibecoding.study@gmail.com" />
                <ContactLink icon={DiscordIcon} title="Discord 커뮤니티" value="실시간 채팅으로 문의하기" />
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* --- Footer --- */}
    </div>
  );
}

// Helper Components
function TypeCard({ icon: Icon, title, desc, active = false }: { icon: React.ElementType, title: string, desc: string, active?: boolean }) {
  return (
    <div className={`bg-card rounded-xl border-2 p-6 space-y-4 group cursor-pointer transition-all ${
      active ? 'border-indigo-600 shadow-lg shadow-indigo-600/5' : 'border-border hover:border-indigo-200 dark:hover:border-indigo-500/50'
    }`}>
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all ${
        active ? 'bg-indigo-600 text-white' : 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-500/20 transition-colors'
      }`}>
        {active && <div className="absolute -top-2 -left-2 w-5 h-5 bg-indigo-600 text-white rounded-full flex items-center justify-center shadow-md">
          <CheckCircle2 className="w-3 h-3" />
        </div>}
        <Icon className="w-6 h-6" />
      </div>
      <div className="space-y-1">
        <h4 className="text-sm font-black text-slate-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{title}</h4>
        <p className="text-[11px] text-slate-400 dark:text-slate-500 leading-relaxed line-clamp-2">{desc}</p>
      </div>
    </div>
  );
}

function InfoItem({ icon: Icon, title, desc }: { icon: React.ElementType, title: string, desc: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="p-2 bg-indigo-50 dark:bg-indigo-500/10 rounded-lg shrink-0 transition-colors">
        <Icon className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
      </div>
      <div>
        <h4 className="text-xs font-black text-slate-800 dark:text-white mb-0.5">{title}</h4>
        <p className="text-[10px] text-slate-500 dark:text-slate-400">{desc}</p>
      </div>
    </div>
  );
}

function CheckItem({ label }: { label: string }) {
  return (
    <li className="flex items-center gap-2 text-xs font-bold text-indigo-800 dark:text-indigo-400">
      <div className="w-4 h-4 bg-white/50 dark:bg-white/10 border border-indigo-200 dark:border-indigo-500/30 rounded flex items-center justify-center shrink-0">
        <CheckCircle2 className="w-2.5 h-2.5 text-indigo-600 dark:text-indigo-400" />
      </div>
      {label}
    </li>
  );
}

function ContactLink({ icon: Icon, title, value }: { icon: React.ElementType, title: string, value: string }) {
  return (
    <div className="flex items-center gap-4 group cursor-pointer">
      <div className="p-2.5 bg-slate-50 dark:bg-white/5 text-slate-400 rounded-lg group-hover:bg-indigo-50 dark:group-hover:bg-indigo-500/10 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors shrink-0">
        <Icon className="w-5 h-5" />
      </div>
      <div className="overflow-hidden">
        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover:text-indigo-400 transition-colors">{title}</h4>
        <p className="text-xs font-bold text-slate-700 dark:text-slate-300 truncate group-hover:text-slate-900 dark:group-hover:text-white transition-colors">{value}</p>
      </div>
      <ExternalLink className="w-3 h-3 text-slate-200 dark:text-slate-700 ml-auto group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-all" />
    </div>
  );
}
