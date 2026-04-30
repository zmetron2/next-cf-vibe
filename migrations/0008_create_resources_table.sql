-- Create vibe_resources table
CREATE TABLE IF NOT EXISTS vibe_resources (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    url TEXT NOT NULL,
    category TEXT NOT NULL,
    tags TEXT,
    provider TEXT,
    rating REAL DEFAULT 0,
    icon_text TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Insert initial data
INSERT INTO vibe_resources (title, description, url, category, tags, provider, rating, icon_text) VALUES 
('MDN Web Docs', '웹 개발을 위한 종합 문서. HTML, CSS, JS 가이드 제공', 'https://developer.mozilla.org', '문서/가이드', 'HTML,CSS,JS', 'Mozilla', 4.9, 'MDN'),
('React 공식 문서', 'React 공식 홈. 최신 기능 가이드 제공', 'https://react.dev', '문서/가이드', 'Frontend,React', 'Meta', 4.8, 'React'),
('Tailwind CSS', '유틸리티 퍼스트 CSS 프레임워크 공식 문서', 'https://tailwindcss.com', '개발도구', 'CSS,Tailwind', 'Tailwind Labs', 4.7, 'TW'),
('Figma', '인터랙티브 디자인 및 프로토타이핑 도구', 'https://figma.com', '디자인/UX', 'Design,UI', 'Figma', 4.8, 'Fig'),
('ChatGPT', 'AI 기반 대화형 모델 및 프롬프트 서비스', 'https://chat.openai.com', 'AI도구', 'AI,LLM', 'OpenAI', 4.9, 'GPT'),
('Vercel', 'Next.js 최적화 배포 및 호스팅 플랫폼', 'https://vercel.com', '배포/운영', 'Cloud,Hosting', 'Vercel', 4.8, 'Ver'),
('Supabase', '오픈소스 Firebase 대안 데이터베이스 플랫폼', 'https://supabase.com', 'API', 'DB,Backend', 'Supabase', 4.7, 'Supa'),
('Namecheap', '합리적인 가격의 도메인 등록 및 관리 서비스', 'https://namecheap.com', '도메인', 'Domain,Infra', 'Namecheap', 4.5, 'Name'),
('Visual Studio Code', '가장 인기 있는 오픈소스 코드 에디터', 'https://code.visualstudio.com', '개발도구', 'Editor,IDE', 'Microsoft', 4.9, 'VS');
