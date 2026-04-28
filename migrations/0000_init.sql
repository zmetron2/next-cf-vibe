-- Migration: Initialize Admin Table
DROP TABLE IF EXISTS admins;
CREATE TABLE admins (
    id TEXT PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL, -- In a real app, this should be hashed
    role TEXT DEFAULT 'admin',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Insert Initial Admin
INSERT INTO admins (id, username, password) VALUES ('1', 'ljj', '0000');
