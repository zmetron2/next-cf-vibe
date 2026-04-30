-- 0006_standardize_completion_rate.sql
-- 1. 새로운 테이블 생성 (타입 변경을 위해)
CREATE TABLE practice_projects_new (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  level TEXT,
  category TEXT,
  tags TEXT,
  curriculum_link TEXT,
  views TEXT DEFAULT '0',
  completion_rate INTEGER DEFAULT 0,
  icon_name TEXT,
  is_hidden INTEGER DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 2. 기존 데이터 이전 (숫자만 추출하여 변환)
INSERT INTO practice_projects_new (id, title, description, level, category, tags, curriculum_link, views, completion_rate, icon_name, is_hidden, created_at)
SELECT id, title, description, level, category, tags, curriculum_link, views, 
       CAST(REPLACE(completion_rate, '회', '') AS INTEGER), 
       icon_name, is_hidden, created_at FROM practice_projects;

-- 3. 테이블 교체
DROP TABLE practice_projects;
ALTER TABLE practice_projects_new RENAME TO practice_projects;
