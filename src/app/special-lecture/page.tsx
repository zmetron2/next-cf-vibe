'use client';

import React from 'react';
import { 
  CheckCircle2, ArrowRight, Zap, 
  Target, Rocket, Users, ShieldCheck, 
  MessageSquare, Code2, 
  Layers, Clock, Download, MousePointer2,
  X, Lightbulb, Compass, Globe, BookOpen,
  FileText
} from 'lucide-react';

export default function SpecialLecturePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-primary selection:text-white">
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[150px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-500/10 blur-[150px] rounded-full"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-8 animate-bounce">
            <span className="flex h-2 w-2 rounded-full bg-primary"></span>
            <span className="text-xs font-bold text-white tracking-widest">비개발자도 OK! AI 시대의 새로운 필수 역량</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-8">
            코딩을 배우지 마세요.<br />
            <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary via-indigo-400 to-teal-400">
              AI를 &apos;지시하는 방법&apos;
            </span>을 배우세요.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            코드 한 줄 몰라도 웹/앱/프로그램을 만드는 시대.<br />
            중요한 건 코딩 실력이 아니라 AI에게 명확히 전달하는 <span className="text-white font-bold underline decoration-primary decoration-4 underline-offset-4">&apos;지시 능력&apos;</span>입니다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            <HeroBadge icon={Users} title="비개발자도 가능" desc="누구나 바로 시작" />
            <HeroBadge icon={Target} title="실전 결과 중심" desc="이론 대신 결과물" />
            <HeroBadge icon={Zap} title="최신 AI 기법" desc="검증된 실전 노하우" />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-primary hover:bg-indigo-500 text-white px-10 py-5 rounded-xl font-black text-xl transition-all shadow-xl shadow-primary/30 hover:-translate-y-1 flex items-center justify-center gap-3">
              지금 바로 신청하기 <ArrowRight size={24} />
            </button>
            <button className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/20 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all flex items-center justify-center gap-3">
              프로세스 상세보기
            </button>
          </div>
        </div>
      </section>

      {/* --- BENEFITS & RESULTS --- */}
      <section className="py-32 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                이 강의에서 <span className="text-primary">얻는 것</span>
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <BenefitItem text="AI가 정확히 이해하는 지시 방법" />
                <BenefitItem text="디자인 오류를 줄이는 명시적 기술" />
                <BenefitItem text="코드 일관성을 유지하는 운영 방식" />
                <BenefitItem text="컨텍스트 관리 및 리셋 전략" />
                <BenefitItem text="무료 API + LLM 활용법" />
                <BenefitItem text="실전 프로젝트로 결과물 완성" />
              </ul>
            </div>
            <div className="flex-1 bg-slate-50 dark:bg-slate-900 rounded-[32px] p-10 border border-slate-200 dark:border-slate-800 shadow-inner">
              <h4 className="text-xl font-black mb-8 flex items-center gap-2">
                <Rocket className="text-primary" /> 만들 수 있는 결과물 예시
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <ResultItem icon={Globe} title="웹 서비스 / SaaS" desc="AI 기반의 비즈니스 서비스" />
                <ResultItem icon={Zap} title="자동화 프로그램" desc="반복 업무 자동화 도구" />
                <ResultItem icon={Download} title="확장 프로그램" desc="브라우저 전용 플러그인" />
                <ResultItem icon={Rocket} title="모바일 앱" desc="하이브리드 방식 앱 제작" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PAIN POINTS --- */}
      <section className="py-32 bg-slate-50 dark:bg-slate-900/50 transition-colors">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6">이런 <span className="text-red-500 italic">경험</span> 있으신가요?</h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg">AI를 써봐도 원하는 결과가 나오지 않아 답답했던 분들을 위해 준비했습니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            <PainCard emoji="😫" title="코드 오류 반복" desc="AI에게 지시했는데 실행되지 않는 이상한 코드만 계속 출력될 때" />
            <PainCard emoji="😢" title="디자인 레이아웃 깨짐" desc="요구사항을 반영해도 전체적인 디자인 밸런스가 무너지고 정렬이 맞지 않을 때" />
            <PainCard emoji="🤔" title="일관성 없는 결과" desc="같은 요청임에도 AI가 매번 다른 답변을 내놓아 관리가 불가능할 때" />
            <PainCard emoji="😱" title="프로젝트 복잡도 증가" desc="파일이 꼬이고 코드가 뒤섞여 어느 순간부터 관리가 전혀 안 될 때" />
            <PainCard emoji="😵" title="대화 흐름 끊김" desc="컨텍스트가 길어지면 AI가 이전 내용을 잊고 엉뚱한 대답을 할 때" />
          </div>

          <div className="mt-20 bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-primary flex items-center justify-center gap-3">
              <Lightbulb className="w-8 h-8" /> 문제는 코딩 실력이 아니라 <span className="underline decoration-indigo-300 underline-offset-4">&quot;AI에게 제대로 지시하지 못한 것&quot;</span>입니다.
            </h3>
          </div>
        </div>
      </section>

      {/* --- PARADIGM SHIFT --- */}
      <section className="py-32 bg-white dark:bg-slate-950 transition-colors overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6">새로운 패러다임, <span className="text-primary">바이브 코딩</span></h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg">개발의 패러다임이 완전히 바뀌고 있습니다.</p>
          </div>

          <div className="flex flex-col lg:flex-row items-stretch justify-center gap-12 lg:gap-20 relative">
            {/* Old Way */}
            <div className="flex-1 w-full max-w-md bg-slate-50 dark:bg-slate-900 rounded-3xl p-10 border border-slate-200 dark:border-slate-800 flex flex-col">
              <div className="bg-slate-200 dark:bg-slate-800 px-6 py-2 rounded-full w-fit mx-auto text-sm font-black opacity-50 uppercase tracking-widest mb-10">기존 방식 (코딩 중심)</div>
              <div className="flex flex-col gap-4 mt-auto mb-auto">
                <ParadigmItem icon={BookOpen} label="문법 학습" />
                <ParadigmItem icon={Layers} label="구조 이해" />
                <ParadigmItem icon={Code2} label="알고리즘" />
                <ParadigmItem icon={Rocket} label="최종 프로젝트" />
              </div>
            </div>

            {/* VS Badge */}
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary text-white font-black text-2xl shadow-xl shadow-primary/40 z-10 shrink-0 self-center">VS</div>

            {/* New Way (Vibe) */}
            <div className="flex-1 w-full max-w-md bg-indigo-50 dark:bg-indigo-900/20 rounded-3xl p-10 border-4 border-primary relative flex flex-col">
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-slate-900 px-4 py-1 rounded-lg font-black text-xs shadow-lg animate-bounce">추천</div>
              <div className="bg-primary px-6 py-2 rounded-full w-fit mx-auto text-sm font-black text-white uppercase tracking-widest mb-10">바이브 코딩 (AI 활용 중심)</div>
              <div className="flex flex-col gap-4 mt-auto mb-auto">
                <ParadigmItem icon={Target} label="목표 정의" active />
                <ParadigmItem icon={MessageSquare} label="명시적 지시 (프롬프트)" active />
                <ParadigmItem icon={Zap} label="시스템 연계" active />
                <ParadigmItem icon={CheckCircle2} label="결과물 완성" active />
              </div>
            </div>
          </div>

          <div className="mt-20 text-center">
            <p className="text-2xl md:text-3xl font-black text-slate-800 dark:text-white">
              앞으로 개발은 <span className="text-red-500">&quot;잘 짜는 사람&quot;</span>이 아니라<br className="md:hidden" /> <span className="text-primary">&quot;잘 시키는 사람&quot;</span>의 영역입니다.
            </p>
          </div>
        </div>
      </section>

      {/* --- CURRICULUM --- */}
      <section className="py-32 bg-slate-50 dark:bg-slate-900/50 transition-colors">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6">4단계 프로세스</h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg">기초부터 실전 배포까지, 단 4단계의 핵심 프로세스로 마스터하세요.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StepCard 
              step="01" 
              title="AI와 대화하는 법" 
              color="bg-purple-500" 
              items={["AI가 이해하는 명령어 구조", "명확하게 지시하는 법", "실패하는 프롬프트 vs 성공하는 프롬프트"]} 
              projects={["프롬프트 엔지니어링 실습 (Basic Chatbot)", "페르소나 기반 시나리오 설계"]} 
            />
            <StepCard 
              step="02" 
              title="시스템 이해" 
              color="bg-blue-500" 
              items={["서버 / 클라이언트 개념", "왜 결과가 달라지는지 이해", "컨텍스트와 기억 구조 활용"]} 
              projects={["시스템 아키텍처 다이어그램 설계", "데이터 흐름 시각화 도구 제작"]} 
            />
            <StepCard 
              step="03" 
              title="실전 제작" 
              color="bg-teal-500" 
              items={["실제 웹 서비스 만들기", "API 연결 및 기능 확장", "코드 일관성 유지 전략"]} 
              projects={["뉴스 큐레이션 웹 서비스 제작", "개인형 포트폴리오 랜딩페이지"]} 
            />
            <StepCard 
              step="04" 
              title="배포 & 확장" 
              color="bg-orange-500" 
              items={["로컬 → 실제 서비스 배포", "확장 프로그램 / 앱 제작", "실제 사용 가능한 결과물 완성"]} 
              projects={["실전 도메인 연결 및 Vercel 배포", "크롬 확장 프로그램 (생산성 도구)"]} 
            />
          </div>
        </div>
      </section>

      {/* --- BEFORE / AFTER --- */}
      <section className="py-32 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-20">수강 후, <span className="text-primary">이렇게 달라집니다!</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-border rounded-3xl overflow-hidden shadow-2xl text-left">
            <div className="p-12 bg-slate-50 dark:bg-slate-900">
              <h4 className="text-xl font-black mb-8 flex items-center gap-3 text-slate-400">
                <X className="w-6 h-6" /> BEFORE
              </h4>
              <ul className="space-y-6">
                <ListItem text="AI에게 계속 다시 설명해야 함" type="bad" />
                <ListItem text="요청할 때마다 결과가 천차만별" type="bad" />
                <ListItem text="디자인 레이아웃이 계속 깨짐" type="bad" />
                <ListItem text="프로젝트가 금방 스파게티 코드가 됨" type="bad" />
                <ListItem text="완성까지 시간이 오래 걸리고 지침" type="bad" />
              </ul>
            </div>
            <div className="p-12 bg-primary/10 dark:bg-primary/20 relative">
              <h4 className="text-xl font-black mb-8 flex items-center gap-3 text-primary">
                <CheckCircle2 className="w-6 h-6" /> AFTER
              </h4>
              <ul className="space-y-6 relative z-10">
                <ListItem text="한 번에 원하는 결과 도출" type="good" />
                <ListItem text="일관성 있는 코드와 디자인 유지" type="good" />
                <ListItem text="구조적으로 깔끔한 프로젝트 관리" type="good" />
                <ListItem text="AI를 개발자처럼 자유롭게 핸들링" type="good" />
                <ListItem text="압도적으로 빠른 속도로 배포 완료" type="good" />
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- RECOMMENDED FOR --- */}
      <section className="py-32 bg-slate-50 dark:bg-slate-900/50 transition-colors">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black mb-16">이런 분들께 <span className="text-primary">강력 추천</span>합니다!</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <RecommendCard icon={Users} label="개발을 배우다 포기한 사람" />
            <RecommendCard icon={Lightbulb} label="AI로 뭔가 만들어보고 싶은 분" />
            <RecommendCard icon={Rocket} label="빠르게 서비스를 만들고 싶은 창업자" />
            <RecommendCard icon={Clock} label="반복 작업을 자동화하고 싶은 직장인" />
            <RecommendCard icon={MessageSquare} label="아이디어는 많지만 개발이 막막한 분" />
            <RecommendCard icon={Globe} label="글로벌 서비스 기획 및 배포 희망자" />
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">상상만 하던 아이디어,<br />이제 AI와 함께 <span className="text-primary italic">현실</span>로 만드세요!</h2>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 md:p-16 mb-12 shadow-2xl backdrop-blur-md">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="text-left space-y-4">
                <p className="text-slate-400 font-bold tracking-widest uppercase">Special Offer</p>
                <div className="space-y-1">
                  <p className="text-lg line-through text-slate-500">정가 199,000원</p>
                  <p className="text-5xl md:text-6xl font-black text-white">지금 특가 <span className="text-primary">129,000원</span></p>
                </div>
                <p className="text-slate-400 text-sm">* 조기 마감 시 가격이 인상될 수 있습니다.</p>
              </div>
              <div className="w-full md:w-auto">
                <button className="w-full md:w-auto bg-primary hover:bg-indigo-500 text-white px-12 py-6 rounded-xl font-black text-2xl transition-all shadow-xl shadow-primary/30 hover:-translate-y-1 flex items-center justify-center gap-3 whitespace-nowrap">
                  지금 바로 수강 신청하기 <MousePointer2 className="animate-pulse" />
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
            <FooterIcon icon={ShieldCheck} label="100% 만족 보장" />
            <FooterIcon icon={FileText} label="복습용 교안 제공" />
            <FooterIcon icon={Download} label="실습 자료 제공" />
            <FooterIcon icon={Compass} label="커뮤니티 지원" />
          </div>
        </div>
      </section>

      {/* --- FLOATING CTA FOR MOBILE --- */}
      <div className="fixed bottom-6 inset-x-6 z-[60] md:hidden">
        <button className="w-full bg-primary text-white py-5 rounded-2xl font-black text-lg shadow-2xl shadow-primary/40 flex items-center justify-center gap-2">
          특강 신청하고 AI 마스터하기 <ArrowRight size={20} />
        </button>
      </div>

    </div>
  );
}

