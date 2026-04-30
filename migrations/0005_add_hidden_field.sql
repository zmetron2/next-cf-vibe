-- 0005_add_hidden_field.sql
ALTER TABLE practice_projects ADD COLUMN is_hidden INTEGER DEFAULT 0;
