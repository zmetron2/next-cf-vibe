'use client';

import React from 'react';
import { FileText, ShieldCheck, ArrowLeft, Scale, Info, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function TermsPage() {
  // 최종 수정일 (페이지 수정 시 에이전트가 이 날짜를 업데이트합니다)
  const lastUpdated = "2026년 4월 30일";

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors font-sans selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* --- Header Area --- */}
      <header className="py-20 border-b border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05),transparent)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-[11px] font-black text-slate-400 hover:text-indigo-600 transition-all mb-10 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> BACK TO HOME
          </Link>
          <div className="flex items-center gap-6 mb-6">
            <div className="p-4 bg-indigo-600 text-white rounded-[1.5rem] shadow-xl shadow-indigo-600/20">
              <Scale className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter">서비스 이용약관</h1>
              <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-xs font-black uppercase tracking-widest">Standard Terms of Service</span>
              </div>
            </div>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <p className="text-slate-500 dark:text-slate-400 font-bold text-xs">최종 수정일: {lastUpdated}</p>
          </div>
        </div>
      </header>

      {/* --- Main Content --- */}
      <main className="max-w-4xl mx-auto px-6 py-24">
        <article className="space-y-16">
          
          <div className="p-8 bg-indigo-50 dark:bg-indigo-500/5 rounded-3xl border border-indigo-100 dark:border-indigo-500/10 mb-12">
            <div className="flex gap-4">
              <Info className="w-6 h-6 text-indigo-600 shrink-0" />
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400 leading-relaxed">
                본 약관은 바이브코딩 서비스를 이용하시는 모든 회원분들께 적용되는 표준 약관입니다. 서비스를 이용하시기 전에 내용을 반드시 확인해 주시기 바랍니다.
              </p>
            </div>
          </div>

          <TermsSection num="01" title="제1조 (목적)">
            본 약관은 "엘쯔 바이브코딩"(이하 "회사")이 운영하는 온라인 서비스 및 웹사이트(이하 "서비스")를 이용함에 있어 "회사"와 "이용자" 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
          </TermsSection>

          <TermsSection num="02" title="제2조 (용어의 정의)">
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-indigo-600 font-black">1.</span>
                <span>"서비스"란 "회사"가 제공하는 교육 콘텐츠, AI 가이드, 실습 도구 및 커뮤니티 등의 제반 서비스를 의미합니다.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-600 font-black">2.</span>
                <span>"이용자"란 본 약관에 따라 "회사"가 제공하는 "서비스"를 이용하는 회원 및 비회원을 말합니다.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-600 font-black">3.</span>
                <span>"회원"이란 "서비스"에 접속하여 본 약관에 동의하고 가입 절차를 거쳐 ID를 부여받은 자를 의미합니다.</span>
              </li>
            </ul>
          </TermsSection>

          <TermsSection num="03" title="제3조 (약관의 명시와 개정)">
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-indigo-600 font-black">1.</span>
                <span>"회사"는 본 약관의 내용을 "이용자"가 쉽게 알 수 있도록 초기 서비스 화면에 게시합니다.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-600 font-black">2.</span>
                <span>"회사"는 관련 법령을 위배하지 않는 범위 내에서 본 약관을 개정할 수 있으며, 개정 시 적용일자 및 개정 사유를 명시하여 적용일 7일 전부터 고지합니다.</span>
              </li>
            </ul>
          </TermsSection>

          <TermsSection num="04" title="제4조 (서비스의 제공 및 변경)">
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-indigo-600 font-black">1.</span>
                <span>"회사"는 교육 콘텐츠 개발, AI 솔루션 제공, 기술 상담 등 "회사"가 정하는 업무를 수행합니다.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-600 font-black">2.</span>
                <span>기술적 사양의 변경이나 정책 변화에 따라 서비스의 내용을 변경할 수 있으며, 이 경우 변경 사항을 즉시 공지합니다.</span>
              </li>
            </ul>
          </TermsSection>

          <TermsSection num="05" title="제5조 (서비스의 중단)">
            "회사"는 컴퓨터 등 정보통신설비의 보수점검, 교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다. 이 경우 "회사"는 제8조에 정한 방법으로 "이용자"에게 통지합니다.
          </TermsSection>

          <TermsSection num="06" title="제6조 (회원가입 및 의무)">
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-indigo-600 font-black">1.</span>
                <span>"이용자"는 "회사"가 정한 가입 양식에 따라 회원정보를 기입함으로써 회원가입을 신청합니다.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-600 font-black">2.</span>
                <span>"회원"은 자신의 ID 및 비밀번호를 관리할 책임이 있으며, 타인에게 양도하거나 대여할 수 없습니다.</span>
              </li>
            </ul>
          </TermsSection>

          <TermsSection num="07" title="제7조 (저작권의 귀속 및 이용제한)">
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-indigo-600 font-black">1.</span>
                <span>"회사"가 작성한 저작물에 대한 저작권 및 기타 지적재산권은 "회사"에 귀속됩니다.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-600 font-black">2.</span>
                <span>"이용자"는 서비스를 이용함으로써 얻은 정보를 "회사"의 사전 승낙 없이 복제, 송신, 출판, 배포 등을 통해 영리 목적으로 이용할 수 없습니다.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-600 font-black">3.</span>
                <span>AI 도구를 통해 생성된 결과물의 저작권은 해당 AI 서비스 제공사의 약관 및 관련 법령에 따릅니다.</span>
              </li>
            </ul>
          </TermsSection>

          <TermsSection num="08" title="제8조 (면책조항)">
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-indigo-600 font-black">1.</span>
                <span>"회사"는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-600 font-black">2.</span>
                <span>"회사"는 "이용자"의 귀책사유로 인한 서비스 이용의 장애에 대하여는 책임을 지지 않습니다.</span>
              </li>
            </ul>
          </TermsSection>

          <TermsSection num="09" title="제9조 (분쟁해결 및 관할법원)">
            본 약관과 관련하여 발생한 분쟁에 대해 소송이 제기될 경우, "회사"의 본사 소재지를 관할하는 법원을 전용 관할법원으로 합니다.
          </TermsSection>

          {/* Contact Support */}
          <div className="mt-32 p-10 bg-slate-900 dark:bg-white/5 rounded-[2.5rem] text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-10 opacity-10 rotate-12"><AlertCircle className="w-48 h-48" /></div>
            <div className="relative z-10 space-y-6">
              <h3 className="text-2xl font-black flex items-center gap-3">약관 관련 문의</h3>
              <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-xl">
                이용약관에 대해 궁금한 점이 있으시거나 권리 침해 신고가 필요한 경우 이메일로 연락 주시면 신속히 답변드리겠습니다.
              </p>
              <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row gap-6">
                <div>
                  <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-1">Email Support</p>
                  <p className="text-lg font-black tracking-tight">zmetron@nate.com</p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}

// --- Helper Components ---
function TermsSection({ num, title, children }: { num: string, title: string, children: React.ReactNode }) {
  return (
    <section className="space-y-6 group">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 flex items-center justify-center text-[13px] font-black text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
          {num}
        </div>
        <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">{title}</h2>
      </div>
      <div className="pl-14 text-sm md:text-base font-medium text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
        {children}
      </div>
    </section>
  );
}

function Clock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
