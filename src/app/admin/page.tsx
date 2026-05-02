'use client';

import React, { useState, useEffect } from 'react';
import { MessageSquare, Users, CheckCircle2, Clock, MoreHorizontal } from 'lucide-react';

interface Inquiry {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  message: string;
  status: string;
  created_at: string;
}

interface Student {
  id: number;
  name: string;
  email: string;
  phone: string;
  course: string;
  progress: number;
  status: string;
  joined_at: string;
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'inquiries' | 'students'>('inquiries');
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (activeTab === 'inquiries') {
      fetchInquiries();
    } else {
      fetchStudents();
    }
  }, [activeTab]);

  const fetchInquiries = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/inquiries');
      const data = (await res.json()) as { success: boolean; data: Inquiry[] };
      if (data.success) {
        setInquiries(data.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchStudents = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/students');
      const data = (await res.json()) as { success: boolean; data: Student[] };
      if (data.success) {
        setStudents(data.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: number, status: string) => {
    try {
      await fetch('/api/inquiries', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status })
      });
      fetchInquiries();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0b0f1a] pt-8 pb-20 font-sans transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-2">관리자 대쉬보드</h1>
            <p className="text-slate-500 font-medium">플랫폼의 데이터를 통합 관리합니다.</p>
          </div>
          <div className="flex bg-white dark:bg-slate-900 rounded-xl p-1 shadow-sm border border-slate-200 dark:border-white/5">
            <button
              onClick={() => setActiveTab('inquiries')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${activeTab === 'inquiries' ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400' : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-white/5'}`}
            >
              <MessageSquare size={16} /> 문의하기 관리
            </button>
            <button
              onClick={() => setActiveTab('students')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${activeTab === 'students' ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400' : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-white/5'}`}
            >
              <Users size={16} /> 교육생 관리
            </button>
          </div>
        </div>

        {activeTab === 'inquiries' && (
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-white/5 shadow-xl shadow-indigo-500/5 overflow-hidden animate-in fade-in duration-300">
            <div className="p-6 border-b border-slate-100 dark:border-white/5 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/30">
              <h2 className="text-lg font-black text-slate-800 dark:text-white">최근 접수된 문의</h2>
              <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 rounded-full text-xs font-black">총 {inquiries.length}건</span>
            </div>
            
            {loading ? (
              <div className="p-12 text-center text-slate-400 font-medium">데이터를 불러오는 중입니다...</div>
            ) : inquiries.length === 0 ? (
              <div className="p-12 text-center text-slate-400 font-medium">아직 접수된 문의가 없습니다.</div>
            ) : (
              <div className="divide-y divide-slate-100 dark:divide-white/5">
                {inquiries.map((inq) => (
                  <div key={inq.id} className="p-6 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <div className="flex flex-col lg:flex-row gap-6 justify-between">
                      <div className="space-y-4 flex-1">
                        <div className="flex items-center gap-3">
                          <span className="font-black text-slate-900 dark:text-white">{inq.name}</span>
                          <span className="text-xs font-bold text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">{new Date(inq.created_at).toLocaleDateString()}</span>
                          <span className={`text-xs font-black px-2 py-0.5 rounded-full ${inq.status === 'pending' ? 'bg-amber-100 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400' : 'bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'}`}>
                            {inq.status === 'pending' ? '답변대기' : '답변완료'}
                          </span>
                        </div>
                        <div className="text-sm font-medium text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-white/5 p-4 rounded-xl whitespace-pre-wrap">
                          {inq.message}
                        </div>
                        <div className="flex items-center gap-4 text-xs font-medium text-slate-500 dark:text-slate-400">
                          <span>📧 {inq.email}</span>
                          {inq.phone && <span>📱 {inq.phone}</span>}
                        </div>
                      </div>
                      
                      <div className="flex lg:flex-col gap-2 shrink-0">
                        {inq.status === 'pending' ? (
                          <button onClick={() => updateStatus(inq.id, 'completed')} className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-black rounded-lg transition-colors flex items-center justify-center gap-2">
                            <CheckCircle2 size={14} /> 답변완료 처리
                          </button>
                        ) : (
                          <button onClick={() => updateStatus(inq.id, 'pending')} className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs font-black rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center justify-center gap-2">
                            <Clock size={14} /> 대기 상태로 변경
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'students' && (
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-white/5 shadow-xl shadow-indigo-500/5 overflow-hidden animate-in fade-in duration-300">
            <div className="p-6 border-b border-slate-100 dark:border-white/5 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/30">
              <h2 className="text-lg font-black text-slate-800 dark:text-white">교육생 명단</h2>
              <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 rounded-full text-xs font-black">총 {students.length}명</span>
            </div>

            {loading ? (
              <div className="p-12 text-center text-slate-400 font-medium">데이터를 불러오는 중입니다...</div>
            ) : students.length === 0 ? (
              <div className="p-12 text-center text-slate-400 font-medium">등록된 교육생이 없습니다.</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[700px]">
                  <thead>
                    <tr className="bg-slate-50/50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-white/5">
                      <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">교육생 정보</th>
                      <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">수강 코스</th>
                      <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">학습 진도율</th>
                      <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">상태</th>
                      <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">관리</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                    {students.map((student) => (
                      <tr key={student.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                        <td className="px-6 py-5">
                          <div className="flex flex-col">
                            <span className="font-black text-slate-900 dark:text-white">{student.name}</span>
                            <span className="text-[11px] font-medium text-slate-400">{student.email}</span>
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <span className="text-sm font-bold text-slate-600 dark:text-slate-300">{student.course}</span>
                        </td>
                        <td className="px-6 py-5">
                          <div className="w-40">
                            <div className="flex justify-between items-center mb-1.5">
                              <span className="text-[10px] font-black text-indigo-600 dark:text-indigo-400">{student.progress}%</span>
                            </div>
                            <div className="w-full h-1.5 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-indigo-600 transition-all duration-1000" 
                                style={{ width: `${student.progress}%` }}
                              />
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <span className={`text-[10px] font-black px-2 py-1 rounded-md uppercase tracking-wider ${
                            student.status === 'active' ? 'bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600' :
                            student.status === 'completed' ? 'bg-blue-100 dark:bg-blue-500/10 text-blue-600' :
                            'bg-slate-100 dark:bg-white/5 text-slate-500'
                          }`}>
                            {student.status === 'active' ? '수강중' : 
                             student.status === 'completed' ? '수료' : '일시정지'}
                          </span>
                        </td>
                        <td className="px-6 py-5 text-right">
                          <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors text-slate-400">
                            <MoreHorizontal size={18} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}

      </div>
    </div>
  );
}
