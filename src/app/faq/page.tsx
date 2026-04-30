'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle, ArrowRight, Search, Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ_DATA: FAQItem[] = [
  { category: '서비스 이용', question: '비전공자도 바이브 코딩을 배울 수 있나요?', answer: '네, 물론입니다! 바이브 코딩은 복잡한 문법보다 논리적 흐름과 AI 활용 능력을 중시하므로 비전공자분들이 더 빠르게 결과물을 만드는 경우가 많습니다.' },
  { category: '서비스 이용', question: '수강 기간에 제한이 있나요?', answer: '현재 제공되는 모든 사전 학습 및 가이드 자료는 기간 제한 없이 영구적으로 이용하실 수 있습니다.' },
  { category: '기술 지원', question: 'Cursor AI 에디터는 유료로만 사용 가능한가요?', answer: '아니요, Cursor는 무료 버전으로도 충분한 기능을 제공합니다. 학습 초기에는 무료 버전으로 시작하시는 것을 권장합니다.' },
  { category: '기술 지원', question: '코드가 동작하지 않을 때는 어떻게 하나요?', answer: '먼저 AI에게 오류 메시지를 그대로 전달하여 해결책을 물어보세요. 그래도 해결되지 않는다면 문의하기 페이지를 통해 질문을 남겨주시면 답변해 드립니다.' },
  { category: '결제/계정', question: '회원 가입 없이도 이용할 수 있나요?', answer: '기본적인 가이드와 자료실 조회는 가능하지만, 실습 성취도 저장 및 프리미엄 자료 이용을 위해서는 로그인이 필요합니다.' },
  { category: '결제/계정', question: '비밀번호를 잊어버렸어요.', answer: '로그인 페이지의 비밀번호 찾기 기능을 이용하시거나, 등록된 이메일로 문의해 주시면 재설정을 도와드립니다.' }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState('전체');

  const categories = ['전체', ...Array.from(new Set(FAQ_DATA.map(item => item.category)))];
  const filteredFAQ = activeCategory === '전체' ? FAQ_DATA : FAQ_DATA.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans transition-colors">
      
      {/* Header Section */}
      <header className="relative py-20 md:py-32 px-6 overflow-hidden border-b border-slate-200 dark:border-white/5">
        <div className="absolute inset-0 bg-slate-50 dark:bg-[#0b0f1a] -z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.08),transparent_50%)] -z-10" />
        
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-widest animate-in fade-in duration-700">
            <HelpCircle className="w-3 h-3" /> FAQ Support Center
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight tracking-tighter">
            자주 하는 질문
          </h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto leading-relaxed text-sm md:text-base font-medium">
            궁금한 점이 있으신가요? 학습자들이 가장 많이 묻는 질문들을 모았습니다.<br />
            해결되지 않는 질문은 1:1 문의를 이용해주세요.
          </p>

          <div className="flex flex-wrap justify-center gap-2 pt-6">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => { setActiveCategory(cat); setOpenIndex(null); }}
                className={`px-6 py-2 rounded-full text-xs font-black transition-all ${activeCategory === cat ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' : 'bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-500 hover:border-indigo-500'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* FAQ List */}
      <main className="max-w-3xl mx-auto w-full px-6 py-16">
        <div className="space-y-4">
          {filteredFAQ.map((item, index) => (
            <div 
              key={index} 
              className={`group bg-white dark:bg-slate-900 rounded-3xl border transition-all duration-300 overflow-hidden ${openIndex === index ? 'border-indigo-500 shadow-xl shadow-indigo-500/5' : 'border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left"
              >
                <div className="flex items-center gap-4">
                  <span className={`text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-widest ${openIndex === index ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-white/10 text-slate-400'}`}>
                    {item.category}
                  </span>
                  <h3 className={`text-base font-black transition-colors ${openIndex === index ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-800 dark:text-white'}`}>
                    {item.question}
                  </h3>
                </div>
                <div className={`p-2 rounded-full transition-all ${openIndex === index ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 rotate-180' : 'text-slate-300'}`}>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>
              
              <div className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 md:px-8 pb-8">
                  <div className="h-px bg-slate-100 dark:bg-white/5 mb-6" />
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                    {item.answer}
                  </p>
                  <div className="mt-8 pt-8 border-t border-slate-50 dark:border-white/5 flex items-center justify-between">
                    <p className="text-[11px] text-slate-400 font-bold">도움이 더 필요하신가요?</p>
                    <button className="text-[11px] font-black text-indigo-600 flex items-center gap-1 hover:underline">
                      1:1 문의하기 <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Banner */}
        <div className="mt-20 bg-slate-900 rounded-3xl p-8 md:p-12 text-center space-y-6 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:scale-125 transition-transform">
            <MessageCircle className="w-32 h-32 text-indigo-500" />
          </div>
          <div className="relative z-10 space-y-4">
            <h3 className="text-2xl font-black text-white">원하는 답변을 찾지 못하셨나요?</h3>
            <p className="text-slate-400 text-sm max-w-sm mx-auto font-medium">
              걱정 마세요! 저희 서포트 팀이 언제든지 당신의 궁금증을 해결해 드릴 준비가 되어 있습니다.
            </p>
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-2xl font-black transition-all shadow-xl shadow-indigo-600/20 active:scale-95">
              지금 바로 문의하기
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
