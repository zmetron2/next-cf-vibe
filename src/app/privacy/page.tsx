'use client';

import React from 'react';
import { Lock, ShieldCheck, ArrowLeft, Eye, ShieldAlert, UserCheck, Trash2, Mail, Clock } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPage() {
  // 최종 수정일 (페이지 수정 시 에이전트가 이 날짜를 업데이트합니다)
  const lastUpdated = "2026년 4월 30일";

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors font-sans selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* --- Header Area --- */}
      <header className="py-20 border-b border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05),transparent)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-[11px] font-black text-slate-400 hover:text-emerald-600 transition-all mb-10 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> BACK TO HOME
          </Link>
          <div className="flex items-center gap-6 mb-6">
            <div className="p-4 bg-emerald-600 text-white rounded-[1.5rem] shadow-xl shadow-emerald-600/20">
              <Lock className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter">개인정보처리방침</h1>
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-xs font-black uppercase tracking-widest">Privacy & Security Policy</span>
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
          
          <div className="p-8 bg-emerald-50 dark:bg-emerald-500/5 rounded-3xl border border-emerald-100 dark:border-emerald-500/10 mb-12">
            <div className="flex gap-4">
              <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400 leading-relaxed">
                엘쯔 바이브코딩(이하 "회사")은 이용자의 개인정보를 소중히 다루며, 「개인정보 보호법」 등 관련 법령을 준수하여 안전하게 관리하고 있습니다. 본 방침을 통해 귀하의 개인정보가 어떻게 처리되는지 안내해 드립니다.
              </p>
            </div>
          </div>

          <PrivacySection num="01" title="제1조 (개인정보의 처리 목적)">
            "회사"는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
            <ul className="mt-6 space-y-3">
              <li className="flex gap-3">
                <span className="text-emerald-600 font-black">•</span>
                <span>회원 가입 및 관리: 가입 의사 확인, 본인 식별·인증, 회원자격 유지·관리</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-600 font-black">•</span>
                <span>서비스 제공: 교육 콘텐츠 제공, 맞춤형 AI 가이드, 실습 결과 리포트 제공</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-600 font-black">•</span>
                <span>고객 문의 처리: 상담 신청 확인, 사실조사를 위한 연락·통지, 처리결과 통보</span>
              </li>
            </ul>
          </PrivacySection>

          <PrivacySection num="02" title="제2조 (개인정보의 처리 및 보유 기간)">
            "회사"는 법령에 따른 개인정보 보유·이용기간 또는 이용자로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
            <ul className="mt-6 space-y-3">
              <li className="flex gap-3">
                <span className="text-emerald-600 font-black">•</span>
                <span>홈페이지 회원 가입 및 관리: 홈페이지 탈퇴 시까지</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-600 font-black">•</span>
                <span>관련 법령에 의한 보존: 소비자의 불만 또는 분쟁처리에 관한 기록(3년), 계약 또는 청약철회 등에 관한 기록(5년)</span>
              </li>
            </ul>
          </PrivacySection>

          <PrivacySection num="03" title="제3조 (처리하는 개인정보의 항목)">
            "회사"는 서비스 제공을 위해 다음의 개인정보 항목을 처리하고 있습니다.
            <ul className="mt-6 space-y-3">
              <li className="flex gap-3">
                <span className="text-emerald-600 font-black">•</span>
                <span>필수항목: 이름, 이메일 주소, 접속 로그, 쿠키, 접속 IP 정보</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-600 font-black">•</span>
                <span>선택항목: 휴대전화 번호(상담 신청 시), 소속 기업/기관명</span>
              </li>
            </ul>
          </PrivacySection>

          <PrivacySection num="04" title="제4조 (정보주체의 권리·의무 및 행사방법)">
            이용자는 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정할 수 있으며 가입해지를 요청할 수도 있습니다.
            <ul className="mt-6 space-y-3">
              <li className="flex gap-3">
                <span className="text-emerald-600 font-black">1.</span>
                <span>개인정보 열람요구, 오류 등이 있을 경우 정정 요구</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-600 font-black">2.</span>
                <span>삭제 요구 및 처리정지 요구</span>
              </li>
            </ul>
          </PrivacySection>

          <PrivacySection num="05" title="제5조 (개인정보의 파기절차 및 방법)">
            "회사"는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다. 전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 파기합니다.
          </PrivacySection>

          <PrivacySection num="06" title="제6조 (개인정보의 안전성 확보 조치)">
            "회사"는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.
            <ul className="mt-6 space-y-3">
              <li className="flex gap-3">
                <span className="text-emerald-600 font-black">•</span>
                <span>관리적 조치: 내부관리계획 수립 및 시행, 정기적 직원 교육</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-600 font-black">•</span>
                <span>기술적 조치: 개인정보처리시스템 등의 접근권한 관리, 고유식별정보 등의 암호화, 보안프로그램 설치</span>
              </li>
            </ul>
          </PrivacySection>

          <PrivacySection num="07" title="제7조 (개인정보 보호책임자)">
            "회사"는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 이용자의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
            <div className="mt-8 p-8 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/5 space-y-4">
              <div>
                <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-1">Chief Privacy Officer</p>
                <p className="text-base font-black text-slate-900 dark:text-white">성함: 이종주</p>
                <p className="text-sm font-bold text-slate-500">연락처: zmetron@nate.com</p>
              </div>
            </div>
          </PrivacySection>

          {/* Policy Change Notice */}
          <div className="mt-32 p-10 bg-slate-900 dark:bg-white/5 rounded-[2.5rem] text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-10 opacity-10 rotate-12"><ShieldAlert className="w-48 h-48" /></div>
            <div className="relative z-10 space-y-6">
              <h3 className="text-2xl font-black flex items-center gap-3">방침 변경에 관한 공지</h3>
              <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-xl">
                본 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 교정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
              </p>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}

// --- Helper Components ---
function PrivacySection({ num, title, children }: { num: string, title: string, children: React.ReactNode }) {
  return (
    <section className="space-y-6 group">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 flex items-center justify-center text-[13px] font-black text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
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