// --- SUB-COMPONENTS ---

function HeroBadge({ icon: Icon, title, desc }: { icon: React.ElementType, title: string, desc: string }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-5 rounded-2xl text-left hover:bg-white/10 transition-all group">
      <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
        <Icon className="text-primary w-5 h-5" />
      </div>
      <h4 className="text-white font-bold text-sm mb-1">{title}</h4>
      <p className="text-slate-500 text-xs">{desc}</p>
    </div>
  );
}

function PainCard({ emoji, title, desc }: { emoji: string, title: string, desc: string }) {
  return (
    <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
      <div className="text-4xl mb-6">{emoji}</div>
      <h4 className="text-lg font-black mb-3">{title}</h4>
      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{desc}</p>
    </div>
  );
}

function ParadigmItem({ icon: Icon, label, active = false }: { icon: React.ElementType, label: string, active?: boolean }) {
  return (
    <div className={`flex items-center gap-4 px-6 py-4 rounded-2xl border-2 w-full transition-all ${
      active ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500'
    }`}>
      <Icon className={`w-6 h-6 ${active ? 'text-white' : 'text-slate-300'}`} />
      <span className="font-bold text-lg">{label}</span>
    </div>
  );
}

function ArrowDown({ active = false }: { active?: boolean }) {
  return (
    <div className={`flex flex-col items-center opacity-30 ${active ? 'text-primary opacity-100' : 'text-slate-300'}`}>
      <div className="w-0.5 h-6 bg-current"></div>
      <ArrowRight className="w-4 h-4 rotate-90" />
    </div>
  );
}

