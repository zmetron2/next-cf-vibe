-- Migration: Practice Projects Table
DROP TABLE IF EXISTS practice_projects;
CREATE TABLE practice_projects (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    level TEXT NOT NULL, -- 입문, 초급, 중급, 고급
    category TEXT NOT NULL, -- UI/UX, 데이터 처리 등
    tags TEXT, -- JSON string or comma separated
    curriculum_link TEXT, -- 연계 커리큘럼 회차
    views TEXT DEFAULT '0',
    completion_rate TEXT DEFAULT '0%',
    icon_name TEXT DEFAULT 'Code',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Insert Initial Practice Projects
INSERT INTO practice_projects (id, title, description, level, category, tags, curriculum_link, views, completion_rate, icon_name) VALUES 
('1', '로그인 기능 만들기', '이메일/비밀번호 로그인 기능을 구현해보세요.', '입문', '인증/보안', '인증,폼 처리', '2회차 - 인증 기초', '12.4K', '85%', 'ShieldCheck'),
('2', '할 일 리스트 (Todo)', '할 일 추가, 수정, 삭제가 가능한 Todo 앱을 만들어보세요.', '입문', 'CRUD', 'CRUD,로컬스토리지', '3회차 - 상태 관리', '8.7K', '78%', 'CheckCircle2'),
('3', '파일 업로드 기능', '이미지 파일을 선택하고 미리보기 및 업로드를 구현해보세요.', '초급', '파일 관리', '파일,업로드,미리보기', '6회차 - 파일 처리', '6.2K', '72%', 'Upload'),
('4', '검색 & 필터 기능', '검색어 입력과 필터링 기능을 구현해보세요.', '초급', '데이터 처리', '검색,필터,UI/UX', '5회차 - 데이터 필터링', '5.1K', '81%', 'Search'),
('5', '게시판 CRUD', '게시글 등록, 조회, 수정, 삭제 기능을 구현해보세요.', '중급', 'CRUD', 'CRUD,폼,API', '8회차 - CRUD 구현', '12.4K', '76%', 'Edit3'),
('6', '차트/그래프 만들기', '데이터를 시각화하는 차트 기능을 구현해보세요.', '중급', 'UI/UX', '차트,데이터 시각화', '10회차 - 데이터 시각화', '4.2K', '68%', 'LineChart'),
('7', '댓글 기능 구현', '게시글에 댓글을 작성하고 관리하는 기능을 구현해보세요.', '중급', 'CRUD', '댓글,대화형,CRUD', '9회차 - 관계형 데이터', '6.8K', '74%', 'MessageSquare'),
('8', '다크모드 전환', '라이트/다크 모드 전환 기능을 구현해보세요.', '입문', 'UI/UX', 'UI/UX,테마,CSS', '1회차 - UI 기본', '7.3K', '85%', 'Moon');
