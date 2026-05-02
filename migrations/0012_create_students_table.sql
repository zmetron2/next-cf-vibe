DROP TABLE IF EXISTS vibe_students;
CREATE TABLE vibe_students (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  phone TEXT,
  course TEXT DEFAULT '프런트엔드 정규과정',
  progress INTEGER DEFAULT 0,
  status TEXT DEFAULT 'active', -- active, completed, paused
  joined_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Seed Initial Students
INSERT INTO vibe_students (name, email, phone, course, progress, status)
VALUES 
('김철수', 'chulsoo@example.com', '010-1234-5678', '프런트엔드 정규과정', 45, 'active'),
('이영희', 'younghee@example.com', '010-9876-5432', '웹 디자인 마스터', 80, 'active'),
('박지민', 'jimin@example.com', '010-5555-4444', '프런트엔드 정규과정', 10, 'active'),
('최다은', 'daeun@example.com', '010-1111-2222', 'UI/UX 입문', 100, 'completed');