function StepCard({ step, title, color, items, projects }: { step: string, title: string, color: string, items: string[], projects: string[] }) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm relative group overflow-hidden text-left flex flex-col h-full hover:shadow-xl transition-all duration-300">
      <div className={`absolute top-0 left-0 w-2 h-full ${color}`}></div>
      <div className="flex items-center justify-between mb-8">
        <span className={`text-xs font-black text-white px-3 py-1 rounded-full ${color}`}>{step} STEP</span>
      </div>
      <h4 className="text-xl font-black mb-6">{title}</h4>
      <ul className="space-y-4 mb-8 flex-1">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm text-slate-500 dark:text-slate-400 font-medium">
            <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${color.replace('bg-', 'text-')}`} />
            {item}
          </li>
        ))}
      </ul>
      <div className="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-3">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">실습 프로젝트 (2건)</p>
        {projects.map((p, i) => (
          <div key={i} className="flex items-center gap-2 group/item">
            <div className={`w-1.5 h-1.5 rounded-full ${color} opacity-40 group-hover/item:opacity-100 transition-opacity`} />
            <p className="text-sm font-bold text-slate-800 dark:text-white leading-tight group-hover/item:text-primary transition-colors">{p}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ListItem({ text, type }: { text: string, type: 'good' | 'bad' }) {
  return (
    <li className="flex items-center gap-4 group">
      <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:scale-125 ${
        type === 'good' ? 'bg-primary text-white' : 'bg-slate-200 text-slate-400'
      }`}>
        {type === 'good' ? <CheckCircle2 size={14} /> : <X size={14} />}
      </div>
      <span className={`text-base font-bold ${type === 'good' ? 'text-slate-800 dark:text-white' : 'text-slate-400'}`}>{text}</span>
    </li>
  );
}

function FooterIcon({ icon: Icon, label }: { icon: React.ElementType, label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <Icon className="w-6 h-6" />
      <span className="text-xs font-bold">{label}</span>
    </div>
  );
}

function BenefitItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3 bg-slate-50 dark:bg-white/5 p-4 rounded-xl border border-slate-100 dark:border-white/5">
      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
      <span className="text-sm font-bold">{text}</span>
    </li>
  );
}

function ResultItem({ icon: Icon, title, desc }: { icon: React.ElementType, title: string, desc: string }) {
  return (
    <div className="flex items-start gap-4 p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 group hover:border-primary transition-colors text-left">
      <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-950 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
        <Icon size={20} />
      </div>
      <div>
        <h5 className="font-bold text-sm mb-0.5">{title}</h5>
        <p className="text-xs text-slate-400">{desc}</p>
      </div>
    </div>
  );
}

function RecommendCard({ icon: Icon, label }: { icon: React.ElementType, label: string }) {
  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col items-center gap-4 hover:shadow-lg transition-all group">
      <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-all">
        <Icon size={24} />
      </div>
      <p className="text-xs font-bold text-slate-600 dark:text-slate-400 break-keep line-clamp-2">{label}</p>
    </div>
  );
}
