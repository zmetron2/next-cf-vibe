import { getRequestContext } from '@cloudflare/next-on-pages';

export const runtime = 'edge';

export default async function Home() {
  const { env } = getRequestContext();
  
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 flex flex-col items-center justify-center p-8 font-[family-name:var(--font-geist-sans)]">
      <div className="max-w-2xl w-full space-y-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <h1 className="text-6xl font-black tracking-tighter bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          VIBE CHECK
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-xl">
            <h2 className="text-xl font-bold mb-2">D1 Database</h2>
            <div className="flex items-center justify-center gap-2">
              <div className={`w-3 h-3 rounded-full ${env.DB ? 'bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]' : 'bg-red-400'}`} />
              <span className="text-slate-400">{env.DB ? 'Connected' : 'Missing'}</span>
            </div>
          </div>
          
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-xl">
            <h2 className="text-xl font-bold mb-2">R2 Storage</h2>
            <div className="flex items-center justify-center gap-2">
              <div className={`w-3 h-3 rounded-full ${env.BUCKET ? 'bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]' : 'bg-red-400'}`} />
              <span className="text-slate-400">{env.BUCKET ? 'Connected' : 'Missing'}</span>
            </div>
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10">
          <p className="text-lg text-slate-300 leading-relaxed">
            이 페이지는 <span className="text-blue-300 font-mono">Next.js Edge Runtime</span>에서 실행 중입니다.<br />
            에이전트가 관리하는 <span className="text-purple-300 font-bold italic">바이브 코딩</span> 프로젝트의 테스트 배포입니다.
          </p>
        </div>

        <div className="flex gap-4 justify-center">
          <a 
            href="/api/vibe" 
            className="px-6 py-3 rounded-full bg-white text-slate-950 font-bold hover:scale-105 transition-transform"
          >
            API Vibe Check
          </a>
        </div>
      </div>
    </main>
  );
}
